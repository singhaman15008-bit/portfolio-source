/**
 * Renders a 1200x630 social-sharing (Open Graph) image from the built site,
 * using the real self-hosted fonts, then converts it to PNG.
 *
 * Usage:
 *   npm install --no-save playwright-core
 *   node scripts/make-og-image.mjs
 *
 * Needs a static server on the project (npm run preview) so /fonts/fonts.css
 * resolves. Adjust BASE below if your preview runs on a different port.
 */
import { chromium } from "playwright-core";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE = process.env.OG_BASE ?? "http://127.0.0.1:56863";
const OUT_SVG = resolve("public/og-image.svg");
const OUT_PNG = resolve("public/og-image.png");

const HTML = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="/fonts/fonts.css">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px; overflow:hidden; position:relative;
    background:#09090D; font-family:"Manrope",sans-serif; color:#F5F5F7;
  }
  .glow-a { position:absolute; inset:-30% 40% 40% -20%;
    background:radial-gradient(closest-side, rgba(139,92,246,.45), transparent 70%); }
  .glow-b { position:absolute; inset:40% -20% -30% 55%;
    background:radial-gradient(closest-side, rgba(214,181,109,.20), transparent 70%); }
  .wrap { position:absolute; inset:0; padding:84px 96px; display:flex;
    flex-direction:column; justify-content:center; }
  .kicker { display:flex; align-items:center; gap:14px;
    font-family:"JetBrains Mono",monospace; font-size:17px; letter-spacing:.22em;
    text-transform:uppercase; color:#8B8B9C; }
  .dot { width:9px; height:9px; border-radius:50%; background:#A78BFA;
    box-shadow:0 0 0 5px rgba(139,92,246,.18); }
  h1 { font-family:"Fraunces",serif; font-weight:500; font-size:116px;
    line-height:1.02; letter-spacing:-.035em; margin-top:38px; }
  .role { margin-top:26px; font-size:31px; font-weight:600; letter-spacing:-.01em;
    background:linear-gradient(100deg,#A78BFA,#D6B56D);
    -webkit-background-clip:text; background-clip:text; color:transparent; }
  .inst { margin-top:20px; font-size:22px; color:#A9A9B8; }
  .rule { margin-top:40px; width:96px; height:2px;
    background:linear-gradient(90deg,#8B5CF6,transparent); }
</style></head>
<body>
  <div class="glow-a"></div><div class="glow-b"></div>
  <div class="wrap">
    <div class="kicker"><span class="dot"></span>Open to internship opportunities</div>
    <h1>Aman Singh</h1>
    <div class="role">B.Tech CSE Student &middot; Software, Data &amp; AI Learner</div>
    <div class="inst">Uttar Pradesh Textile Technology Institute, Kanpur</div>
    <div class="rule"></div>
  </div>
</body></html>`;

const browser = await chromium.launchPersistentContext("/tmp/ogshot/profile", {
  executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  args: [
    "--no-sandbox",
    "--headless=new",
    "--no-first-run",
    "--disable-crashpad",
    "--disable-breakpad",
    "--disable-crash-reporter",
  ],
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});

const page = await browser.newPage();

// Serve the HTML from a data URL so the local font paths still resolve
// relative to the running preview server.
await page.route("**/og-render.html", (route) =>
  route.fulfill({ status: 200, contentType: "text/html", body: HTML }),
);
await page.goto(`${BASE}/og-render.html`, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);

const png = await page.screenshot({ type: "png" });
writeFileSync(OUT_PNG, png);

// A matching SVG version, so the site keeps an SVG source for the OG image.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" role="img" aria-label="Aman Singh — B.Tech CSE Student, Software, Data and AI Learner">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#A78BFA"/><stop offset="100%" stop-color="#D6B56D"/>
    </linearGradient>
    <radialGradient id="glowA" cx="18%" cy="12%" r="70%">
      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="92%" cy="88%" r="62%">
      <stop offset="0%" stop-color="#D6B56D" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#D6B56D" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#09090D"/>
  <rect width="1200" height="630" fill="url(#glowA)"/>
  <rect width="1200" height="630" fill="url(#glowB)"/>
  <circle cx="101" cy="118" r="4.5" fill="#A78BFA"/>
  <text x="122" y="124" font-family="JetBrains Mono, monospace" font-size="17" letter-spacing="3.7" fill="#8B8B9C">OPEN TO INTERNSHIP OPPORTUNITIES</text>
  <text x="96" y="300" font-family="Fraunces, Georgia, serif" font-size="116" font-weight="500" letter-spacing="-4" fill="#F5F5F7">Aman Singh</text>
  <text x="96" y="368" font-family="Manrope, system-ui, sans-serif" font-size="31" font-weight="600" fill="url(#accent)">B.Tech CSE Student · Software, Data &amp; AI Learner</text>
  <text x="96" y="418" font-family="Manrope, system-ui, sans-serif" font-size="22" fill="#A9A9B8">Uttar Pradesh Textile Technology Institute, Kanpur</text>
  <rect x="96" y="462" width="96" height="2" fill="#8B5CF6"/>
</svg>
`;
writeFileSync(OUT_SVG, svg);

await browser.close();
console.log("wrote", OUT_PNG, "and", OUT_SVG);
