import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactSubmissionError, submitContactForm, type ContactPayload } from "./contact";

const payload: ContactPayload = {
  name: "Test Person",
  email: "test@example.com",
  phone: "+1 604 555 0100",
  language: "en",
  message: "This is a delivery test.",
  website: "",
};

describe("contact form submission", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("posts JSON to the same-origin WordPress endpoint", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 202 }));
    vi.stubGlobal("fetch", fetchMock);

    await submitContactForm(payload);

    expect(fetchMock).toHaveBeenCalledWith(
      "/cms/wp-json/changemoment/v1/contact",
      expect.objectContaining({
        method: "POST",
        credentials: "omit",
        body: JSON.stringify(payload),
      }),
    );
  });

  it("fails closed when WordPress rejects the message", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 502 })));

    await expect(submitContactForm(payload)).rejects.toBeInstanceOf(ContactSubmissionError);
  });

  it("returns the same safe error for network failures", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network details")));

    await expect(submitContactForm(payload)).rejects.toBeInstanceOf(ContactSubmissionError);
  });
});
