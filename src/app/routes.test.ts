import { describe, expect, it } from "vitest";
import { SERVICE_SLUGS, localizedRoutes } from "../../shared/route-manifest.mjs";
import { services } from "./data/services";

describe("route manifest", () => {
  it("has one unique localized URL for every supported route", () => {
    const routes = localizedRoutes();
    expect(new Set(routes.map((route) => route.path)).size).toBe(routes.length);
    expect(routes).toHaveLength(81);
  });

  it("matches the service data exactly", () => {
    expect([...SERVICE_SLUGS].sort()).toEqual(services.map((service) => service.slug).sort());
  });
});
