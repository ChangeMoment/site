# ChangeMoment Website

ChangeMoment is a multilingual counselling website for English, French, and Persian audiences. The Persian experience is rendered right-to-left. The application includes general marketing pages, team and service pages, booking links, localized service-detail routes, legal pages, and a blog managed through headless WordPress.

The public website is a statically deployed React application. WordPress is used only as the editorial backend for blog posts. Rank Math remains the source of truth for blog SEO metadata and schema.

## Architecture

```text
WordPress under /cms
  ├─ English WordPress post fields
  ├─ ChangeMoment French and Persian fields
  ├─ Featured image, category, tags, and reading time
  └─ Rank Math head metadata and JSON-LD
                  │
                  ▼
        pnpm build on the server
  ├─ Fetch and sanitize published posts
  ├─ Fetch Rank Math output for every post
  ├─ Generate the localized sitemap
  ├─ Build the Vite client and SSR renderer
  ├─ Bake crawlable blog documents
  ├─ Prerender the remaining localized routes
  └─ Verify metadata, routes, 404 output, and chunks
                  │
                  ▼
       Versioned static release directory
                  │
                  ▼
  /srv/changemoment/current atomic symlink
                  │
                  ▼
             Apache HTTP server
  ├─ Static frontend routes
  ├─ Real 404 responses
  ├─ Security headers and CSP
  └─ WordPress REST and admin under /cms
```

This is a static production architecture: Node.js is required to build the site, but no Node.js application server is required to serve it.

## Technology

- React 18 and React Router 7
- TypeScript
- Vite 6
- Tailwind CSS 4
- WordPress and Rank Math for blog management
- Vitest, ESLint, and TypeScript quality gates
- Apache for the static frontend and `/cms` routing
- systemd for publish-triggered builds
- pnpm 9.15.9 as the package manager

## Repository structure

```text
.
├─ .github/workflows/ci.yml       GitHub Actions quality gates
├─ deploy/
│  ├─ aws/                        AWS staging notes and policies
│  └─ wordpress/                  Apache, WordPress, and systemd templates
├─ docs/                          Engineering documentation
├─ public/                        Public images and generated blog/sitemap data
├─ scripts/
│  ├─ refresh-blog.mjs            WordPress and Rank Math export
│  ├─ generate-sitemap.mjs        Localized sitemap generation
│  ├─ bake-blog-pages.mjs         Crawlable localized blog HTML
│  ├─ prerender-routes.mjs        Static HTML for application routes
│  └─ verify-dist.mjs             Production output verification
├─ shared/route-manifest.mjs      Locales and canonical route inventory
├─ src/
│  ├─ app/components/             Shared application components
│  ├─ app/data/                   Services, team, and fallback blog data
│  ├─ app/i18n/                   English, French, and Persian translations
│  ├─ app/pages/                  Route-level page components
│  ├─ generated/                  Generated CMS snapshot consumed by React
│  ├─ imports/                    Images and imported design assets
│  ├─ entry-server.tsx            Build-time SSR entry point
│  └─ main.tsx                    Browser entry point and hydration handling
├─ package.json                   Commands and dependency versions
└─ pnpm-lock.yaml                 Reproducible dependency lockfile
```

Most non-blog business content currently lives in TypeScript. Blog content is refreshed from WordPress during a CMS-connected production build.

## Local development

### Requirements

- Node.js 22
- Corepack or pnpm 9.15.9

### Install and run

```bash
corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Vite will print the local development URL. WordPress is optional for ordinary UI development. When `WORDPRESS_URL` is not set, the refresh process retains the committed CMS snapshot instead of deleting blog content.

To refresh blog content during local development, expose a reachable WordPress installation and run:

```bash
WORDPRESS_URL="http://localhost/cms" \
SITE_URL="http://localhost:5173" \
VITE_SITE_URL="http://localhost:5173" \
node scripts/refresh-blog.mjs

pnpm dev
```

PowerShell equivalent:

```powershell
$env:WORDPRESS_URL = "http://localhost/cms"
$env:SITE_URL = "http://localhost:5173"
$env:VITE_SITE_URL = "http://localhost:5173"
node scripts/refresh-blog.mjs
pnpm dev
```

## Quality gates

Run the complete local verification pipeline with:

```bash
pnpm check
```

The command runs, in order:

1. TypeScript type checking
2. ESLint with zero warnings allowed
3. Vitest tests
4. The complete production build
5. Static route, metadata, JSON-LD, 404, and chunk verification

Individual commands are also available:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm audit --prod --audit-level low
pnpm build
```

GitHub Actions executes the same reproducible installation and quality gates on every push and pull request.

## Build-time configuration

| Variable | Required in production | Purpose |
| --- | --- | --- |
| `WORDPRESS_URL` | Yes | Internal URL used by the build to reach WordPress, for example `http://127.0.0.1/cms` when WordPress is on the same server. |
| `SITE_URL` | Yes | Final public origin used while baking blog metadata and rewriting CMS URLs, for example `https://www.example.com`. |
| `VITE_SITE_URL` | Yes | Public origin compiled into application canonical URLs and schema. It should match `SITE_URL`. |

Do not put WordPress passwords, GitHub tokens, AWS credentials, or other secrets in the repository or in `VITE_*` variables. Vite variables are shipped to the browser.

## Production build

Build on the target server so only source changes need to be transferred:

```bash
cd /srv/changemoment/app

corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm install --frozen-lockfile

pnpm typecheck
pnpm lint
pnpm test
pnpm audit --prod --audit-level low

WORDPRESS_URL="http://127.0.0.1/cms" \
SITE_URL="https://www.example.com" \
VITE_SITE_URL="https://www.example.com" \
pnpm build
```

The final static application is written to `dist/`. A successful build fails if required localized blog fields, routes, SEO metadata, JSON-LD, 404 output, or expected route chunks are missing.

## WordPress requirements

The supported layout places WordPress at `/var/www/cms` and exposes it publicly under `/cms`.

1. Install and activate Rank Math.
2. Enable Rank Math headless support.
3. Install the ChangeMoment must-use plugin:

```bash
sudo install -d -o www-data -g www-data -m 0755 \
  /var/www/cms/wp-content/mu-plugins

sudo install -o www-data -g www-data -m 0644 \
  deploy/wordpress/changemoment-headless.php \
  /var/www/cms/wp-content/mu-plugins/changemoment-headless.php
```

The must-use plugin adds French and Persian editorial fields, exposes the sanitized `/wp-json/changemoment/v1/posts` contract, and writes a rebuild marker whenever a post is published.

Verify the CMS contract before building:

```bash
curl --fail --silent --show-error \
  http://127.0.0.1/cms/wp-json/changemoment/v1/posts
```

Every published post must include its required English, French, and Persian fields. Rank Math title, description, canonical, Open Graph fields, and JSON-LD are fetched during the build and preserved in the public article HTML.

## Server filesystem

```text
/srv/changemoment/app        Checked-out source code
/srv/changemoment/releases   Immutable static releases
/srv/changemoment/current    Symlink to the active release
/var/www/cms                 WordPress installation
/var/lib/changemoment        WordPress-to-systemd rebuild marker
```

The source should be cloned with a GitHub deploy key or GitHub App credential. Do not place a personal access token in the clone URL, shell history, or server configuration.

Create the required directories and permissions once:

```bash
sudo install -d -o admin -g www-data -m 2775 \
  /srv/changemoment/app \
  /srv/changemoment/releases \
  /var/lib/changemoment
```

## Atomic release deployment

After a successful build, copy `dist` into a new versioned release and atomically switch the active symlink:

```bash
release="/srv/changemoment/releases/$(date -u +%Y%m%dT%H%M%SZ)"
mkdir -p "$release"
cp -a dist/. "$release/"

ln -sfn "$release" /srv/changemoment/current.next
mv -Tf /srv/changemoment/current.next /srv/changemoment/current
```

Never build directly inside `/srv/changemoment/current`. A versioned release keeps the currently served site intact if installation or build verification fails.

## Apache configuration

Before installing the provided template, replace its staging hostname with the real production domain and configure HTTPS:

```bash
grep -RInE "15-156-55-113\.nip\.io|http://" deploy/wordpress
```

Review every match. In production:

- `ServerName` must use the real domain.
- `SITE_URL` and `VITE_SITE_URL` must use the final HTTPS origin.
- WordPress `home`, `siteurl`, `WP_HOME`, and `WP_SITEURL` must point to the final `/cms` URL.
- A valid TLS certificate must be installed before the production cutover.

Install and validate Apache configuration:

```bash
sudo install -o root -g root -m 0644 \
  deploy/wordpress/apache-changemoment.conf \
  /etc/apache2/conf-available/changemoment.conf

sudo a2enmod rewrite headers
sudo a2enconf changemoment
sudo apache2ctl configtest
sudo systemctl reload apache2
```

The active Apache virtual host must use `/srv/changemoment/current` as its `DocumentRoot`. The included configuration provides static-route handling, real 404 responses, `/cms` routing, CSP, and the other security headers required by the application.

## Automatic rebuilds after WordPress publishing

Install the rebuild script and systemd units:

```bash
sudo install -o root -g root -m 0755 \
  deploy/wordpress/rebuild-site.sh \
  /usr/local/sbin/changemoment-rebuild

sudo install -o root -g root -m 0644 \
  deploy/wordpress/changemoment-rebuild.service \
  /etc/systemd/system/changemoment-rebuild.service

sudo install -o root -g root -m 0644 \
  deploy/wordpress/changemoment-rebuild.path \
  /etc/systemd/system/changemoment-rebuild.path

sudo systemctl daemon-reload
sudo systemctl enable --now changemoment-rebuild.path
```

Before installation, update the public hostname variables inside `rebuild-site.sh`. The current file contains the staging hostname and is not a production-ready domain configuration.

Publishing a WordPress post then follows this path:

1. WordPress writes `/var/lib/changemoment/rebuild-requested`.
2. The systemd path unit starts `changemoment-rebuild.service`.
3. A filesystem lock prevents concurrent builds.
4. The service fetches WordPress and Rank Math output and runs the verified build.
5. A new release directory is created and activated atomically.
6. Old releases are pruned, retaining the three most recent releases.

Inspect rebuild status and logs with:

```bash
systemctl status changemoment-rebuild.path
systemctl status changemoment-rebuild.service
sudo journalctl -u changemoment-rebuild.service -n 100 --no-pager
```

The `provision.sh` and `continue-provision.sh` files document the original staging bootstrap. They contain staging-specific host and server assumptions and must not be executed unchanged for production.

## Deployment verification

At minimum, verify:

```bash
curl --fail --silent --show-error https://www.example.com/ >/dev/null
curl --fail --silent --show-error https://www.example.com/fr/services >/dev/null
curl --fail --silent --show-error https://www.example.com/fa/services/anxiety >/dev/null
curl --fail --silent --show-error https://www.example.com/blogs/your-post-slug >/dev/null
curl --fail --silent --show-error https://www.example.com/cms/wp-json/changemoment/v1/posts >/dev/null

curl --silent --output /dev/null --write-out '%{http_code}\n' \
  https://www.example.com/a-route-that-does-not-exist
```

The final command must return `404`, not `200`. Also inspect raw article HTML and confirm the canonical URL, localized alternates, Open Graph metadata, and Rank Math JSON-LD use the public domain rather than `/cms` or an internal hostname.

## Rollback

Select a known-good release explicitly and switch the symlink atomically:

```bash
previous="/srv/changemoment/releases/REPLACE_WITH_VERIFIED_RELEASE"
test -d "$previous"

ln -sfn "$previous" /srv/changemoment/current.next
mv -Tf /srv/changemoment/current.next /srv/changemoment/current
```

Then repeat the public smoke tests. Do not delete the failed release until the rollback has been verified.

## Current launch dependencies

Before treating a deployment as production-ready, provide and verify:

- A real contact-form delivery backend and recipient address
- Final privacy, terms, and accessibility content
- Licensed Doran and Pinar Persian font files, or an approved fallback-font decision
- The production domain, DNS access, and HTTPS certificate
