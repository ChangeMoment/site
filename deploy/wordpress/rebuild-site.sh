#!/usr/bin/env bash
set -euo pipefail

exec 9>/run/lock/changemoment-rebuild.lock
flock -n 9 || exit 0

APP_DIR=/srv/changemoment/app
RELEASE_DIR=/srv/changemoment/releases/$(date -u +%Y%m%dT%H%M%SZ)
MARKER=/var/lib/changemoment/rebuild-requested

cd "$APP_DIR"
WORDPRESS_URL=http://127.0.0.1/cms \
SITE_URL=https://changemoment.ca \
VITE_SITE_URL=https://changemoment.ca \
  /usr/local/bin/pnpm run build

mkdir -p "$RELEASE_DIR"
cp -a dist/. "$RELEASE_DIR/"
ln -sfn "$RELEASE_DIR" /srv/changemoment/current.next
mv -Tf /srv/changemoment/current.next /srv/changemoment/current
rm -f "$MARKER"

find /srv/changemoment/releases -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
  | sort -nr | tail -n +4 | cut -d' ' -f2- | xargs -r rm -rf
