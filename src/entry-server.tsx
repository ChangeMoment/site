import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./app/App";
import { SeoCollectorProvider, type SeoSnapshot } from "./app/components/SeoCollector";
import { LanguageProvider, type Lang } from "./app/i18n/LanguageProvider";
import "./styles/index.css";

export function renderRoute(url: string, lang: Lang) {
  return new Promise<{ body: string; seo: SeoSnapshot }>((resolve, reject) => {
    const chunks: Buffer[] = [];
    let seo: SeoSnapshot | undefined;
    let settled = false;

    const stream = renderToPipeableStream(
      <SeoCollectorProvider collect={(snapshot) => { seo = snapshot; }}>
        <LanguageProvider initialLang={lang}>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </LanguageProvider>
      </SeoCollectorProvider>,
      {
        onAllReady() {
          const output = new PassThrough();
          output.on("data", (chunk: Buffer) => { chunks.push(chunk); });
          output.on("end", () => {
            if (settled) return;
            settled = true;
            if (!seo) {
              reject(new Error(`Route ${url} rendered without SEO metadata.`));
            } else {
              // React's streaming renderer can emit NUL separators at chunk
              // boundaries under Node on Windows. NUL is invalid in HTML and
              // is stripped by browsers, which otherwise makes hydration fail.
              const body = Buffer.concat(chunks).toString("utf8").replaceAll("\0", "");
              resolve({ body, seo });
            }
          });
          output.on("error", reject);
          stream.pipe(output);
        },
        onShellError(error) {
          if (!settled) {
            settled = true;
            reject(error);
          }
        },
        onError(error) {
          console.error(`SSR error for ${url}:`, error);
        },
      },
    );
  });
}
