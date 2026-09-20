#!/usr/bin/env bash
set -euo pipefail

exec 9>/run/lock/changemoment-rebuild.lock
flock -n 9 || exit 0

APP_REPO=/srv/changemoment/app
RELEASES_ROOT=/srv/changemoment/releases
BUILDS_ROOT=/srv/changemoment/builds
MARKER=/var/lib/changemoment/rebuild-requested
ACTIVE_LINK=/srv/changemoment/current
BUILD_ID="$(date -u +%Y%m%dT%H%M%SZ)-$$"
ACTIVE_RELEASE="$(readlink -f "$ACTIVE_LINK")"
TARGET_REVISION="$(cat "$ACTIVE_RELEASE/.revision")"
BUILD_DIR="$BUILDS_ROOT/$BUILD_ID-$TARGET_REVISION"
RELEASE_DIR="$RELEASES_ROOT/$BUILD_ID-$TARGET_REVISION"
PREVIOUS_RELEASE="$ACTIVE_RELEASE"
WORKTREE_CREATED=0
SWITCHED=0
START_MARKER_TOKEN="$(cat "$MARKER" 2>/dev/null || true)"

case "$ACTIVE_RELEASE" in
  "$RELEASES_ROOT"/*) ;;
  *) echo "Refusing rebuild: active release is outside $RELEASES_ROOT" >&2; exit 1 ;;
esac

if [[ ! "$TARGET_REVISION" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Refusing rebuild: active release has no valid revision" >&2
  exit 1
fi

git -C "$APP_REPO" cat-file -e "$TARGET_REVISION^{commit}"
mkdir -p "$BUILDS_ROOT"

rollback_release() {
  if [[ "$SWITCHED" -eq 1 ]]; then
    ln -sfn "$PREVIOUS_RELEASE" "$ACTIVE_LINK.rollback"
    mv -Tf "$ACTIVE_LINK.rollback" "$ACTIVE_LINK"
    echo "Rolled back to $PREVIOUS_RELEASE" >&2
  fi
}

cleanup() {
  local rc=$?
  if [[ "$rc" -ne 0 ]]; then rollback_release; fi
  if [[ "$WORKTREE_CREATED" -eq 1 ]]; then
    cd /
    git -C "$APP_REPO" worktree remove --force "$BUILD_DIR" >/dev/null 2>&1 || true
  fi
  exit "$rc"
}
trap cleanup EXIT

git -C "$APP_REPO" worktree add --detach "$BUILD_DIR" "$TARGET_REVISION"
WORKTREE_CREATED=1
test -z "$(git -C "$BUILD_DIR" status --porcelain)"

export COREPACK_HOME=/srv/changemoment/.corepack
export PNPM_HOME=/srv/changemoment/.pnpm
mkdir -p "$COREPACK_HOME" "$PNPM_HOME"

cd "$BUILD_DIR"
corepack pnpm install --frozen-lockfile
WORDPRESS_URL=http://127.0.0.1/cms \
SITE_URL=https://changemoment.ca \
VITE_SITE_URL=https://changemoment.ca \
  corepack pnpm run build

test -f dist/index.html
test ! -e "$RELEASE_DIR"
mkdir -p "$RELEASE_DIR"
cp -a dist/. "$RELEASE_DIR/"
printf '%s\n' "$TARGET_REVISION" > "$RELEASE_DIR/.revision"

ln -sfn "$RELEASE_DIR" "$ACTIVE_LINK.next"
mv -Tf "$ACTIVE_LINK.next" "$ACTIVE_LINK"
SWITCHED=1

for route in / /fr/services/ /fa/services/anxiety/ /blogs/ /contact/; do
  code="$(curl --fail --silent --show-error --output /dev/null --write-out '%{http_code}' "https://changemoment.ca$route")"
  test "$code" = "200"
done

not_found_code="$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' \
  https://changemoment.ca/__automatic-rebuild-not-found__)"
test "$not_found_code" = "404"

cms_code="$(curl --location --silent --show-error --output /dev/null --write-out '%{http_code}' \
  https://changemoment.ca/cms/wp-json/changemoment/v1/posts)"
test "$cms_code" = "200"
test "$(readlink -f "$ACTIVE_LINK")" = "$RELEASE_DIR"

SWITCHED=0

# Do not discard an editorial save that arrived while this build was running.
# If the marker changed, leave it in place so systemd schedules one more build.
CURRENT_MARKER_TOKEN="$(cat "$MARKER" 2>/dev/null || true)"
if [[ -n "$START_MARKER_TOKEN" && "$CURRENT_MARKER_TOKEN" == "$START_MARKER_TOKEN" ]]; then
  rm -f "$MARKER"
fi
echo "Published WordPress content from revision $TARGET_REVISION as $RELEASE_DIR"

# Keep the eight newest releases. Validate every resolved path before removal
# and never delete the active release.
mapfile -t old_releases < <(
  find "$RELEASES_ROOT" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
    | sort -nr | tail -n +9 | cut -d' ' -f2-
)
for old_release in "${old_releases[@]}"; do
  resolved_old="$(readlink -f "$old_release" 2>/dev/null || true)"
  case "$resolved_old" in
    "$RELEASES_ROOT"/*)
      if [[ "$resolved_old" != "$(readlink -f "$ACTIVE_LINK")" ]]; then
        rm -rf -- "$resolved_old"
      fi
      ;;
  esac
done
