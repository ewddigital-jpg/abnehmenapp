import { buildNutritionPlan } from './planEngine.js';

const STORAGE_KEYS = {
  profile: "metabolic-profile-v2",
  logs: "metabolic-logs-v2",
  habits: "metabolic-habits-v1",
  shopping: "metabolic-shopping-v1",
  selectedDate: "metabolic-selected-date-v2",
  view: "metabolic-view-v1",
  locale: "metabolic-locale-v1"
};

const defaultProfile = {
  name: "Papa",
  age: 46,
  sex: "male",
  heightCm: 175,
  weightKg: 102,
  activityLevel: "light",
  goal: "gentle",
  diagnosedPrediabetes: false,
  familyHistory: false,
  likesFish: true,
  intermittentFasting: true
};

const UI_TEXT = {
  de: {
    heroEyebrow: "Einfach gesund essen",
    heroTitle: "Jeden Tag klar wissen, was als Nächstes gut tut.",
    heroLead: "Klare Tagesziele, einfache Rezepte und eine Einkaufsliste. Ohne komplizierte Menüs.",
    heroStep1Title: "Heute öffnen",
    heroStep1Copy: "Oben sehen, was jetzt gut passt.",
    heroStep2Title: "Gericht wählen",
    heroStep2Copy: "Ein Klick übernimmt die Mahlzeit in den Tag.",
    heroStep3Title: "Woche einkaufen",
    heroStep3Copy: "Mit Liste einkaufen und weniger spontan naschen.",
    heroBadgeToday: "Heute",
    heroBadgeLog: "Log",
    heroBadgeProfile: "Profil",
    todayEyebrow: "Heute",
    dateLabel: "Datum",
    progressTitle: "Kalorienfortschritt",
    navToday: "Heute",
    navLog: "Log",
    navProfile: "Profil",
    todayTitle: "Was passt heute gut?",
    todayCopy: "Große Karten, klare Schritte, direkt in den Log übernehmen.",
    refreshDayButton: "Tag neu laden",
    weekEyebrow: "Woche",
    weekTitle: "Wochenplan",
    weekCopy: "Sieben Tage auf einen Blick. So wird Einkaufen und Vorbereiten einfacher.",
    recipesEyebrow: "Rezepte",
    recipesTitle: "Einfache Gerichte",
    recipesCopy: "Wenig Schritte, vertraute Zutaten und verständliche Gründe, warum das Gericht gut passt.",
    shopEyebrow: "Einkauf",
    shopTitle: "Einkaufsliste",
    shopCopy: "Nach Bereichen sortiert, damit der Einkauf ruhig und schnell geht.",
    copyShoppingButton: "Liste kopieren",
    resetShoppingButton: "Haken löschen",
    logEyebrow: "Log",
    logTitle: "Was wurde gegessen?",
    logCopy: "Mahlzeiten übernehmen oder kurz selbst eintragen.",
    clearLogButton: "Heutigen Log leeren",
    entryMealType: "Art",
    entryLabel: "Name",
    entryLabelPlaceholder: "z. B. Pasta im Büro",
    entryCalories: "kcal",
    entryProtein: "Protein (g)",
    entryFiber: "Ballaststoffe (g)",
    saveEntryButton: "Eintrag speichern",
    profileEyebrow: "Profil",
    profileTitle: "Einstellungen",
    profileCopy: "Die Angaben bleiben nur in diesem Browser gespeichert.",
    profileName: "Name",
    profileAge: "Alter",
    profileSex: "Geschlecht",
    sexMale: "Mann",
    sexFemale: "Frau",
    profileHeight: "Größe (cm)",
    profileWeight: "Gewicht (kg)",
    profileActivity: "Alltag",
    activitySedentary: "Meist sitzend",
    activityLight: "Etwas aktiv",
    activityModerate: "Regelmäßig aktiv",
    activityActive: "Sehr aktiv",
    profileGoal: "Zieltempo",
    goalGentle: "Sanft",
    goalSteady: "Konsequent",
    profilePrediabetes: "Prädiabetes bestätigt",
    profileFamily: "Diabetes in der Familie",
    profileFish: "Fisch ist okay",
    profileIF: "Intervallfasten (kein Frühstück)",
    ifWindowNote: "Essensfenster: ca. 12:00 – 20:00 Uhr",
    infoTitle: "Wichtige Hinweise",
    infoWarning: "Bei starkem Durst, häufigem Wasserlassen, Sehstörungen, Brustschmerz oder unerklärlichem Gewichtsverlust bitte medizinisch abklären lassen.",
    infoScope: "Diese App hilft bei Struktur und Alltag, ersetzt aber keine Diagnose.",
    infoSources: 'Quellen: <a href="https://www.cdc.gov/diabetes/prevention/index.html" target="_blank" rel="noreferrer">CDC Diabetes Prevention</a>, <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-type-2-diabetes/game-plan" target="_blank" rel="noreferrer">NIDDK Game Plan</a>.',
    loadingPlan: "Plan wird geladen...",
    planLoadError: "Plan konnte nicht geladen werden.",
    warningOkay: "Kein akuter Warnhinweis aus den Angaben. Regelmäßige Kontrolle bleibt trotzdem wichtig.",
    topRemainingLabel: "Noch frei heute",
    topRemainingGood: "Wenn du bei den Vorschlägen bleibst, passt der Tag gut.",
    topRemainingOver: "Für den Rest des Tages besser leicht und einfach essen.",
    topConsumedLabel: "Schon gegessen",
    topConsumedDetail: "von {target} kcal Tagesziel",
    topWeekTargetLabel: "Ziel dieser Woche",
    topWeekTargetDetail: "{minutes} Minuten Bewegung und ruhige Routinen",
    topFocusLabel: "Heute wichtig",
    topFocusDetail: "Ein kleiner Schritt reicht.",
    targetCalorie: "Kalorienziel",
    targetCalorieDetail: "{deficit} kcal unter Erhaltung",
    targetBmi: "BMI",
    targetProtein: "Protein",
    targetProteinDetail: "hilft bei Sättigung und Muskelerhalt",
    targetFiber: "Ballaststoffe",
    targetFiberDetail: "Wasser etwa {water} l",
    targetActivity: "Bewegung",
    targetActivityDetail: "plus kurze Spaziergänge",
    targetRemaining: "Heute noch offen",
    targetRemainingInPlan: "noch im Plan",
    targetRemainingOverDetail: "heute über dem Ziel",
    focusEyebrow: "Heute einfach so",
    focusPlan: "Plan heute",
    focusProtein: "Protein",
    focusFiber: "Ballaststoffe",
    habitWater: "Wasser statt Softdrink",
    habitWaterNote: "Heute keine süßen Getränke.",
    habitWalk: "Spaziergang nach dem Essen",
    habitWalkNote: "10 bis 15 Minuten reichen.",
    habitVegetables: "Gemüse zu Mittag und am Abend",
    habitVegetablesNote: "Halber Teller ist das Ziel.",
    mealBenefitTitle: "Warum dieses Gericht gut passt",
    benefitProtein: "{protein} g Protein helfen, länger satt zu bleiben.",
    benefitFiber: "{fiber} g Ballaststoffe bremsen Heißhunger.",
    benefitVegetables: "Viel Gemüse macht den Teller groß, ohne die Kalorien hochzutreiben.",
    benefitQuick: "In etwa {minutes} Minuten fertig. Das senkt die Hürde im Alltag.",
    benefitBatch: "Mehrere Portionen möglich. Das macht den nächsten Tag leichter.",
    benefitPortable: "Leicht mitzunehmen oder schnell griffbereit.",
    benefitBalanced: "Ausgewogen, einfach und alltagstauglich.",
    eatAndLog: "Jetzt essen und abhaken",
    goToLog: "Zum Log",
    loadDay: "Diesen Tag öffnen",
    addRecipeToLog: "In den Log übernehmen",
    usedInLabel: "für",
    copySuccess: "Liste kopiert",
    copyFail: "Kopieren fehlgeschlagen",
    logEmpty: "Noch keine Einträge. Nimm eine Mahlzeit direkt aus Heute oder trage sie unten ein.",
    removeEntry: "Entfernen",
    logLogged: "Geloggt",
    logRemaining: "Rest",
    logPlan: "Plan heute",
    logLoggedDetail: "{protein} g Protein, {fiber} g Ballaststoffe",
    logRemainingDetail: "Noch {protein} g Protein und {fiber} g Ballaststoffe offen",
    logPlanDetail: "{protein} g Protein und {fiber} g Ballaststoffe im Vorschlag",
    mealTypeBreakfast: "Frühstück",
    mealTypeLunch: "Mittagessen",
    mealTypeDinner: "Abendessen",
    mealTypeSnack: "Snack",
    difficultyEasy: "Leicht",
    difficultyMedium: "Mittel",
    difficultyHard: "Etwas aufwendiger",
    weekSummary: "{calories} kcal, {protein} g Protein, {fiber} g Ballaststoffe"
  },
  ro: {
    heroEyebrow: "Mâncare simplă și sănătoasă",
    heroTitle: "Știi în fiecare zi ce îți face bine.",
    heroLead: "Obiective zilnice clare, rețete simple și o listă de cumpărături. Fără meniuri complicate.",
    heroStep1Title: "Deschide azi",
    heroStep1Copy: "Vezi imediat ce se potrivește pentru astăzi.",
    heroStep2Title: "Alege mâncarea",
    heroStep2Copy: "Un click adaugă masa în ziua ta.",
    heroStep3Title: "Planifică săptămâna",
    heroStep3Copy: "Cumpără cu lista și evită gustările luate din impuls.",
    heroBadgeToday: "Azi",
    heroBadgeLog: "Jurnal",
    heroBadgeProfile: "Profil",
    todayEyebrow: "Azi",
    dateLabel: "Data",
    progressTitle: "Progres calorii",
    navToday: "Azi",
    navLog: "Jurnal",
    navProfile: "Profil",
    todayTitle: "Ce e bine să mănânc azi?",
    todayCopy: "Carduri mari, pași clari, direct în jurnal.",
    refreshDayButton: "Reîncarcă ziua",
    weekEyebrow: "Săptămână",
    weekTitle: "Plan săptămânal",
    weekCopy: "Șapte zile dintr-o privire. Cumpărăturile și pregătirea devin mai simple.",
    recipesEyebrow: "Rețete",
    recipesTitle: "Mâncăruri simple",
    recipesCopy: "Pași puțini, ingrediente familiare și explicații clare de ce mâncarea ajută.",
    shopEyebrow: "Cumpărături",
    shopTitle: "Listă de cumpărături",
    shopCopy: "Sortată pe zone din magazin, ca să mergi repede și liniștit.",
    copyShoppingButton: "Copiază lista",
    resetShoppingButton: "Șterge bifele",
    logEyebrow: "Jurnal",
    logTitle: "Ce ai mâncat?",
    logCopy: "Preia mesele direct sau adaugă manual.",
    clearLogButton: "Golește jurnalul de azi",
    entryMealType: "Tip masă",
    entryLabel: "Nume",
    entryLabelPlaceholder: "ex. paste la birou",
    entryCalories: "kcal",
    entryProtein: "Proteine (g)",
    entryFiber: "Fibre (g)",
    saveEntryButton: "Salvează",
    profileEyebrow: "Profil",
    profileTitle: "Setări",
    profileCopy: "Datele rămân doar în acest browser.",
    profileName: "Nume",
    profileAge: "Vârstă",
    profileSex: "Sex",
    sexMale: "Bărbat",
    sexFemale: "Femeie",
    profileHeight: "Înălțime (cm)",
    profileWeight: "Greutate (kg)",
    profileActivity: "Activitate zilnică",
    activitySedentary: "Mai ales sedentar",
    activityLight: "Puțin activ",
    activityModerate: "Activ regulat",
    activityActive: "Foarte activ",
    profileGoal: "Ritm obiectiv",
    goalGentle: "Blând",
    goalSteady: "Constant",
    profilePrediabetes: "Prediabet confirmat",
    profileFamily: "Diabet în familie",
    profileFish: "Peștele e ok",
    profileIF: "Post intermitent (fără mic dejun)",
    ifWindowNote: "Fereastră de mâncat: aprox. 12:00 – 20:00",
    infoTitle: "Informații importante",
    infoWarning: "Dacă apar sete intensă, urinare frecventă, tulburări de vedere, durere în piept sau scădere inexplicabilă în greutate, consultați un medic.",
    infoScope: "Aplicația ajută cu structura și rutina zilnică, dar nu înlocuiește un consult medical.",
    infoSources: 'Surse: <a href="https://www.cdc.gov/diabetes/prevention/index.html" target="_blank" rel="noreferrer">CDC Diabetes Prevention</a>, <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-type-2-diabetes/game-plan" target="_blank" rel="noreferrer">NIDDK Game Plan</a>.',
    loadingPlan: "Se încarcă planul...",
    planLoadError: "Planul nu a putut fi încărcat.",
    warningOkay: "Nu există avertizări urgente. Controalele regulate rămân totuși importante.",
    topRemainingLabel: "Mai ai disponibil",
    topRemainingGood: "Dacă rămâi la sugestii, ziua este bine echilibrată.",
    topRemainingOver: "Pentru restul zilei, alege mese ușoare și simple.",
    topConsumedLabel: "Deja mâncat",
    topConsumedDetail: "din ținta zilnică de {target} kcal",
    topWeekTargetLabel: "Obiectivul săptămânii",
    topWeekTargetDetail: "{minutes} minute de mișcare și rutine sănătoase",
    topFocusLabel: "Important azi",
    topFocusDetail: "Un pas mic e de ajuns.",
    targetCalorie: "Calorii țintă",
    targetCalorieDetail: "{deficit} kcal sub menținere",
    targetBmi: "IMC",
    targetProtein: "Proteine",
    targetProteinDetail: "ajută la sațietate și protejează masa musculară",
    targetFiber: "Fibre",
    targetFiberDetail: "Apă aproximativ {water} l",
    targetActivity: "Mișcare",
    targetActivityDetail: "plus plimbări scurte",
    targetRemaining: "Mai rămâne azi",
    targetRemainingInPlan: "ești în plan",
    targetRemainingOverDetail: "azi ești peste țintă",
    focusEyebrow: "Azi fă asta",
    focusPlan: "Plan azi",
    focusProtein: "Proteine",
    focusFiber: "Fibre",
    habitWater: "Apă în loc de suc",
    habitWaterNote: "Azi fără băuturi îndulcite.",
    habitWalk: "Plimbare după masă",
    habitWalkNote: "Ajung 10–15 minute.",
    habitVegetables: "Legume la prânz și seară",
    habitVegetablesNote: "Jumătate de farfurie e ținta.",
    mealBenefitTitle: "De ce se potrivește această mâncare",
    benefitProtein: "{protein} g proteine te ajută să rămâi sătul mai mult timp.",
    benefitFiber: "{fiber} g fibre reduc pofta de mâncare.",
    benefitVegetables: "Multe legume fac farfuria mai mare fără să crească prea mult caloriile.",
    benefitQuick: "Gata în aproximativ {minutes} minute — mai ușor de respectat în zilele aglomerate.",
    benefitBatch: "Se pot face mai multe porții. A doua zi e mai simplă.",
    benefitPortable: "Ușor de luat cu tine sau de ținut la îndemână.",
    benefitBalanced: "Echilibrat, simplu și potrivit pentru viața de zi cu zi.",
    eatAndLog: "Mănâncă și bifează",
    goToLog: "Mergi la jurnal",
    loadDay: "Deschide această zi",
    addRecipeToLog: "Adaugă în jurnal",
    usedInLabel: "pentru",
    copySuccess: "Lista a fost copiată",
    copyFail: "Copierea a eșuat",
    logEmpty: "Nicio înregistrare încă. Preia o masă din Azi sau adaugă manual mai jos.",
    removeEntry: "Șterge",
    logLogged: "Înregistrat",
    logRemaining: "Rămas",
    logPlan: "Plan azi",
    logLoggedDetail: "{protein} g proteine, {fiber} g fibre",
    logRemainingDetail: "Mai rămân {protein} g proteine și {fiber} g fibre",
    logPlanDetail: "{protein} g proteine și {fiber} g fibre în sugestie",
    mealTypeBreakfast: "Mic dejun",
    mealTypeLunch: "Prânz",
    mealTypeDinner: "Cină",
    mealTypeSnack: "Gustare",
    difficultyEasy: "Ușor",
    difficultyMedium: "Mediu",
    difficultyHard: "Puțin mai complex",
    weekSummary: "{calories} kcal, {protein} g proteine, {fiber} g fibre"
  }
};

const RAW_RECIPE_TITLES = {
  "breakfast-skyr-oats": "Skyr mit Apfel und Honig",
  "breakfast-egg-bread": "Eier mit Tomaten, Gurken und Brot",
  "breakfast-overnight-oats": "Quark mit Banane und Honig",
  "breakfast-quark-pear": "Rührei mit Kartoffeln und Tomaten",
  "lunch-chicken-lentil-bowl": "Putenreis mit Zucchini und Tomaten",
  "lunch-tuna-bean-salad": "Rindfleisch mit Kartoffeln und Gurkensalat",
  "lunch-tofu-rice-pan": "Putenpfanne mit Süßkartoffeln und Zucchini",
  "lunch-turkey-quinoa": "Rindfleisch mit Reis und roter Bete",
  "dinner-bean-chili": "Rinderhack mit Kartoffeln und Zucchini",
  "dinner-salmon-potatoes": "Lachs mit Reis und Gurkensalat",
  "dinner-cod-chickpeas": "Eierpfanne mit Kartoffeln und Tomaten",
  "dinner-chicken-stir-fry": "Putenblech mit Kartoffeln und Zucchini",
  "dinner-turkey-tray": "Rindfleisch mit Süßkartoffeln und roter Bete",
  "snack-skyr-berries": "Skyr mit Honig",
  "snack-carrots-hummus": "Quark mit Apfel",
  "snack-apple-almonds": "Banane mit Skyr",
  "snack-cottage-pear": "Gurke und Ei",
  "snack-kefir-walnuts": "Apfel mit Quark und Honig"
};

const RECIPE_TITLES = {
  de: { ...RAW_RECIPE_TITLES },
  ro: {
    "breakfast-skyr-oats": "Skyr cu măr și miere",
    "breakfast-egg-bread": "Ouă cu roșii, castraveți și pâine",
    "breakfast-overnight-oats": "Quark cu banană și miere",
    "breakfast-quark-pear": "Omletă cu cartofi și roșii",
    "lunch-chicken-lentil-bowl": "Curcan cu orez, dovlecel și roșii",
    "lunch-tuna-bean-salad": "Vită cu cartofi și salată de castraveți",
    "lunch-tofu-rice-pan": "Tigaie de curcan cu cartofi dulci și dovlecel",
    "lunch-turkey-quinoa": "Vită cu orez și sfeclă roșie",
    "dinner-bean-chili": "Carne tocată de vită cu cartofi și dovlecel",
    "dinner-salmon-potatoes": "Somon cu orez și salată de castraveți",
    "dinner-cod-chickpeas": "Tigaie cu ouă, cartofi și roșii",
    "dinner-chicken-stir-fry": "Curcan la tavă cu cartofi și dovlecel",
    "dinner-turkey-tray": "Vită cu cartofi dulci și sfeclă roșie",
    "snack-skyr-berries": "Skyr cu miere",
    "snack-carrots-hummus": "Quark cu măr",
    "snack-apple-almonds": "Banană cu skyr",
    "snack-cottage-pear": "Castravete și ou",
    "snack-kefir-walnuts": "Măr cu quark și miere"
  }
};

const SERVER_TEXT = {
  de: {
    "Adipositas Grad II": "Adipositas Grad II",
    Adipositas: "Adipositas",
    "Übergewicht": "Übergewicht",
    "unter 25": "unter 25"
  },
  ro: {
    "Adipositas Grad II": "Obezitate gradul II",
    Adipositas: "Obezitate",
    "Übergewicht": "Supraponderal",
    "unter 25": "sub 25",
    "Einfach, süß genug ohne Dessert und gut gegen Heißhunger am Vormittag.": "Simplu, destul de dulce fără desert și bun împotriva poftei din cursul dimineții.",
    "Herzhaft, vertraut und sättigend ohne kompliziert zu sein.": "Sățios, familiar și consistent fără să fie complicat.",
    "Schnell gemacht und angenehm, wenn morgens wenig Zeit da ist.": "Se face repede și este potrivit când dimineața este puțin timp.",
    "Fühlt sich wie normales Essen an und hält lange satt.": "Se simte ca mâncare normală și ține bine de foame.",
    "Klare Zutaten, gute Sättigung und einfach für zwei Portionen.": "Ingrediente clare, sațietate bună și ușor de făcut pentru două porții.",
    "Sehr vertrauter Teller und gut, wenn normales Mittagessen gefragt ist.": "O farfurie foarte familiară și bună când vrei un prânz normal.",
    "Warm, einfach und gut vorzubereiten.": "Caldă, simplă și bună de pregătit dinainte.",
    "Deftig, aber sauber aufgebaut und ohne schwere Sauce.": "Consistentă, dar bine echilibrată și fără sos greu.",
    "Deftig genug für den Abend und trotzdem aus einfachen Zutaten.": "Destul de consistentă pentru seară și totuși din ingrediente simple.",
    "Wenn Fisch okay ist: leichter Teller mit klarer Struktur.": "Dacă peștele este ok: o farfurie ușoară și bine structurată.",
    "Sehr einfach, günstig und auch abends gut verträglich.": "Foarte simplă, ieftină și ușor de tolerat seara.",
    "Ein Blech, wenig Abwasch und alltagstauglich.": "O singură tavă, puțin de spălat și bună pentru fiecare zi.",
    "Sättigend, ohne komplizierte Zutaten oder Soßen.": "Sățioasă, fără ingrediente complicate sau sosuri grele.",
    "Sehr einfach und besser als schnell etwas Süßes nebenbei.": "Foarte simplu și mai bun decât să iei repede ceva dulce.",
    "Macht ruhig satt und passt gut am Nachmittag.": "Satură liniștit și merge bine după-amiaza.",
    "Gut, wenn etwas Süßes gewünscht ist, aber der Snack einfach bleiben soll.": "Bun când vrei ceva dulce, dar gustarea trebuie să rămână simplă.",
    "Für salzigen Hunger oft besser als Brot oder Gebäck.": "Pentru pofta de ceva sărat este adesea mai bun decât pâinea sau patiseria.",
    "Schmeckt vertraut und bleibt trotzdem ein kontrollierter Snack.": "Are gust familiar și rămâne totuși o gustare controlată.",
    "Skyr in eine Schale geben.": "Pune skyrul într-un bol.",
    "Apfel klein schneiden und darübergeben.": "Taie mărul mărunt și pune-l deasupra.",
    "Mit Haferflocken und etwas Honig abschließen.": "Adaugă la final fulgii de ovăz și puțină miere.",
    "Eier kochen oder als Rührei braten.": "Fierbe ouăle sau fă-le omletă.",
    "Tomaten und Gurke aufschneiden.": "Taie roșiile și castravetelе.",
    "Mit Brot und Quark servieren.": "Servește cu pâine și quark.",
    "Quark in eine Schale geben.": "Pune quarkul într-un bol.",
    "Banane in Scheiben schneiden und darüberlegen.": "Taie banana felii și pune-o deasupra.",
    "Mit Haferflocken und wenig Honig abschließen.": "Adaugă la final fulgii de ovăz și puțină miere.",
    "Kartoffeln vorkochen oder vom Vortag verwenden.": "Fierbe cartofii dinainte sau folosește cartofi rămași de ieri.",
    "Tomaten schneiden und kurz in der Pfanne erwärmen.": "Taie roșiile și încălzește-le scurt în tigaie.",
    "Eier dazugeben und alles als Rührei fertig garen.": "Adaugă ouăle și termină totul ca omletă.",
    "Putenbrust in Stücke schneiden und anbraten.": "Taie pieptul de curcan bucăți și rumenește-l.",
    "Zucchini und Tomaten dazugeben und kurz garen.": "Adaugă dovlecelul și roșiile și gătește-le scurt.",
    "Mit gekochtem Reis servieren.": "Servește cu orez gătit.",
    "Kartoffeln weich kochen.": "Fierbe cartofii până devin moi.",
    "Rindfleisch in der Pfanne braten.": "Prăjește carnea de vită în tigaie.",
    "Gurke schneiden und mit Quark als einfacher Salat servieren.": "Taie castravetelе și servește-l cu quark ca salată simplă.",
    "Süßkartoffeln in Würfel schneiden und garen.": "Taie cartofii dulci cuburi și gătește-i.",
    "Putenbrust anbraten.": "Rumenește pieptul de curcan.",
    "Zucchini kurz mitgaren und alles zusammen servieren.": "Gătește scurt și dovlecelul și servește totul împreună.",
    "Rindfleisch anbraten.": "Rumenește carnea de vită.",
    "Reis erwärmen.": "Încălzește orezul.",
    "Rote Bete und Gurke dazugeben und alles zusammen servieren.": "Adaugă sfecla roșie și castravetelе și servește totul împreună.",
    "Kartoffeln garen.": "Gătește cartofii.",
    "Rinderhack anbraten.": "Rumenește carnea tocată de vită.",
    "Zucchini und Tomaten kurz mitgaren und zusammen servieren.": "Gătește scurt dovlecelul și roșiile și servește totul împreună.",
    "Lachs in der Pfanne oder im Ofen garen.": "Gătește somonul în tigaie sau la cuptor.",
    "Gurke und Tomaten schneiden und als Salat dazugeben.": "Taie castravetelе și roșiile și adaugă-le ca salată.",
    "Kartoffeln in Scheiben garen.": "Gătește cartofii tăiați felii.",
    "Eier dazugeben und alles stocken lassen.": "Adaugă ouăle și lasă totul să se lege.",
    "Kartoffeln, Zucchini und Tomaten schneiden und aufs Blech geben.": "Taie cartofii, dovlecelul și roșiile și pune-le pe tavă.",
    "Putenstücke dazugeben und alles gar backen.": "Adaugă bucățile de curcan și coace totul până este gata.",
    "Süßkartoffeln garen.": "Gătește cartofii dulci.",
    "Skyr in eine Schale geben und wenig Honig darübergeben.": "Pune skyrul într-un bol și adaugă puțină miere.",
    "Apfel schneiden und mit Quark essen.": "Taie mărul și mănâncă-l cu quark.",
    "Banane mit Skyr zusammen essen.": "Mănâncă banana împreună cu skyrul.",
    "Ei kochen, Gurke schneiden und beides zusammen essen.": "Fierbe oul, taie castravetelе și mănâncă-le împreună.",
    "Apfel schneiden, mit Quark anrichten und wenig Honig darübergeben.": "Taie mărul, servește-l cu quark și adaugă puțină miere.",
    "Macht satt, ist schnell gebaut und startet ohne Zuckerabsturz.": "Ține bine de foame, se face repede și evită pornirea zilei cu poftă de dulce.",
    "Schmeckt vertraut, hält lange satt und fühlt sich nicht nach Diät an.": "Are gust familiar, ține bine de foame și nu se simte ca o dietă.",
    "Kann am Vorabend vorbereitet werden und spart morgens Energie.": "Se poate pregăti seara și economisește energie dimineața.",
    "Cremig, einfach und gut für einen ruhigen Start ohne süßen Snack danach.": "Cremos, simplu și bun pentru un început liniștit fără poftă de dulce după aceea.",
    "Warm, vertraut und gut fuer Mittag oder als Restenbox am naechsten Tag.": "Cald, familiar și bun la prânz sau pentru porția rămasă a doua zi.",
    "Schmeckt wie normales Alltagsessen und braucht fast keine Kuechenarbeit.": "Are gust de mâncare normală de zi cu zi și cere foarte puțin efort în bucătărie.",
    "Einfach fuer zwei Portionen und gut zum Mitnehmen.": "Ușor de făcut pentru două porții și bun de luat la pachet.",
    "Gute Struktur fuer Tage mit mehr Hunger, aber ohne Fast-Food-Charakter.": "Bun pentru zilele cu mai multă foame, fără să semene cu fast-food.",
    "Erinnert an Hausmannskost, macht satt und gibt oft noch eine zweite Portion.": "Aduce a mâncare de casă, satură bine și lasă des și a doua porție.",
    "Klarer Telleraufbau und angenehm vertrauter Geschmack.": "Farfurie clară și gust familiar, ușor de acceptat.",
    "Leichtes Abendessen mit viel Eiweiss.": "Cină ușoară, cu multe proteine.",
    "Warm, deftig genug fuer den Abend und trotzdem leichter als Take-away.": "Caldă, destul de consistentă pentru seară și totuși mai ușoară decât take-away.",
    "Ein Blech, wenig Abwasch und ein Teller, der vertraut wirkt.": "O singură tavă, puțin de spălat și o farfurie care pare familiară.",
    "Guter Standard gegen Sueshunger.": "O alegere bună împotriva poftei de dulce.",
    "Hilft besonders am Nachmittag statt salzigen Snacks.": "Ajută mai ales după-amiaza în locul gustărilor sărate.",
    "Sehr einfach für unterwegs oder das Büro.": "Foarte simplu pentru drum sau birou.",
    "Kombiniert Obst mit Eiweiß und ist besser sättigend als nur Obst.": "Combină fructul cu proteine și satură mai bine decât fructul singur.",
    "Wenn der Hunger groesser ist, aber es trotzdem einfach bleiben soll.": "Când foamea este mai mare, dar vrei să rămână ceva simplu.",
    "Skyr in eine Schüssel geben.": "Pune skyrul într-un bol.",
    "Haferflocken und Leinsamen darüber streuen.": "Presară deasupra fulgii de ovăz și semințele de in.",
    "Beeren draufgeben und direkt essen.": "Adaugă fructele de pădure și mănâncă imediat.",
    "Eier 7 bis 8 Minuten kochen oder als Rührei braten.": "Fierbe ouăle 7–8 minute sau fă-le omletă.",
    "Tomaten und Gurke aufschneiden.": "Taie roșiile și castravetelе.",
    "Mit Roggenbrot und Magerquark servieren.": "Servește cu pâine de secară și quark slab.",
    "Haferflocken, Joghurt und Milch verruehren.": "Amestecă fulgii de ovăz cu iaurtul și laptele.",
    "Apfel wuerfeln und mit Zimt unterheben.": "Taie mărul cuburi și amestecă-l cu scorțișoară.",
    "Ueber Nacht kalt stellen oder direkt 10 Minuten quellen lassen.": "Lasă peste noapte la rece sau așteaptă 10 minute să se înmoaie.",
    "Quark in ein Glas oder eine Schale geben.": "Pune quarkul într-un pahar sau bol.",
    "Birne klein schneiden und darauf verteilen.": "Taie para mărunt și pune-o deasupra.",
    "Mit Walnüssen und Haferflocken abschließen.": "Completează cu nuci și fulgi de ovăz.",
    "Poulet in Streifen schneiden und anbraten.": "Taie puiul fâșii și rumenește-l.",
    "Brokkoli und Karotten kurz garen.": "Gătește scurt broccoli și morcovii.",
    "Mit Linsen und Reis in Schuesseln verteilen und mit Joghurt servieren.": "Pune în boluri cu linte și orez și servește cu iaurt.",
    "Thunfisch und Bohnen abtropfen.": "Scurge tonul și fasolea.",
    "Salat, Tomaten und Gurke schneiden.": "Taie salata, roșiile și castravetelе.",
    "Alles mit etwas Olivenöl und Pfeffer mischen.": "Amestecă totul cu puțin ulei de măsline și piper.",
    "Tofu wuerfeln und knusprig anbraten.": "Taie tofu cuburi și rumenește-l până devine crocant.",
    "Gemüse in der gleichen Pfanne kurz garen.": "Gătește rapid legumele în aceeași tigaie.",
    "Reis und Sojasauce zugeben und alles warm schwenken.": "Adaugă orezul și sosul de soia și amestecă totul la cald.",
    "Ofen auf 200 Grad vorheizen.": "Preîncălzește cuptorul la 200 de grade.",
    "Gemüse schneiden, mit wenig Öl mischen und aufs Blech geben.": "Taie legumele, amestecă-le cu puțin ulei și pune-le pe tavă.",
    "Fleisch anbraten oder mitgaren, dann mit Quinoa und wenig Feta servieren.": "Rumenește carnea sau gătește-o împreună, apoi servește cu quinoa și puțină feta.",
    "Zwiebel und Peperoni schneiden und anschwitzen.": "Taie ceapa și ardeiul și călește-le ușor.",
    "Bohnen, Mais und Tomaten zugeben.": "Adaugă fasolea, porumbul și roșiile.",
    "15 Minuten kochen lassen und mit Joghurt servieren.": "Lasă la fiert 15 minute și servește cu iaurt.",
    "Kartoffeln weich kochen oder im Ofen garen.": "Fierbe cartofii până devin moi sau coace-i în cuptor.",
    "Lachs in der Pfanne oder im Ofen garen.": "Gătește somonul în tigaie sau la cuptor.",
    "Brokkoli daempfen und alles mit Zitronensaft servieren.": "Fierbe broccoli la abur și servește totul cu suc de lămâie.",
    "Fisch wuerzen und sanft anbraten.": "Asezonează peștele și rumenește-l ușor.",
    "Zucchetti und Tomaten kurz in der Pfanne garen.": "Gătește rapid dovlecelul și roșiile în tigaie.",
    "Kichererbsen warm machen und alles zusammen servieren.": "Încălzește năutul și servește totul împreună.",
    "Wok-Gemüse und etwas Ingwer zugeben.": "Adaugă legumele pentru wok și puțin ghimbir.",
    "Mit Reis und Sojasauce fertigstellen.": "Termină mâncarea cu orez și sos de soia.",
    "Backofen auf 200 Grad vorheizen.": "Preîncălzește cuptorul la 200 de grade.",
    "Putenstuecke dazugeben und 25 Minuten backen.": "Adaugă bucățile de curcan și coace 25 de minute.",
    "Beides zusammen in eine Schale geben und essen.": "Pune-le împreună într-un bol și mănâncă.",
    "Karotten schneiden und mit Hummus essen.": "Taie morcovii și mănâncă-i cu hummus.",
    "Apfel und eine kleine Portion Mandeln mitnehmen.": "Ia cu tine un măr și o porție mică de migdale.",
    "Birne schneiden und mit Hüttenkäse essen.": "Taie para și mănânc-o cu brânză cottage.",
    "Kefir trinken und Walnüsse dazu essen.": "Bea chefirul și mănâncă alături nucile.",
    "Heute keine zuckerhaltigen Getraenke.": "Astăzi fără băuturi cu zahăr.",
    "Nach dem Abendessen 10 bis 15 Minuten spazieren.": "După cină, plimbare 10–15 minute.",
    "Mittag und Abend: halber Teller Gemuese.": "La prânz și seara: jumătate de farfurie cu legume.",
    "Snacks bewusst klein halten und Protein zuerst.": "Păstrează gustările mici și începe cu proteina.",
    "Zum Kaffee nichts Sueses nebenbei einbauen.": "La cafea, fără ceva dulce pe lângă.",
    "Heute Wasserflasche sichtbar hinstellen.": "Ține sticla de apă la vedere astăzi.",
    "Abendessen nicht neben dem Fernseher essen.": "Nu mânca cina în fața televizorului.",
    "Halber Teller Gemuese, Viertel Eiweiss, Viertel staerkereiche Beilage.": "Jumătate de farfurie legume, un sfert proteină, un sfert garnitură cu amidon.",
    "Wasser oder ungesuesster Kaffee/Tee statt Softdrinks.": "Apă sau cafea/ceai neîndulcit în loc de băuturi dulci.",
    "3 Hauptmahlzeiten plus 1 bis 2 kleine Snacks ist oft alltagstauglicher als staendiges Naschen.": "3 mese principale plus 1–2 gustări mici sunt adesea mai ușor de urmat decât ronțăitul continuu.",
    "Kurzer Spaziergang nach dem Abendessen ist ein starker kleiner Hebel.": "O plimbare scurtă după cină este un obicei mic cu efect mare.",
    "Die App ist fuer Diabetes-Praevention gedacht, nicht fuer Diagnose oder Medikamentensteuerung.": "Aplicația este pentru prevenirea diabetului, nu pentru diagnostic sau ajustarea medicației.",
    "Moderater Gewichtsverlust und mindestens 150 Minuten Bewegung pro Woche sind die staerksten Lifestyle-Hebel gegen Typ-2-Diabetes.": "Scăderea moderată în greutate și cel puțin 150 de minute de mișcare pe săptămână sunt cele mai puternice obiceiuri împotriva diabetului de tip 2.",
    "Wasser statt Softdrinks und ballaststoffreiche, wenig verarbeitete Mahlzeiten sind fuer den Alltag ein robuster Standard.": "Apă în loc de suc și mesele bogate în fibre, puțin procesate, sunt o bază solidă pentru fiecare zi.",
    "Bei starkem Durst, haeufigem Wasserlassen, starker Muede oder unerklaerlichem Gewichtsverlust bitte medizinisch abklaeren lassen.": "Dacă apar sete intensă, urinare frecventă, oboseală puternică sau scădere inexplicabilă în greutate, cere un consult medical.",
    "Das Gewicht liegt im Bereich Adipositas. Ein Termin fuer Blutdruck, A1c, Nuechternglukose und Lipide ist sinnvoll.": "Greutatea este în zona de obezitate. Merită o programare pentru tensiune, A1c, glicemie a jeun și lipide.",
    "Bei bestaetigter Praediabetes bitte den Plan mit Arzt oder Ernaehrungsberatung abstimmen.": "Dacă prediabetul este confirmat, potrivește planul cu medicul sau cu un nutriționist.",
    "Heute liegt der Log deutlich ueber Ziel. Rest des Tages besser einfach halten: Gemuese, mageres Eiweiss, Wasser.": "Astăzi jurnalul este clar peste țintă. Pentru restul zilei, mergi pe ceva simplu: legume, proteină slabă, apă.",
    "Mit Diabetes in der Familie lohnt sich fruehe Kontrolle besonders. Gewicht, Bewegung und Blutwerte jetzt ernst nehmen.": "Când există diabet în familie, controalele timpurii merită și mai mult. Greutatea, mișcarea și analizele trebuie luate în serios acum."
  }
};

const ITEM_LABELS = {
  de: {},
  ro: {
    Apfel: "mar",
    Banane: "banana",
    Beeren: "fructe de padure",
    Birne: "para",
    Blattsalat: "salata verde",
    Brot: "paine",
    Brokkoli: "broccoli",
    Eier: "oua",
    Feta: "feta",
    Gurke: "castravete",
    Haferflocken: "fulgi de ovaz",
    Honig: "miere",
    Huettenkaese: "branza cottage",
    Hummus: "hummus",
    Ingwer: "ghimbir",
    "Joghurt nature": "iaurt simplu",
    "Kabeljau oder anderer magerer Fisch": "cod sau alt peste slab",
    Karotten: "morcovi",
    Kartoffeln: "cartofi",
    "Kefir nature": "chefir simplu",
    Kichererbsen: "naut",
    Kidneybohnen: "fasole rosie",
    Lachs: "somon",
    Leinsamen: "seminte de in",
    "Linsen gekocht": "linte fiarta",
    Magerquark: "quark slab",
    Mais: "porumb",
    Mandeln: "migdale",
    "Milch oder Sojamilch": "lapte sau lapte de soia",
    Naturjoghurt: "iaurt simplu",
    "Naturreis gekocht": "orez simplu gatit",
    Olivenoel: "ulei de masline",
    "Passierte Tomaten": "rosii pasate",
    Peperoni: "ardei",
    Pouletbrust: "piept de pui",
    Quark: "quark",
    "Reis gekocht": "orez gatit",
    Rindfleisch: "carne de vita",
    Rinderhack: "carne tocata de vita",
    "Rote Bete": "sfecla rosie",
    Putenbrust: "piept de curcan",
    "Quinoa gekocht": "quinoa gatita",
    Roggenbrot: "paine de secara",
    Skyr: "skyr",
    "Skyr nature": "skyr simplu",
    "Sojasauce light": "sos de soia light",
    "Süßkartoffeln": "cartofi dulci",
    "Thunfisch im Wasser": "ton in apa",
    Tofu: "tofu",
    Tomaten: "rosii",
    "Truthahn oder Poulet": "curcan sau pui",
    "Vollkornreis gekocht": "orez integral gatit",
    Walnuesse: "nuci",
    "Weisse Bohnen": "fasole alba",
    "Wok-Gemuese": "amestec de legume pentru wok",
    Zimt: "scortisoara",
    Zitrone: "lamaie",
    Zucchini: "dovlecel",
    Zucchetti: "dovlecel",
    Zwiebel: "ceapa"
  }
};

const UNIT_LABELS = {
  de: { g: "g", ml: "ml", EL: "EL", Stk: "Stk", Scheiben: "Scheiben", Prise: "Prise", Dose: "Dose", Dosen: "Dosen" },
  ro: { g: "g", ml: "ml", EL: "linguri", Stk: "buc", Scheiben: "felii", Prise: "praf", Dose: "conserva", Dosen: "conserve" }
};

const AISLE_LABELS = {
  de: {},
  ro: {
    Baeckerei: "brutarie",
    "Bäckerei": "brutarie",
    Fisch: "peste",
    Fleisch: "carne",
    Gewuerze: "condimente",
    Gewürze: "condimente",
    Konserven: "conserve",
    Kuehlung: "frigider",
    Kühlung: "frigider",
    "Obst und Gemüse": "fructe si legume",
    "Obst und Gemuese": "fructe si legume",
    Oele: "uleiuri",
    Öle: "uleiuri",
    Trockenwaren: "produse uscate"
  }
};

const RAW_TITLE_TO_RECIPE_ID = Object.fromEntries(
  Object.entries(RAW_RECIPE_TITLES).flatMap(([id, title]) => [
    [cleanText(title), id],
    [normalizeLookupKey(title), id]
  ])
);
const PRODUCE_ITEMS = new Set([
  "Apfel",
  "Banane",
  "Beeren",
  "Birne",
  "Blattsalat",
  "Brokkoli",
  "Gurke",
  "Karotten",
  "Kartoffeln",
  "Peperoni",
  "Rote Bete",
  "Süßkartoffeln",
  "Tomaten",
  "Wok-Gemuese",
  "Wok-Gemüse",
  "Zitrone",
  "Zucchini",
  "Zucchetti",
  "Zwiebel"
]);

const state = {
  profile: loadJson(STORAGE_KEYS.profile, defaultProfile),
  logs: loadJson(STORAGE_KEYS.logs, {}),
  habits: loadJson(STORAGE_KEYS.habits, {}),
  shopping: loadJson(STORAGE_KEYS.shopping, {}),
  selectedDate: window.localStorage?.getItem(STORAGE_KEYS.selectedDate) || todayKey(),
  currentView: window.localStorage?.getItem(STORAGE_KEYS.view) || "today",
  locale: window.localStorage?.getItem(STORAGE_KEYS.locale) || "de",
  payload: null,
  loading: false
};

const profileForm = document.getElementById("profile-form");
const logForm = document.getElementById("log-form");
const dateInput = document.getElementById("selected-date");
const headlineTitle = document.getElementById("headline-title");
const warningStrip = document.getElementById("warning-strip");
const topSummary = document.getElementById("top-summary");
const targetCards = document.getElementById("target-cards");
const progressCopy = document.getElementById("progress-copy");
const progressFill = document.getElementById("progress-fill");
const focusCard = document.getElementById("focus-card");
const habitList = document.getElementById("habit-list");
const mealPlan = document.getElementById("meal-plan");
const guidanceList = document.getElementById("guidance-list");
const weekPlan = document.getElementById("week-plan");
const recipeLibrary = document.getElementById("recipe-library");
const shoppingList = document.getElementById("shopping-list");
const logSummary = document.getElementById("log-summary");
const logEntries = document.getElementById("log-entries");
const sectionNav = document.getElementById("section-nav");
const viewPanels = document.querySelectorAll(".view-panel");
const jumpWeekButton = document.getElementById("jump-week-button");
const refreshDayButton = document.getElementById("refresh-day-button");
const copyShoppingButton = document.getElementById("copy-shopping-button");
const resetShoppingButton = document.getElementById("reset-shopping-button");
const clearLogButton = document.getElementById("clear-log-button");
const langDeButton = document.getElementById("lang-de");
const langRoButton = document.getElementById("lang-ro");
const logMealTypeSelect = document.getElementById("entry-meal-type");

let refreshTimer = null;

function todayKey() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60_000);
  return local.toISOString().slice(0, 10);
}

function loadJson(key, fallback) {
  try {
    const raw = window.localStorage?.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  window.localStorage?.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function interpolate(template, values = {}) {
  return String(template).replaceAll(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}

function text(key, values = {}) {
  const source = UI_TEXT[state.locale] ?? UI_TEXT.de;
  const template = source[key] ?? UI_TEXT.de[key] ?? key;
  return interpolate(template, values);
}

function proteinLabel() {
  return state.locale === "ro" ? "proteine" : "Protein";
}

function fiberLabel() {
  return state.locale === "ro" ? "fibre" : "Ballaststoffe";
}

function minuteLabel() {
  return "Min";
}

function prepLabel() {
  return state.locale === "ro" ? "Pregatire" : "Vorbereitung";
}

function cookLabel() {
  return state.locale === "ro" ? "Gatit" : "Kochen";
}

function weekActivityUnit() {
  return state.locale === "ro" ? "min/saptamana" : "min/Woche";
}

function localeTag() {
  return state.locale === "ro" ? "ro-RO" : "de-CH";
}

function formatDate(dateKey) {
  return new Intl.DateTimeFormat(localeTag(), { weekday: "long", day: "numeric", month: "short" }).format(new Date(`${dateKey}T12:00:00`));
}

function cleanText(value) {
  return String(value ?? "").replaceAll("Ã‚Â·", "·").replaceAll("Â·", "·").trim();
}

function normalizeLookupKey(value) {
  return cleanText(value)
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("Ä", "Ae")
    .replaceAll("Ö", "Oe")
    .replaceAll("Ü", "Ue")
    .replaceAll("ß", "ss");
}

function localizeText(value) {
  const cleaned = cleanText(value);
  const normalized = normalizeLookupKey(cleaned);
  return SERVER_TEXT[state.locale]?.[cleaned] ?? SERVER_TEXT[state.locale]?.[normalized] ?? cleaned;
}

function currentEntries() {
  return Array.isArray(state.logs[state.selectedDate]) ? state.logs[state.selectedDate] : [];
}

function currentHabits() {
  return state.habits[state.selectedDate] ?? {};
}

function shoppingWeekKey() {
  return state.payload?.week?.startDate || state.selectedDate;
}

function currentShoppingChecks() {
  return state.shopping[shoppingWeekKey()] ?? {};
}

function hydrateProfileForm() {
  Object.entries(state.profile).forEach(([key, value]) => {
    const element = profileForm.elements.namedItem(key);
    if (!element) {
      return;
    }
    if (element.type === "checkbox") {
      element.checked = Boolean(value);
      return;
    }
    element.value = value;
  });
  dateInput.value = state.selectedDate;
}

function readProfileForm() {
  const formData = new FormData(profileForm);
  const diagnosedPrediabetesField = profileForm.elements.namedItem("diagnosedPrediabetes");
  const familyHistoryField = profileForm.elements.namedItem("familyHistory");
  const likesFishField = profileForm.elements.namedItem("likesFish");
  const ifField = profileForm.elements.namedItem("intermittentFasting");
  return {
    ...state.profile,
    name: formData.get("name"),
    age: Number(formData.get("age") ?? state.profile.age),
    sex: formData.get("sex") ?? state.profile.sex,
    heightCm: Number(formData.get("heightCm")),
    weightKg: Number(formData.get("weightKg")),
    activityLevel: formData.get("activityLevel") ?? state.profile.activityLevel,
    goal: formData.get("goal") ?? state.profile.goal,
    diagnosedPrediabetes: diagnosedPrediabetesField?.type === "checkbox" ? diagnosedPrediabetesField.checked : false,
    familyHistory: familyHistoryField?.type === "checkbox" ? familyHistoryField.checked : false,
    likesFish: likesFishField?.type === "checkbox" ? likesFishField.checked : state.profile.likesFish,
    intermittentFasting: ifField?.type === "checkbox" ? ifField.checked : Boolean(state.profile.intermittentFasting)
  };
}

function persistProfile() {
  state.profile = readProfileForm();
  saveJson(STORAGE_KEYS.profile, state.profile);
}

function persistLogs() {
  saveJson(STORAGE_KEYS.logs, state.logs);
}

function persistHabits() {
  saveJson(STORAGE_KEYS.habits, state.habits);
}

function persistShopping() {
  saveJson(STORAGE_KEYS.shopping, state.shopping);
}

function setView(view) {
  state.currentView = view;
  window.localStorage?.setItem(STORAGE_KEYS.view, view);
  sectionNav.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  viewPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `view-${view}`);
  });
}

function setLocale(locale) {
  state.locale = locale === "ro" ? "ro" : "de";
  window.localStorage?.setItem(STORAGE_KEYS.locale, state.locale);
  applyStaticText();
  if (state.payload) {
    renderAll(state.payload);
  }
}

function scheduleRefresh() {
  window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => void refreshPlan(), 180);
}

async function fetchPlan() {
  return buildNutritionPlan({ profile: state.profile, date: state.selectedDate, entries: currentEntries() });
}

function topCard(label, value, detail, tone = "default") {
  return `<article class="top-card top-card--${escapeHtml(tone)}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(detail)}</small></article>`;
}

function metricCard(label, value, detail) {
  return `<article class="metric-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(detail)}</small></article>`;
}

function mealTypeLabel(rawValue) {
  const value = String(rawValue ?? "").toLowerCase();
  const snackMatch = String(rawValue ?? "").match(/(\d+)/);
  if (value.includes("fruehstueck") || value.includes("frühstück") || value.includes("mic dejun")) {
    return text("mealTypeBreakfast");
  }
  if (value.includes("mittag") || value.includes("pranz")) {
    return text("mealTypeLunch");
  }
  if (value.includes("abend") || value.includes("cina")) {
    return text("mealTypeDinner");
  }
  if (value.includes("snack") || value.includes("gustare")) {
    return snackMatch ? `${text("mealTypeSnack")} ${snackMatch[1]}` : text("mealTypeSnack");
  }
  return rawValue;
}

function difficultyLabel(rawValue) {
  const value = String(rawValue ?? "").toLowerCase();
  if (value.includes("leicht")) {
    return text("difficultyEasy");
  }
  if (value.includes("mittel")) {
    return text("difficultyMedium");
  }
  return text("difficultyHard");
}

function localizeUnit(unit) {
  return UNIT_LABELS[state.locale]?.[unit] ?? unit;
}

function localizeItem(item) {
  const cleaned = cleanText(item);
  const normalized = normalizeLookupKey(cleaned);
  return ITEM_LABELS[state.locale]?.[cleaned] ?? ITEM_LABELS[state.locale]?.[normalized] ?? cleaned;
}

function localizeAisle(aisle) {
  const cleaned = cleanText(aisle);
  const normalized = normalizeLookupKey(cleaned);
  return AISLE_LABELS[state.locale]?.[cleaned] ?? AISLE_LABELS[state.locale]?.[normalized] ?? cleaned;
}

function localizeRecipeTitleById(recipeId) {
  return RECIPE_TITLES[state.locale]?.[recipeId] ?? RECIPE_TITLES.de[recipeId] ?? recipeId;
}

function localizeRecipeTitle(rawTitle, recipeId = null) {
  const cleaned = cleanText(rawTitle);
  const resolvedId = recipeId ?? RAW_TITLE_TO_RECIPE_ID[cleaned] ?? RAW_TITLE_TO_RECIPE_ID[normalizeLookupKey(cleaned)];
  return resolvedId ? localizeRecipeTitleById(resolvedId) : localizeText(rawTitle);
}

function localizeIngredient(ingredient) {
  return { ...ingredient, item: localizeItem(ingredient.item), unit: localizeUnit(ingredient.unit), aisle: localizeAisle(ingredient.aisle) };
}

function localizeRecipe(recipe) {
  return {
    ...recipe,
    title: localizeRecipeTitle(recipe.title, recipe.id),
    why: localizeText(recipe.why),
    mealType: mealTypeLabel(recipe.mealType),
    difficulty: difficultyLabel(recipe.difficulty),
    ingredients: recipe.ingredients.map(localizeIngredient),
    steps: recipe.steps.map((step) => localizeText(step))
  };
}

function formatQuantity(quantity) {
  return Number.isInteger(quantity) ? String(quantity) : Number(quantity.toFixed(1)).toLocaleString(localeTag());
}

function formatIngredientLine(ingredient) {
  return `${formatQuantity(ingredient.quantity)} ${ingredient.unit} ${ingredient.item}`;
}

function ingredientVegetableCount(recipe) {
  return recipe.ingredients.filter((ingredient) => PRODUCE_ITEMS.has(ingredient.item)).length;
}

function buildRecipeBenefits(recipe) {
  const benefits = [];
  const totalMinutes = recipe.prepMinutes + recipe.cookMinutes;
  if (recipe.protein >= 16) {
    benefits.push(text("benefitProtein", { protein: recipe.protein }));
  }
  if (recipe.fiber >= 5) {
    benefits.push(text("benefitFiber", { fiber: recipe.fiber }));
  }
  if (ingredientVegetableCount(recipe) >= 2) {
    benefits.push(text("benefitVegetables"));
  }
  if (totalMinutes <= 15) {
    benefits.push(text("benefitQuick", { minutes: totalMinutes }));
  }
  if (recipe.servings >= 2) {
    benefits.push(text("benefitBatch"));
  }
  if (String(recipe.id).startsWith("snack-")) {
    benefits.push(text("benefitPortable"));
  }
  return (benefits.length ? benefits : [text("benefitBalanced")]).slice(0, 3);
}

function renderWarnings(payload) {
  const warnings = payload.warnings ?? [];
  if (!warnings.length) {
    warningStrip.innerHTML = `<div class="warning-pill warning-pill--ok">${escapeHtml(text("warningOkay"))}</div>`;
    return;
  }
  warningStrip.innerHTML = warnings.map((warning) => `<div class="warning-pill">${escapeHtml(localizeText(warning))}</div>`).join("");
}

function renderTopSummary(payload) {
  const remaining = payload.progress.remainingCalories;
  const consumed = payload.progress.totals.calories;
  const target = payload.targets.calorieTarget;
  headlineTitle.textContent = `${payload.profile.name}: ${formatDate(state.selectedDate)}`;
  topSummary.innerHTML = [
    topCard(text("topRemainingLabel"), `${remaining} kcal`, remaining < 0 ? text("topRemainingOver") : text("topRemainingGood"), remaining < 0 ? "alert" : "strong"),
    topCard(text("topConsumedLabel"), `${consumed} kcal`, text("topConsumedDetail", { target }), "soft"),
    topCard(text("topWeekTargetLabel"), payload.targets.weightLossGoalPercent, text("topWeekTargetDetail", { minutes: payload.targets.weeklyActivityMinutes }), "soft"),
    topCard(text("topFocusLabel"), localizeText(payload.today.dailyFocus), text("topFocusDetail"), "focus")
  ].join("");
}

function renderTargets(payload) {
  const { targets, progress } = payload;
  targetCards.innerHTML = [
    metricCard(text("targetCalorie"), `${targets.calorieTarget} kcal`, text("targetCalorieDetail", { deficit: targets.calorieDeficit })),
    metricCard(text("targetActivity"), `${targets.weeklyActivityMinutes} ${weekActivityUnit()}`, text("targetActivityDetail")),
    metricCard(text("targetRemaining"), `${progress.remainingCalories} kcal`, progress.remainingCalories < 0 ? text("targetRemainingOverDetail") : text("targetRemainingInPlan"))
  ].join("");
}

function renderProgress(payload) {
  const target = payload.targets.calorieTarget;
  const consumed = payload.progress.totals.calories;
  const percent = Math.max(0, Math.min(100, Math.round((consumed / target) * 100)));
  progressCopy.textContent = `${consumed} / ${target} kcal`;
  progressFill.style.width = `${percent}%`;
  progressFill.dataset.status = payload.progress.calorieStatus;
}

function renderGuidance(payload) {
  const notes = [payload.targets.plateMethod, ...payload.targets.notes, ...payload.guidance.sourceNotes];
  guidanceList.innerHTML = notes.map((note) => `<div class="guidance-item">${escapeHtml(localizeText(note))}</div>`).join("");
}

function renderFocusCard(payload) {
  focusCard.innerHTML = `
    <div>
      <p class="eyebrow">${escapeHtml(text("focusEyebrow"))}</p>
      <h3>${escapeHtml(localizeText(payload.today.dailyFocus))}</h3>
      <p class="section-copy">${escapeHtml(localizeText(payload.guidance.summary))}</p>
    </div>
    <div class="focus-stats">
      <div><span>${escapeHtml(text("focusPlan"))}</span><strong>${payload.today.totals.calories} kcal</strong></div>
      <div><span>${escapeHtml(text("focusProtein"))}</span><strong>${payload.today.totals.protein} g</strong></div>
      <div><span>${escapeHtml(text("focusFiber"))}</span><strong>${payload.today.totals.fiber} g</strong></div>
    </div>`;
}

function habitDefinitions() {
  return [
    { id: "water", label: text("habitWater"), note: text("habitWaterNote") },
    { id: "walk", label: text("habitWalk"), note: text("habitWalkNote") },
    { id: "vegetables", label: text("habitVegetables"), note: text("habitVegetablesNote") }
  ];
}

function renderHabits() {
  const active = currentHabits();
  habitList.innerHTML = habitDefinitions().map((habit) => `<button class="habit-toggle ${active[habit.id] ? "is-done" : ""}" type="button" data-habit-id="${habit.id}"><strong>${escapeHtml(habit.label)}</strong><span>${escapeHtml(habit.note)}</span></button>`).join("");
}

function recipeStepsHtml(recipe) {
  return `<ol class="recipe-steps">${recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
}

function ingredientsHtml(recipe) {
  return `<ul class="meal-foods">${recipe.ingredients.map((ingredient) => `<li>${escapeHtml(formatIngredientLine(ingredient))}</li>`).join("")}</ul>`;
}

function benefitHtml(recipe) {
  return `<div class="recipe-benefits"><strong class="meal-benefit-title">${escapeHtml(text("mealBenefitTitle"))}</strong><ul class="benefit-list">${buildRecipeBenefits(recipe).map((benefit) => `<li>${escapeHtml(benefit)}</li>`).join("")}</ul></div>`;
}

function sequenceLabel(recipe, index) {
  if (String(recipe.id).startsWith("snack-")) {
    return `${text("mealTypeSnack")} ${Math.max(1, index - 2)}`;
  }
  return `${index + 1}. ${mealTypeLabel(recipe.mealType)}`;
}

function mealCard(recipeInput, index) {
  const recipe = localizeRecipe(recipeInput);
  return `
    <article class="meal-card">
      <div class="meal-sequence">${escapeHtml(sequenceLabel(recipeInput, index))}</div>
      <div class="meal-top">
        <div><p class="meal-type">${escapeHtml(recipe.mealType)}</p><h3>${escapeHtml(recipe.title)}</h3></div>
        <div class="meal-kcal">${recipe.calories} kcal</div>
      </div>
      <p class="meal-why">${escapeHtml(recipe.why)}</p>
      <div class="meal-meta"><span>${recipe.protein} g ${escapeHtml(proteinLabel())}</span><span>${recipe.fiber} g ${escapeHtml(fiberLabel())}</span><span>${recipe.prepMinutes + recipe.cookMinutes} ${escapeHtml(minuteLabel())}</span></div>
      ${benefitHtml(recipeInput)}
      ${ingredientsHtml(recipe)}
      ${recipeStepsHtml(recipe)}
      <div class="meal-actions">
        <button class="button button-primary" type="button" data-add-plan-entry="${escapeHtml(recipe.id)}">${escapeHtml(text("eatAndLog"))}</button>
        <button class="button button-secondary" type="button" data-open-view="log">${escapeHtml(text("goToLog"))}</button>
      </div>
    </article>`;
}

function renderToday(payload) {
  const todayRecipes = [...payload.today.meals, ...payload.today.snacks];
  renderFocusCard(payload);
  renderHabits();
  mealPlan.innerHTML = todayRecipes.map((recipe, index) => mealCard(recipe, index)).join("");
  renderGuidance(payload);
}

function weekCard(day) {
  return `
    <article class="week-card">
      <div class="week-card-top">
        <div><p class="meal-type">${escapeHtml(formatDate(day.date))}</p><h3>${escapeHtml(text("weekSummary", { calories: day.plan.totals.calories, protein: day.plan.totals.protein, fiber: day.plan.totals.fiber }))}</h3></div>
        <button class="button button-secondary" type="button" data-load-date="${escapeHtml(day.date)}">${escapeHtml(text("loadDay"))}</button>
      </div>
      <div class="week-recipe-list">${[...day.plan.meals, ...day.plan.snacks].map((recipe) => `<div class="week-recipe-item"><strong>${escapeHtml(mealTypeLabel(recipe.mealType))}:</strong> ${escapeHtml(localizeRecipeTitle(recipe.title, recipe.id))}</div>`).join("")}</div>
    </article>`;
}

function renderWeek(payload) {
  if (!weekPlan) {
    return;
  }
  weekPlan.innerHTML = payload.week.days.map(weekCard).join("");
}

function recipeLibraryCard(recipeInput) {
  const recipe = localizeRecipe(recipeInput);
  return `
    <article class="recipe-card">
      <div class="meal-top">
        <div><p class="meal-type">${escapeHtml(recipe.mealType)}</p><h3>${escapeHtml(recipe.title)}</h3></div>
        <div class="meal-kcal">${recipe.calories} kcal</div>
      </div>
      <p class="meal-why">${escapeHtml(recipe.why)}</p>
      <div class="meal-meta"><span>${recipe.prepMinutes} ${escapeHtml(minuteLabel())} ${escapeHtml(prepLabel())}</span><span>${recipe.cookMinutes} ${escapeHtml(minuteLabel())} ${escapeHtml(cookLabel())}</span><span>${escapeHtml(recipe.difficulty)}</span></div>
      ${benefitHtml(recipeInput)}
      ${ingredientsHtml(recipe)}
      ${recipeStepsHtml(recipe)}
      <button class="button button-secondary" type="button" data-add-recipe-entry="${escapeHtml(recipe.id)}">${escapeHtml(text("addRecipeToLog"))}</button>
    </article>`;
}

function renderRecipes(payload) {
  if (!recipeLibrary) {
    return;
  }
  recipeLibrary.innerHTML = payload.recipes.map(recipeLibraryCard).join("");
}

function shoppingItemKey(group, item) {
  return `${group.aisle}|${item.item}`;
}

function formatShoppingQuantity(item) {
  return `${formatQuantity(item.quantity)} ${localizeUnit(item.unit)}`;
}

function shoppingGroup(group) {
  const checks = currentShoppingChecks();
  return `
    <article class="shop-group">
      <h3>${escapeHtml(localizeAisle(group.aisle))}</h3>
      <div class="shop-items">${group.items.map((item) => `<label class="shop-item"><input type="checkbox" data-shopping-item="${escapeHtml(shoppingItemKey(group, item))}" ${checks[shoppingItemKey(group, item)] ? "checked" : ""} /><span><strong>${escapeHtml(localizeItem(item.item))}</strong><small>${escapeHtml(formatShoppingQuantity(item))} | ${escapeHtml(text("usedInLabel"))} ${escapeHtml(item.usedIn.map((title) => localizeRecipeTitle(title)).join(", "))}</small></span></label>`).join("")}</div>
    </article>`;
}

function renderShopping(payload) {
  if (!shoppingList) {
    return;
  }
  shoppingList.innerHTML = payload.week.groceryList.map(shoppingGroup).join("");
}

function entryLabel(entry) {
  return entry.sourceMealId ? localizeRecipeTitleById(entry.sourceMealId) : localizeRecipeTitle(entry.label);
}

function renderLog(payload) {
  const entries = payload.progress.entries;
  logSummary.innerHTML = `
    <div class="metric-card metric-card--summary"><span>${escapeHtml(text("logLogged"))}</span><strong>${payload.progress.totals.calories} kcal</strong><small>${escapeHtml(text("logLoggedDetail", { protein: payload.progress.totals.protein, fiber: payload.progress.totals.fiber }))}</small></div>
    <div class="metric-card metric-card--summary"><span>${escapeHtml(text("logRemaining"))}</span><strong>${payload.progress.remainingCalories} kcal</strong><small>${escapeHtml(text("logRemainingDetail", { protein: payload.progress.remainingProtein, fiber: payload.progress.remainingFiber }))}</small></div>`;

  if (!entries.length) {
    logEntries.innerHTML = `<div class="empty-log">${escapeHtml(text("logEmpty"))}</div>`;
    return;
  }

  logEntries.innerHTML = entries.map((entry) => `
    <article class="log-entry">
      <div><strong>${escapeHtml(entryLabel(entry))}</strong><p>${escapeHtml(`${mealTypeLabel(entry.mealType)} | ${entry.calories} kcal | ${entry.protein} g ${proteinLabel()} | ${entry.fiber} g ${fiberLabel()}`)}</p></div>
      <button class="icon-button" type="button" data-remove-entry="${escapeHtml(entry.id)}">${escapeHtml(text("removeEntry"))}</button>
    </article>`).join("");
}

function addEntry(entry) {
  const nextEntry = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, loggedAt: new Date().toISOString(), ...entry };
  state.logs[state.selectedDate] = [...currentEntries(), nextEntry];
  persistLogs();
  scheduleRefresh();
}

function removeEntry(entryId) {
  state.logs[state.selectedDate] = currentEntries().filter((entry) => entry.id !== entryId);
  persistLogs();
  scheduleRefresh();
}

function clearEntriesForSelectedDate() {
  state.logs[state.selectedDate] = [];
  persistLogs();
  scheduleRefresh();
}

function addPlanEntry(recipeId) {
  const allRecipes = [...(state.payload?.today?.meals ?? []), ...(state.payload?.today?.snacks ?? []), ...(state.payload?.recipes ?? [])];
  const found = allRecipes.find((recipe) => recipe.id === recipeId);
  if (!found) {
    return;
  }
  addEntry({ label: found.title, mealType: found.mealType, calories: found.calories, protein: found.protein, fiber: found.fiber, sourceMealId: found.id });
}

function toggleHabit(habitId) {
  const next = { ...currentHabits() };
  next[habitId] = !next[habitId];
  state.habits[state.selectedDate] = next;
  persistHabits();
  renderHabits();
}

function toggleShoppingItem(itemKey) {
  const weekKey = shoppingWeekKey();
  const next = { ...(state.shopping[weekKey] ?? {}) };
  next[itemKey] = !next[itemKey];
  state.shopping[weekKey] = next;
  persistShopping();
}

function resetShoppingList() {
  state.shopping[shoppingWeekKey()] = {};
  persistShopping();
  if (state.payload) {
    renderShopping(state.payload);
  }
}

async function copyText(textContent) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(textContent);
    return;
  }
  const helper = document.createElement("textarea");
  helper.value = textContent;
  document.body.append(helper);
  helper.select();
  document.execCommand("copy");
  helper.remove();
}

async function copyShoppingList() {
  if (!state.payload?.week?.groceryList?.length) {
    return;
  }
  const textContent = state.payload.week.groceryList.map((group) => {
    const lines = group.items.map((item) => `- ${localizeItem(item.item)}: ${formatShoppingQuantity(item)}`);
    return [localizeAisle(group.aisle), ...lines].join("\n");
  }).join("\n\n");

  try {
    await copyText(textContent);
    copyShoppingButton.textContent = text("copySuccess");
    window.setTimeout(() => { copyShoppingButton.textContent = text("copyShoppingButton"); }, 1400);
  } catch {
    copyShoppingButton.textContent = text("copyFail");
    window.setTimeout(() => { copyShoppingButton.textContent = text("copyShoppingButton"); }, 1400);
  }
}

function applyStaticText() {
  document.documentElement.lang = state.locale;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", text(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = text(element.dataset.i18nHtml);
  });

  if (langDeButton && langRoButton) {
    langDeButton.classList.toggle("is-active", state.locale === "de");
    langRoButton.classList.toggle("is-active", state.locale === "ro");
  }

  if (logMealTypeSelect) {
    const [breakfast, lunch, dinner, snack] = Array.from(logMealTypeSelect.options);
    if (breakfast) breakfast.textContent = text("mealTypeBreakfast");
    if (lunch) lunch.textContent = text("mealTypeLunch");
    if (dinner) dinner.textContent = text("mealTypeDinner");
    if (snack) snack.textContent = text("mealTypeSnack");
  }
}

function renderAll(payload) {
  renderWarnings(payload);
  renderTopSummary(payload);
  renderTargets(payload);
  renderProgress(payload);
  renderToday(payload);
  renderWeek(payload);
  renderRecipes(payload);
  renderShopping(payload);
  renderLog(payload);
}

async function refreshPlan() {
  state.loading = true;
  progressCopy.textContent = text("loadingPlan");

  try {
    state.payload = await fetchPlan();
    renderAll(state.payload);
  } catch (error) {
    warningStrip.innerHTML = `<div class="warning-pill">${escapeHtml(error.message)}</div>`;
    topSummary.innerHTML = "";
    targetCards.innerHTML = "";
    focusCard.innerHTML = "";
    habitList.innerHTML = "";
    mealPlan.innerHTML = "";
    guidanceList.innerHTML = "";
    weekPlan.innerHTML = "";
    recipeLibrary.innerHTML = "";
    shoppingList.innerHTML = "";
    logSummary.innerHTML = "";
    logEntries.innerHTML = "";
  } finally {
    state.loading = false;
  }
}

profileForm.addEventListener("input", () => {
  persistProfile();
  scheduleRefresh();
});

profileForm.addEventListener("change", () => {
  persistProfile();
  scheduleRefresh();
});

dateInput.addEventListener("change", () => {
  state.selectedDate = dateInput.value || todayKey();
  window.localStorage?.setItem(STORAGE_KEYS.selectedDate, state.selectedDate);
  void refreshPlan();
});

logForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(logForm);
  addEntry({
    mealType: String(formData.get("mealType") ?? "Eintrag"),
    label: String(formData.get("label") ?? "Mahlzeit").trim() || "Mahlzeit",
    calories: Number(formData.get("calories") ?? 0),
    protein: Number(formData.get("protein") ?? 0),
    fiber: Number(formData.get("fiber") ?? 0)
  });
  logForm.reset();
  document.getElementById("entry-meal-type").selectedIndex = 0;
});

sectionNav.addEventListener("click", (event) => {
  const target = event.target.closest("[data-view]");
  if (!target) {
    return;
  }
  setView(target.dataset.view);
});

mealPlan.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-plan-entry]");
  const openButton = event.target.closest("[data-open-view]");
  if (addButton) addPlanEntry(addButton.dataset.addPlanEntry);
  if (openButton) setView(openButton.dataset.openView);
});

recipeLibrary?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-add-recipe-entry]");
  if (!target) {
    return;
  }
  addPlanEntry(target.dataset.addRecipeEntry);
  setView("log");
});

weekPlan?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-load-date]");
  if (!target) {
    return;
  }
  state.selectedDate = target.dataset.loadDate;
  dateInput.value = state.selectedDate;
  window.localStorage?.setItem(STORAGE_KEYS.selectedDate, state.selectedDate);
  setView("today");
  void refreshPlan();
});

habitList.addEventListener("click", (event) => {
  const target = event.target.closest("[data-habit-id]");
  if (!target) {
    return;
  }
  toggleHabit(target.dataset.habitId);
});

shoppingList?.addEventListener("change", (event) => {
  const target = event.target.closest("[data-shopping-item]");
  if (!target) {
    return;
  }
  toggleShoppingItem(target.dataset.shoppingItem);
});

logEntries.addEventListener("click", (event) => {
  const target = event.target.closest("[data-remove-entry]");
  if (!target) {
    return;
  }
  removeEntry(target.dataset.removeEntry);
});

jumpWeekButton?.addEventListener("click", () => setView("week"));
refreshDayButton?.addEventListener("click", () => void refreshPlan());
copyShoppingButton?.addEventListener("click", async () => await copyShoppingList());
resetShoppingButton?.addEventListener("click", () => resetShoppingList());
clearLogButton?.addEventListener("click", () => clearEntriesForSelectedDate());
langDeButton?.addEventListener("click", () => setLocale("de"));
langRoButton?.addEventListener("click", () => setLocale("ro"));

hydrateProfileForm();
applyStaticText();
setView(state.currentView);
await refreshPlan();
