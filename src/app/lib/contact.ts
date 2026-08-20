export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  language: string;
  message: string;
  website: string;
}

export class ContactSubmissionError extends Error {
  constructor() {
    super("Contact form submission failed");
    this.name = "ContactSubmissionError";
  }
}

export async function submitContactForm(
  payload: ContactPayload,
  signal?: AbortSignal,
): Promise<void> {
  let response: Response;

  try {
    response = await fetch("/cms/wp-json/changemoment/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "omit",
      signal,
    });
  } catch {
    throw new ContactSubmissionError();
  }

  if (!response.ok) {
    throw new ContactSubmissionError();
  }
}
