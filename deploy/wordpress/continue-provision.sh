#!/usr/bin/env bash
set -euo pipefail

APP=/srv/changemoment/app
HOST=15-156-55-113.nip.io

sudo wp --allow-root --path=/var/www/cms config set WP_HOME "http://$HOST/cms"
sudo wp --allow-root --path=/var/www/cms config set WP_SITEURL "http://$HOST/cms"
sudo -u www-data wp --path=/var/www/cms option update home "http://$HOST/cms"
sudo -u www-data wp --path=/var/www/cms option update siteurl "http://$HOST/cms"

sudo install -o admin -g www-data -m 0644 /tmp/package.json "$APP/package.json"
cd "$APP"
sudo bash deploy/wordpress/install-node-lts.sh
/usr/local/bin/npm install --include=dev --no-audit --no-fund

sudo install -o root -g root -m 0755 deploy/wordpress/rebuild-site.sh /usr/local/sbin/changemoment-rebuild
sudo install -o root -g root -m 0644 deploy/wordpress/changemoment-rebuild.service /etc/systemd/system/changemoment-rebuild.service
sudo install -o root -g root -m 0644 deploy/wordpress/changemoment-rebuild.path /etc/systemd/system/changemoment-rebuild.path

# Expose WordPress at /cms before the first frontend build so the snapshot
# fetch and Rank Math getHead calls have a reachable internal endpoint.
sudo install -d -o www-data -g www-data -m 0755 /var/www/html
sudo install -o www-data -g www-data -m 0644 deploy/wordpress/wordpress.htaccess /var/www/cms/.htaccess
sudo install -o root -g root -m 0644 deploy/wordpress/apache-changemoment.conf /etc/apache2/conf-available/changemoment.conf
sudo a2enmod rewrite headers
sudo a2enconf changemoment
sudo apache2ctl configtest
sudo systemctl reload apache2
curl --fail --silent --show-error http://127.0.0.1/cms/wp-json/changemoment/v1/posts >/dev/null

WORDPRESS_URL="http://127.0.0.1/cms" \
SITE_URL="http://$HOST" \
VITE_SITE_URL="http://$HOST" \
/usr/local/bin/npm run build

release="/srv/changemoment/releases/$(date -u +%Y%m%dT%H%M%SZ)"
mkdir -p "$release"
cp -a dist/. "$release/"
ln -sfn "$release" /srv/changemoment/current.next
mv -Tf /srv/changemoment/current.next /srv/changemoment/current

sudo sed -i 's#DocumentRoot /var/www/html#DocumentRoot /srv/changemoment/current#g' \
  /etc/apache2/sites-available/000-default.conf \
  /etc/apache2/sites-available/default-ssl.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
sudo systemctl daemon-reload
sudo systemctl enable --now changemoment-rebuild.path

curl --fail --silent --show-error http://127.0.0.1/ >/dev/null
curl --fail --silent --show-error http://127.0.0.1/cms/wp-json/changemoment/v1/posts >/dev/null
curl --fail --silent --show-error http://127.0.0.1/blogs/what-is-therapy/ >/dev/null

echo 'CHANGE_MOMENT_CONTINUATION_COMPLETED'
