Redesign the service detail page template for ChangeMoment.

Context:
ChangeMoment has 14 counselling service pages. All service pages must use one shared reusable template/layout, but each page must render custom content, custom hero image, custom SEO text, custom FAQ, and custom related services based on the selected service.

Current issue:
The current service page feels too light in content. It has a calm layout, but each service page should provide more helpful information about the specific service. Also, the hero section should feel more emotional, warm, and professional, similar in direction to Safe Haven Counselling service pages, but still fully aligned with ChangeMoment’s own brand identity.

Brand direction:
- Calm, soft, gentle, premium, warm, bright, open, trustworthy.
- Main background should stay mostly white / soft cream.
- Use the existing ChangeMoment palette: off-white, cream, light olive, muted chocolate/brown.
- Avoid orange/yellow tones.
- Keep the design minimal, spacious, elegant, and not clinical/cold.
- Do not make the page look generic or over-designed.
- Do not use cliché mental-health visuals like dandelions, puzzle pieces, exaggerated sad faces, or obvious therapy stock photos.
- Images should feel real, human, soft, natural, and emotionally grounded.

Main design change:
Create a new service page template with a real photographic hero section for every service.

Hero requirements:
- Full-width or wide cinematic hero area below the navbar.
- Each service page must have a different real photo background that matches that specific service.
- Add a soft white / cream overlay layer on top of the photo with low-to-medium opacity so the text is always readable.
- Add a subtle left-to-right gradient overlay if needed, so the content area has strong contrast.
- Text should sit on the left side on desktop.
- Use a beautiful opening composition:
  - breadcrumb
  - small service icon or category label
  - service title
  - short emotional intro paragraph
  - primary CTA: “Book an Appointment”
  - secondary CTA: “Contact Us”
  - small reassurance note: “Appointments are booked securely and confidentially.”
- Keep the hero calm, not dramatic.
- Add very subtle motion: slow fade-in for title/content and a barely visible slow image scale/parallax effect. Motion must be smooth and not distracting.
- On mobile, image remains visible but content must stay readable with stronger overlay if needed.

Service page sections:
Build the template with these sections in this order:

1. Hero with service-specific photo and intro.

2. Short overview section:
   Title example: “A supportive space for [service name]”
   Include 2–3 paragraphs explaining the service in a warm, professional, non-alarming tone.

3. “How this support can help”
   Use 4–6 bullet cards with small icons.
   These should be specific to each service, not generic copy.

4. “What you may be experiencing”
   Use 4–6 gentle bullet points.
   Avoid diagnosing the visitor. Use language like “You may notice…” or “This support may be helpful if…”

5. “What sessions can look like”
   Explain the process:
   - first conversation / intake
   - understanding goals
   - creating a support plan
   - ongoing sessions
   - review and adjustment
   This section should be service-specific where possible.

6. “Who this service is for”
   Use 4–5 points.

7. “Approaches we may draw from”
   Include a soft section for therapeutic approaches, but avoid overclaiming.
   Example wording:
   “Depending on your needs and therapist fit, support may draw from evidence-informed approaches such as…”
   Include approaches relevant to each service.

8. Quote / brand moment section:
   Keep the current poetic ChangeMoment feeling, but make it more integrated.
   Example: “Change often begins in the moment we feel safely met.”
   Use a soft cream/olive band with a subtle line illustration.

9. FAQ section:
   Add 4–6 service-specific FAQ items.
   The FAQ accordion must work in all languages.

10. Related services:
   Keep related service cards but make them service-specific.
   Show 3 related services.
   Cards should include:
   - icon
   - title
   - short description
   - Learn More
   - Book an Appointment

11. Bottom CTA:
   Keep the current “You don’t have to figure this out alone” section, but polish it visually so it matches the new service page.
   Include two cards:
   - New to ChangeMoment? Free 20-min Consultation
   - Already a client? Book a Regular Appointment

Data structure:
Do not hardcode the page content inside the layout.
Create a single service detail template that reads from a service content object/map.

The service content object must support all 14 services:

1. Online Counselling
2. Individual Counselling
3. Relationship and Couples Counselling
4. Family Counselling
5. Anxiety
6. Depression
7. Trauma
8. Grief and Loss
9. Anger Management
10. ADHD
11. Prenatal and Pregnancy
12. LGBTQ+
13. CVAP Clients
14. ICBC Clients

Each service must have:
- slug
- icon
- heroImage
- heroAlt
- title
- shortIntro
- overviewTitle
- overviewParagraphs
- helpItems
- experienceItems
- sessionProcessItems
- whoIsThisForItems
- approaches
- quote
- faqs
- relatedServiceSlugs
- metaTitle
- metaDescription

Image requirements:
Create a clear image mapping for all services.
Use realistic, calm, human photography.
Examples:
- Online Counselling: person in a calm home setting with laptop/video session feeling, not too staged.
- Individual Counselling: quiet one-person reflective space.
- Couples Counselling: two adults sitting together in a soft, neutral environment.
- Family Counselling: warm family interaction, not overly posed.
- Anxiety: calm breathing / grounding visual, not panic imagery.
- Depression: soft light entering a quiet room, hopeful but not cheesy.
- Trauma: gentle hands / safe environment / grounded body language, no intense imagery.
- Grief and Loss: soft remembrance, quiet reflection, flowers only if subtle and not cliché.
- Anger Management: grounding / pause / regulation visual.
- ADHD: organized-but-human desk, focus and support, not chaotic stereotypes.
- Prenatal and Pregnancy: calm pregnancy support, soft natural light.
- LGBTQ+: inclusive, warm, subtle identity-safe visual, not tokenistic.
- CVAP Clients: safety, support, care, no violent imagery.
- ICBC Clients: recovery, support after accident, no crash imagery.

If real image assets are not available, use structured placeholders with clear filenames/paths so images can be replaced later:
`/images/services/online-counselling.jpg`
`/images/services/individual-counselling.jpg`
etc.

Translation / i18n requirements:
This is very important.

The website is trilingual:
- English default
- Persian
- French

The new service page template must fully support all three languages.
Do not leave any English text visible in Persian or French versions.
All service content fields must have translations:
- en
- fa
- fr

This includes:
- navbar labels
- breadcrumb
- hero title
- hero paragraph
- buttons
- reassurance note
- section titles
- all bullet items
- cards
- FAQ questions and answers
- related service cards
- footer service links
- meta title / meta description where supported

Persian requirements:
- Persian pages must be fully Persian, not English.
- Persian layout must use RTL direction.
- Persian text alignment should be right-aligned where appropriate.
- Persian typography must look natural and readable.
- Do not mix English punctuation into Persian unless necessary.
- Service names in Persian should be translated naturally.

French requirements:
- French pages must be fully French, not English.
- Use natural Canadian/French-friendly counselling language.
- Do not leave English service names inside French pages unless absolutely required for brand/platform names.
- French text should remain LTR.

Language switching:
- When switching language, the same service page should remain open but content must change to that language.
- Example:
  `/services/online-counselling`
  `/fa/services/online-counselling`
  `/fr/services/online-counselling`
- Make sure breadcrumbs, related cards, FAQ, CTA, and footer also update correctly.

Content quality:
Write more complete service content than the current version.
Tone should be:
- warm
- professional
- gentle
- clear
- reassuring
- not salesy
- not overly clinical
- not making guaranteed treatment claims

Avoid:
- “We cure…”
- “Guaranteed results…”
- fear-based language
- overly generic AI-like text
- repeated copy across all services

Use service-specific copy for every service.

Design consistency:
- Keep the existing header and footer style unless minor improvements are needed.
- Keep rounded cards, soft shadows, thin borders, light olive/cream backgrounds.
- Keep spacing generous.
- Make the page feel more premium and content-rich without becoming crowded.
- All cards must have consistent padding, border radius, hover states, and responsive behavior.

Responsive behavior:
Desktop:
- Hero content left, image full background.
- Two-column layouts where appropriate.

Tablet:
- Hero text readable, sections stack cleanly.

Mobile:
- Hero height should not be too tall.
- Text must remain readable.
- Cards stack vertically.
- FAQ accordion must be easy to tap.
- CTA buttons must fit properly.
- No overlapping chips, cards, text, or icons.

Accessibility:
- Ensure color contrast is readable over images.
- Add alt text for all hero images.
- Buttons must have clear labels.
- Accordion must be keyboard accessible if possible.
- Avoid tiny text.

SEO:
For each service page add/update:
- page title
- meta description
- H1 only once per page
- logical H2/H3 hierarchy
- service-specific FAQ schema if the project supports schema
- clean internal links to related services

Final QA checklist:
After implementing, check:
1. All 14 service pages use the same improved template.
2. Each service has custom content, not duplicated generic copy.
3. Each service has a different hero image path and alt text.
4. English version has no missing text.
5. Persian version is fully Persian and RTL.
6. French version is fully French and LTR.
7. No English leftovers appear in Persian or French.
8. Breadcrumbs translate correctly.
9. FAQ accordion works in all languages.
10. Related service cards link correctly.
11. Book appointment buttons still route to the correct Jane booking flow or existing appointment link.
12. Mobile layout has no overlaps or cropped text.
13. Hero text is readable on every image.
14. Lighthouse/performance should remain good; optimize image loading with responsive images/lazy loading where appropriate.

Important:
Do not redesign the whole website.
Only redesign the shared service detail page template and related service content system.
Preserve the ChangeMoment brand, navigation, footer, and general visual identity.
The goal is to make each service page feel richer, warmer, more trustworthy, more emotional, and more useful while keeping the site elegant and calm.