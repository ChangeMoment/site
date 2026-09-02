import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("WordPress rebuild deployment safety", () => {
  it("rebuilds the exact active revision in a detached clean worktree", async () => {
    const script = await readFile(resolve("deploy/wordpress/rebuild-site.sh"), "utf8");

    expect(script).toContain('TARGET_REVISION="$(cat "$ACTIVE_RELEASE/.revision")"');
    expect(script).toContain('git -C "$APP_REPO" worktree add --detach "$BUILD_DIR" "$TARGET_REVISION"');
    expect(script).toContain('test -z "$(git -C "$BUILD_DIR" status --porcelain)"');
    expect(script).toContain("corepack pnpm install --frozen-lockfile");
    expect(script).not.toContain('cd "$APP_DIR"');
    expect(script).not.toContain("/usr/local/bin/pnpm run build");
  });

  it("labels releases, validates public routes, and rolls back a failed switch", async () => {
    const script = await readFile(resolve("deploy/wordpress/rebuild-site.sh"), "utf8");

    expect(script).toContain('printf \'%s\\n\' "$TARGET_REVISION" > "$RELEASE_DIR/.revision"');
    expect(script).toContain('mv -Tf "$ACTIVE_LINK.next" "$ACTIVE_LINK"');
    expect(script).toContain("rollback_release");
    expect(script).toContain("/__automatic-rebuild-not-found__");
    expect(script).toContain('test "$not_found_code" = "404"');
    expect(script).toContain('rm -f "$MARKER"');
  });
});
