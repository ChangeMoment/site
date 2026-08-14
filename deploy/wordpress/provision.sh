#!/usr/bin/env bash
set -euo pipefail

APP_ARCHIVE=/tmp/changemoment-app.tar.gz
SEED_FILE=/tmp/changemoment-legacy-blog-seed.json
HOST=15-156-55-113.nip.io
WP=/usr/local/bin/wp

test -s "$APP_ARCHIVE"
test -s "$SEED_FILE"

sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y curl xz-utils rsync

sudo mkdir -p /srv/changemoment/app /srv/changemoment/releases /var/lib/changemoment
sudo chown -R admin:www-data /srv/changemoment /var/lib/changemoment
sudo chmod 2775 /var/lib/changemoment

if [[ -d /var/www/html/wp-admin && ! -d /var/www/cms/wp-admin ]]; then
  sudo mv /var/www/html /var/www/cms
fi
test -f /var/www/wp-config.php
test -d /var/www/cms/wp-admin

sudo install -d -o admin -g www-data -m 2775 /var/www/cms/wp-content/mu-plugins
sudo install -o admin -g www-data -m 0644 /tmp/changemoment-headless.php /var/www/cms/wp-content/mu-plugins/changemoment-headless.php

sudo -u www-data "$WP" --path=/var/www/cms option update siteurl "http://$HOST/cms"
sudo -u www-data "$WP" --path=/var/www/cms option update home "http://$HOST/cms"
sudo "$WP" --allow-root --path=/var/www/cms config set WP_HOME "http://$HOST/cms"
sudo "$WP" --allow-root --path=/var/www/cms config set WP_SITEURL "http://$HOST/cms"
sudo -u www-data "$WP" --path=/var/www/cms rewrite structure '/blog/%postname%/' --hard
sudo -u www-data "$WP" --path=/var/www/cms rewrite flush --hard

# The sample post has no required French/Persian fields and would make the
# strict multilingual export fail. Remove only that known WordPress sample.
HELLO_WORLD_ID="$(sudo -u www-data "$WP" --path=/var/www/cms post list --post_type=post --name=hello-world --field=ID | head -n 1)"
if [[ -n "$HELLO_WORLD_ID" ]]; then
  sudo -u www-data "$WP" --path=/var/www/cms post delete "$HELLO_WORLD_ID" --force
fi

sudo -u www-data "$WP" --path=/var/www/cms plugin deactivate jetpack || true
sudo -u www-data "$WP" --path=/var/www/cms plugin install seo-by-rank-math --activate
sudo -u www-data "$WP" --path=/var/www/cms plugin delete \
  akismet all-in-one-wp-migration all-in-one-seo-pack amp \
  google-analytics-for-wordpress hello jetpack simple-tags \
  w3-total-cache wp-mail-smtp || true
sudo -u www-data "$WP" --path=/var/www/cms option update rank_math_registration_skip 1
sudo -u www-data "$WP" --path=/var/www/cms eval '$options = get_option("rank-math-options-general", []); if (!is_array($options)) { $options = []; } $options["headless_support"] = "on"; update_option("rank-math-options-general", $options);'
sudo -u www-data "$WP" --path=/var/www/cms eval-file /tmp/seed-blog.php

rm -rf /srv/changemoment/app/*
tar -xzf "$APP_ARCHIVE" -C /srv/changemoment/app
cd /srv/changemoment/app
sudo bash deploy/wordpress/install-node-lts.sh
sudo install -o www-data -g www-data -m 0644 deploy/wordpress/wordpress.htaccess /var/www/cms/.htaccess
/usr/local/bin/npm install --include=dev --no-audit --no-fund

sudo install -o root -g root -m 0755 deploy/wordpress/rebuild-site.sh /usr/local/sbin/changemoment-rebuild
sudo install -o root -g root -m 0644 deploy/wordpress/changemoment-rebuild.service /etc/systemd/system/changemoment-rebuild.service
sudo install -o root -g root -m 0644 deploy/wordpress/changemoment-rebuild.path /etc/systemd/system/changemoment-rebuild.path

WORDPRESS_URL="http://127.0.0.1/cms" SITE_URL="http://$HOST" VITE_SITE_URL="http://$HOST" /usr/local/bin/npm run build
release="/srv/changemoment/releases/$(date -u +%Y%m%dT%H%M%SZ)"
mkdir -p "$release"
cp -a dist/. "$release/"
ln -sfn "$release" /srv/changemoment/current.next
mv -Tf /srv/changemoment/current.next /srv/changemoment/current

sudo install -o root -g root -m 0644 deploy/wordpress/apache-changemoment.conf /etc/apache2/conf-available/changemoment.conf
sudo sed -i 's#DocumentRoot /var/www/html#DocumentRoot /srv/changemoment/current#g' /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/default-ssl.conf
sudo a2enmod rewrite headers
sudo a2enconf changemoment
sudo apache2ctl configtest
sudo systemctl reload apache2
sudo systemctl daemon-reload
sudo systemctl enable --now changemoment-rebuild.path

curl --fail --silent --show-error "http://127.0.0.1/" >/dev/null
curl --fail --silent --show-error "http://127.0.0.1/cms/wp-json/changemoment/v1/posts" >/dev/null
curl --fail --silent --show-error "http://127.0.0.1/blogs/what-is-therapy/" >/dev/null

echo "ChangeMoment provision completed."
