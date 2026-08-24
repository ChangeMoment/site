import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const plugin = readFileSync(
  new URL("../../deploy/wordpress/changemoment-headless.php", import.meta.url),
  "utf8",
);
const envExample = readFileSync(new URL("../../.env.example", import.meta.url), "utf8");

describe("contact backend delivery", () => {
  it("loads the Resend credential from a server-only env file", () => {
    expect(plugin).toContain("/etc/changemoment/.env");
    expect(plugin).toContain("cm_env_value('RESEND_API_KEY')");
    expect(envExample).toContain("RESEND_API_KEY=");
    expect(envExample).not.toMatch(/re_[A-Za-z0-9_-]{16,}/);
  });

  it("uses the Resend API and fails closed when delivery is not accepted", () => {
    expect(plugin).toContain("https://api.resend.com/emails");
    expect(plugin).toContain("'Authorization' => 'Bearer ' . $api_key");
    expect(plugin).toContain("'Idempotency-Key' => wp_generate_uuid4()");
    expect(plugin).toContain("['code' => 'delivery_failed'], 502");
    expect(plugin).not.toContain("wp_mail(");
  });

  it("keeps the sender on the verified domain and replies to the visitor", () => {
    expect(plugin).toContain("ChangeMoment Website <website@changemoment.ca>");
    expect(plugin).toContain("'to' => ['info@changemoment.ca']");
    expect(plugin).toContain("'reply_to' => $reply_to");
  });

  it("accepts only production-owned browser origins", () => {
    expect(plugin).toContain("'https://changemoment.ca'");
    expect(plugin).toContain("'https://www.changemoment.ca'");
    expect(plugin).not.toContain("15-156-55-113.nip.io");
  });

  it("blocks anonymous author enumeration and legacy XML-RPC", () => {
    expect(plugin).toContain("add_filter('rest_endpoints'");
    expect(plugin).toContain("str_starts_with($route, '/wp/v2/users/')");
    expect(plugin).toContain("add_filter('xmlrpc_enabled', '__return_false')");
  });
});
