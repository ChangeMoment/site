# ChangeMoment testing strategy

The release gate follows a practical test pyramid for this static React + headless WordPress site.

- Unit tests cover the route manifest, localized SEO paths, and typo-tolerant multilingual search.
- Build verification checks every localized route for crawlable HTML, canonical metadata, JSON-LD, language direction, a real 404 document, and route-level chunks.
- Staging smoke tests verify HTTP status codes, WordPress/Rank Math output, headers, and representative English, French, and Persian pages after deployment.

Initial targets:

- 100% of public route definitions represented by the shared manifest.
- 100% of language-prefix rules exercised.
- Search normalization covered for English typo tolerance, French accents, and Persian character variants.
- Every generated route must pass the distribution verifier; no percentage-based exception is allowed.

Known gaps that require product input are the contact submission workflow, approved legal copy, and licensed Persian font files. Browser E2E for the future form should cover validation, successful delivery, duplicate submission prevention, and backend failure handling once a real form endpoint is chosen.
