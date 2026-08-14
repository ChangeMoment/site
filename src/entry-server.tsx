import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./app/App";
import { SeoCollectorProvider, type SeoSnapshot } from "./app/components/SeoCollector";
import { LanguageProvider, type Lang } from "./app/i18n/LanguageProvider";
import "./styles/index.css";

export function renderRoute(url: string, lang: Lang) {
  return new Promise<{ body: string; seo: SeoSnapshot }>((resolve, reject) => {
    let body = "";
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
          output.setEncoding("utf8");
          output.on("data", (chunk) => { body += chunk; });
          output.on("end", () => {
            if (settled) return;
            settled = true;
            if (!seo) reject(new Error(`Route ${url} rendered without SEO metadata.`));
            else resolve({ body, seo });
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
