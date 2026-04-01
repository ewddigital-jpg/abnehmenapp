import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildNutritionPlan } from "./planEngine.js";
const port = Number(process.env.PORT || 3000);
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (!chunks.length) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return {};
  }
}

function healthShell() {
  return `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Einfach Gesund Essen</title>
    <link rel="stylesheet" href="/public/health/style.css" />
  </head>
  <body>
    <div class="health-shell">
      <header class="hero">
        <div class="hero-topbar">
          <div class="language-switch" aria-label="Language switch">
            <button class="language-button is-active" id="lang-de" type="button">Deutsch</button>
            <button class="language-button" id="lang-ro" type="button">Română</button>
          </div>
        </div>
        <div class="hero-copy">
          <p class="eyebrow" data-i18n="heroEyebrow">Einfach gesund essen</p>
          <h1 data-i18n="heroTitle">Eine einfache Essens-App für jeden Tag.</h1>
          <p class="lead" data-i18n="heroLead">Klare Tagesziele, einfache Rezepte und ein Tageslog. Alles groß, lesbar und ohne komplizierte Menüs.</p>
          <div class="hero-guide">
            <div class="hero-guide-card"><span>1</span><strong data-i18n="heroStep1Title">Heute ansehen</strong><small data-i18n="heroStep1Copy">Direkt sehen, was heute gut passt.</small></div>
            <div class="hero-guide-card"><span>2</span><strong data-i18n="heroStep2Title">Mahlzeit abhaken</strong><small data-i18n="heroStep2Copy">Mit einem Klick in den Tageslog übernehmen.</small></div>
            <div class="hero-guide-card"><span>3</span><strong data-i18n="heroStep3Title">Profil anpassen</strong><small data-i18n="heroStep3Copy">Name, Gewicht und Sprache schnell einstellen.</small></div>
          </div>
        </div>
        <div class="hero-badges">
          <span data-i18n="heroBadgeToday">Heute</span>
          <span data-i18n="heroBadgeLog">Log</span>
          <span data-i18n="heroBadgeProfile">Profil</span>
        </div>
      </header>
      <main class="health-app">
        <section class="card summary-card">
          <div class="section-head">
            <div>
              <p class="eyebrow" data-i18n="todayEyebrow">Heute</p>
              <h2 id="headline-title">Tagesplan</h2>
            </div>
            <label class="date-label">
              <span data-i18n="dateLabel">Datum</span>
              <input id="selected-date" type="date" />
            </label>
          </div>
          <div id="warning-strip" class="warning-strip"></div>
          <div id="top-summary" class="top-summary"></div>
          <div id="target-cards" class="metric-grid metric-grid--mvp"></div>
          <div class="progress-shell">
            <div class="progress-head">
              <strong data-i18n="progressTitle">Kalorienfortschritt</strong>
              <span id="progress-copy">Lade Plan...</span>
            </div>
            <div class="progress-bar"><div id="progress-fill" class="progress-fill"></div></div>
          </div>
        </section>
        <nav class="section-nav" id="section-nav">
          <button class="nav-chip is-active" type="button" data-view="today" data-i18n="navToday">Heute</button>
          <button class="nav-chip" type="button" data-view="log" data-i18n="navLog">Log</button>
          <button class="nav-chip" type="button" data-view="profile" data-i18n="navProfile">Profil</button>
        </nav>
        <section class="view-stack">
          <section class="card view-panel is-active" id="view-today">
            <div class="section-head">
              <div><p class="eyebrow" data-i18n="todayEyebrow">Heute</p><h2 data-i18n="todayTitle">Was esse ich heute?</h2></div>
              <p class="section-copy" data-i18n="todayCopy">Große Karten, klare Schritte, direkt in den Log übernehmen.</p>
            </div>
            <div class="action-row"><button class="button button-secondary" type="button" id="refresh-day-button" data-i18n="refreshDayButton">Tag neu laden</button></div>
            <div id="focus-card" class="focus-card"></div>
            <div id="habit-list" class="habit-list"></div>
            <div id="meal-plan" class="meal-grid"></div>
            <div id="guidance-list" class="guidance-list"></div>
          </section>
          <section class="card view-panel" id="view-log">
            <div class="section-head">
              <div><p class="eyebrow" data-i18n="logEyebrow">Log</p><h2 data-i18n="logTitle">Kalorien und Mahlzeiten</h2></div>
              <p class="section-copy" data-i18n="logCopy">Mahlzeit eintragen oder direkt aus den Karten übernehmen.</p>
            </div>
            <div class="action-row"><button class="button button-secondary" type="button" id="clear-log-button" data-i18n="clearLogButton">Heutigen Log leeren</button></div>
            <form id="log-form" class="log-form log-form--mvp">
              <label><span data-i18n="entryMealType">Art</span><select id="entry-meal-type" name="mealType"><option value="Frühstück">Frühstück</option><option value="Mittagessen">Mittagessen</option><option value="Abendessen">Abendessen</option><option value="Snack">Snack</option></select></label>
              <label><span data-i18n="entryLabel">Name</span><input id="entry-label" name="label" type="text" placeholder="z. B. Pasta im Büro" data-i18n-placeholder="entryLabelPlaceholder" /></label>
              <label><span data-i18n="entryCalories">kcal</span><input id="entry-calories" name="calories" type="number" min="0" max="4000" /></label>
              <button class="button button-primary" type="submit" data-i18n="saveEntryButton">Eintrag speichern</button>
            </form>
            <div id="log-summary" class="log-summary log-summary--mvp"></div>
            <div id="log-entries" class="log-entries"></div>
          </section>
          <section class="card view-panel" id="view-profile">
            <div class="section-head">
              <div><p class="eyebrow" data-i18n="profileEyebrow">Profil</p><h2 data-i18n="profileTitle">Einstellungen</h2></div>
              <p class="section-copy" data-i18n="profileCopy">Die Werte bleiben lokal im Browser gespeichert.</p>
            </div>
            <form id="profile-form" class="profile-grid profile-grid--mvp">
              <label><span data-i18n="profileName">Name</span><input id="name" name="name" type="text" /></label>
              <label><span data-i18n="profileHeight">Größe (cm)</span><input id="heightCm" name="heightCm" type="number" min="140" max="220" /></label>
              <label><span data-i18n="profileWeight">Gewicht (kg)</span><input id="weightKg" name="weightKg" type="number" min="45" max="250" step="0.1" /></label>
              <label class="checkbox"><input id="likesFish" name="likesFish" type="checkbox" /><span data-i18n="profileFish">Fisch ist okay</span></label>
              <input id="age" name="age" type="hidden" value="52" />
              <input id="sex" name="sex" type="hidden" value="male" />
              <input id="activityLevel" name="activityLevel" type="hidden" value="light" />
              <input id="goal" name="goal" type="hidden" value="gentle" />
              <input id="diagnosedPrediabetes" name="diagnosedPrediabetes" type="hidden" value="false" />
              <input id="familyHistory" name="familyHistory" type="hidden" value="false" />
            </form>
            <div class="info-card">
              <h3 data-i18n="infoTitle">Wichtige Hinweise</h3>
              <ul class="source-list">
                <li data-i18n="infoWarning">Bei starkem Durst, häufigem Wasserlassen, Sehstörungen, Brustschmerz oder unerklärlichem Gewichtsverlust bitte medizinisch abklären lassen.</li>
                <li data-i18n="infoScope">Diese App hilft bei Struktur und Alltag, ersetzt aber keine Diagnose.</li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    </div>
    <script type="module" src="/public/health/app.js"></script>
  </body>
</html>`;
}

function sendFile(response, filePath) {
  if (!fs.existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const extension = path.extname(filePath);
  const contentType = extension === ".js"
    ? "application/javascript; charset=utf-8"
    : extension === ".css"
      ? "text/css; charset=utf-8"
      : "text/plain; charset=utf-8";

  response.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "GET" && url.pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(healthShell());
    return;
  }

  if (request.method === "GET" && url.pathname.startsWith("/public/")) {
    const filePath = path.join(rootDir, url.pathname);
    sendFile(response, filePath);
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/nutrition-plan") {
    const body = await readBody(request);
    return sendJson(response, 200, buildNutritionPlan(body));
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Route not found.");
});

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

