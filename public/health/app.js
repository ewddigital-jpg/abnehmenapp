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
    heroEyebrow: "Mancare simpla si sanatoasa",
    heroTitle: "Sa stii clar in fiecare zi ce te ajuta acum.",
    heroLead: "Obiective zilnice clare, retete simple si lista de cumparaturi. Fara meniuri complicate.",
    heroStep1Title: "Deschide azi",
    heroStep1Copy: "Vezi imediat ce alegere se potriveste astazi.",
    heroStep2Title: "Alege mancarea",
    heroStep2Copy: "Un click adauga masa in ziua de azi.",
    heroStep3Title: "Planifica saptamana",
    heroStep3Copy: "Cumpara cu lista si redu gustarile luate din impuls.",
    heroBadgeToday: "Astazi",
    heroBadgeLog: "Jurnal",
    heroBadgeProfile: "Profil",
    todayEyebrow: "Astazi",
    dateLabel: "Data",
    progressTitle: "Progres calorii",
    navToday: "Astazi",
    navLog: "Jurnal",
    navProfile: "Profil",
    todayTitle: "Ce e bine sa mananc astazi?",
    todayCopy: "Carduri mari, pasi clari si trimitere directa in jurnal.",
    refreshDayButton: "Reincarca ziua",
    weekEyebrow: "Saptamana",
    weekTitle: "Plan saptamanal",
    weekCopy: "Sapte zile dintr-o privire. Asa cumparaturile si pregatirea devin mai simple.",
    recipesEyebrow: "Retete",
    recipesTitle: "Mancaruri simple",
    recipesCopy: "Pasi putini, ingrediente familiare si explicatii clare de ce mancarea ajuta.",
    shopEyebrow: "Cumparaturi",
    shopTitle: "Lista de cumparaturi",
    shopCopy: "Sortata pe zone din magazin, ca sa mergi repede si linistit.",
    copyShoppingButton: "Copiaza lista",
    resetShoppingButton: "Sterge bifele",
    logEyebrow: "Jurnal",
    logTitle: "Ce s-a mancat?",
    logCopy: "Poti prelua mesele direct sau le poti scrie rapid manual.",
    clearLogButton: "Goleste jurnalul de azi",
    entryMealType: "Tip",
    entryLabel: "Nume",
    entryLabelPlaceholder: "de ex. paste la birou",
    entryCalories: "kcal",
    entryProtein: "Proteine (g)",
    entryFiber: "Fibre (g)",
    saveEntryButton: "Salveaza intrarea",
    profileEyebrow: "Profil",
    profileTitle: "Setari",
    profileCopy: "Datele raman doar in acest browser.",
    profileName: "Nume",
    profileAge: "Varsta",
    profileSex: "Sex",
    sexMale: "Barbat",
    sexFemale: "Femeie",
    profileHeight: "Inaltime (cm)",
    profileWeight: "Greutate (kg)",
    profileActivity: "Activitate zilnica",
    activitySedentary: "Mai ales sedentar",
    activityLight: "Putin activ",
    activityModerate: "Activ regulat",
    activityActive: "Foarte activ",
    profileGoal: "Ritmul obiectivului",
    goalGentle: "Bland",
    goalSteady: "Constant",
    profilePrediabetes: "Prediabet confirmat",
    profileFamily: "Diabet in familie",
    profileFish: "Pestele este ok",
    profileIF: "Post intermitent (fara mic dejun)",
    ifWindowNote: "Fereastra de mancat: aprox. 12:00 – 20:00",
    infoTitle: "Lucruri importante",
    infoWarning: "Daca apar sete intensa, urinare frecventa, tulburari de vedere, durere in piept sau scadere inexplicabila in greutate, merita consult medical.",
    infoScope: "Aplicatia ajuta la organizare si rutina, dar nu inlocuieste un diagnostic.",
    infoSources: 'Surse: <a href="https://www.cdc.gov/diabetes/prevention/index.html" target="_blank" rel="noreferrer">CDC Diabetes Prevention</a>, <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-type-2-diabetes/game-plan" target="_blank" rel="noreferrer">NIDDK Game Plan</a>.',
    loadingPlan: "Planul se incarca...",
    planLoadError: "Planul nu a putut fi incarcat.",
    warningOkay: "Nu apare un avertisment urgent din datele introduse. Totusi, controlul regulat ramane important.",
    topRemainingLabel: "Mai este liber azi",
    topRemainingGood: "Daca ramai la sugestii, ziua este bine echilibrata.",
    topRemainingOver: "Pentru restul zilei, alege mese simple si mai usoare.",
    topConsumedLabel: "Deja mancat",
    topConsumedDetail: "din tinta zilnica de {target} kcal",
    topWeekTargetLabel: "Scopul saptamanii",
    topWeekTargetDetail: "{minutes} minute de miscare si rutine calme",
    topFocusLabel: "Important azi",
    topFocusDetail: "Un pas mic este suficient.",
    targetCalorie: "Tinta calorica",
    targetCalorieDetail: "{deficit} kcal sub mentinere",
    targetBmi: "IMC",
    targetProtein: "Proteine",
    targetProteinDetail: "ajuta la satietate si protejeaza masa musculara",
    targetFiber: "Fibre",
    targetFiberDetail: "Apa aproximativ {water} l",
    targetActivity: "Miscare",
    targetActivityDetail: "plus plimbari scurte",
    targetRemaining: "Mai este deschis azi",
    targetRemainingInPlan: "inca esti in plan",
    targetRemainingOverDetail: "azi esti peste tinta",
    focusEyebrow: "Azi fa asa",
    focusPlan: "Plan azi",
    focusProtein: "Proteine",
    focusFiber: "Fibre",
    habitWater: "Apa in loc de suc",
    habitWaterNote: "Astazi fara bauturi dulci.",
    habitWalk: "Plimbare dupa masa",
    habitWalkNote: "Ajung 10 pana la 15 minute.",
    habitVegetables: "Legume la pranz si seara",
    habitVegetablesNote: "Jumatate de farfurie este tinta.",
    mealBenefitTitle: "De ce se potriveste aceasta mancare",
    benefitProtein: "{protein} g proteine ajuta sa ramai satul mai mult timp.",
    benefitFiber: "{fiber} g fibre reduc pofta si ronaitul din impuls.",
    benefitVegetables: "Multe legume fac farfuria mai mare fara sa ridice mult caloriile.",
    benefitQuick: "Este gata in aproximativ {minutes} minute. Asta o face mai usor de urmat.",
    benefitBatch: "Se pot face mai multe portii. Ziua urmatoare devine mai simpla.",
    benefitPortable: "Usor de luat la pachet sau de tinut la indemana.",
    benefitBalanced: "Echilibrat, simplu si bun pentru viata de zi cu zi.",
    eatAndLog: "Mananca acum si bifeaza",
    goToLog: "Mergi la jurnal",
    loadDay: "Deschide aceasta zi",
    addRecipeToLog: "Adauga in jurnal",
    usedInLabel: "pentru",
    copySuccess: "Lista a fost copiata",
    copyFail: "Copierea a esuat",
    logEmpty: "Nu exista inca intrari. Preia o masa din Astazi sau completeaza una manual mai jos.",
    removeEntry: "Sterge",
    logLogged: "Inregistrat",
    logRemaining: "Ramas",
    logPlan: "Plan azi",
    logLoggedDetail: "{protein} g proteine, {fiber} g fibre",
    logRemainingDetail: "Mai sunt deschise {protein} g proteine si {fiber} g fibre",
    logPlanDetail: "{protein} g proteine si {fiber} g fibre in sugestie",
    mealTypeBreakfast: "Mic dejun",
    mealTypeLunch: "Pranz",
    mealTypeDinner: "Cina",
    mealTypeSnack: "Gustare",
    difficultyEasy: "Usor",
    difficultyMedium: "Mediu",
    difficultyHard: "Putin mai complex",
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
    "breakfast-skyr-oats": "Skyr cu mar si miere",
    "breakfast-egg-bread": "Oua cu rosii, castraveti si paine",
    "breakfast-overnight-oats": "Quark cu banana si miere",
    "breakfast-quark-pear": "Omleta cu cartofi si rosii",
    "lunch-chicken-lentil-bowl": "Curcan cu orez, dovlecel si rosii",
    "lunch-tuna-bean-salad": "Vita cu cartofi si salata de castraveti",
    "lunch-tofu-rice-pan": "Tigaie de curcan cu cartofi dulci si dovlecel",
    "lunch-turkey-quinoa": "Vita cu orez si sfecla rosie",
    "dinner-bean-chili": "Carne tocata de vita cu cartofi si dovlecel",
    "dinner-salmon-potatoes": "Somon cu orez si salata de castraveti",
    "dinner-cod-chickpeas": "Tigaie cu oua, cartofi si rosii",
    "dinner-chicken-stir-fry": "Curcan la tava cu cartofi si dovlecel",
    "dinner-turkey-tray": "Vita cu cartofi dulci si sfecla rosie",
    "snack-skyr-berries": "Skyr cu miere",
    "snack-carrots-hummus": "Quark cu mar",
    "snack-apple-almonds": "Banana cu skyr",
    "snack-cottage-pear": "Castravete si ou",
    "snack-kefir-walnuts": "Mar cu quark si miere"
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
    "Einfach, süß genug ohne Dessert und gut gegen Heißhunger am Vormittag.": "Simplu, destul de dulce fara desert si bun impotriva poftei din cursul diminetii.",
    "Herzhaft, vertraut und sättigend ohne kompliziert zu sein.": "Satios, familiar si consistent fara sa fie complicat.",
    "Schnell gemacht und angenehm, wenn morgens wenig Zeit da ist.": "Se face repede si este potrivit cand dimineata este putin timp.",
    "Fühlt sich wie normales Essen an und hält lange satt.": "Se simte ca mancare normala si tine bine de foame.",
    "Klare Zutaten, gute Sättigung und einfach für zwei Portionen.": "Ingrediente clare, satietate buna si usor de facut pentru doua portii.",
    "Sehr vertrauter Teller und gut, wenn normales Mittagessen gefragt ist.": "O farfurie foarte familiara si buna cand vrei un pranz normal.",
    "Warm, einfach und gut vorzubereiten.": "Calda, simpla si buna de pregatit dinainte.",
    "Deftig, aber sauber aufgebaut und ohne schwere Sauce.": "Consistenta, dar bine echilibrata si fara sos greu.",
    "Deftig genug für den Abend und trotzdem aus einfachen Zutaten.": "Destul de consistenta pentru seara si totusi din ingrediente simple.",
    "Wenn Fisch okay ist: leichter Teller mit klarer Struktur.": "Daca pestele este ok: o farfurie usoara si bine structurata.",
    "Sehr einfach, günstig und auch abends gut verträglich.": "Foarte simpla, ieftina si usor de tolerat seara.",
    "Ein Blech, wenig Abwasch und alltagstauglich.": "O singura tava, putin de spalat si buna pentru fiecare zi.",
    "Sättigend, ohne komplizierte Zutaten oder Soßen.": "Satioasa, fara ingrediente complicate sau sosuri grele.",
    "Sehr einfach und besser als schnell etwas Süßes nebenbei.": "Foarte simplu si mai bun decat sa iei repede ceva dulce.",
    "Macht ruhig satt und passt gut am Nachmittag.": "Satura linistit si merge bine dupa-amiaza.",
    "Gut, wenn etwas Süßes gewünscht ist, aber der Snack einfach bleiben soll.": "Bun cand vrei ceva dulce, dar gustarea trebuie sa ramana simpla.",
    "Für salzigen Hunger oft besser als Brot oder Gebäck.": "Pentru pofta de ceva sarat este adesea mai bun decat painea sau patiseria.",
    "Schmeckt vertraut und bleibt trotzdem ein kontrollierter Snack.": "Are gust familiar si ramane totusi o gustare controlata.",
    "Skyr in eine Schale geben.": "Pune skyrul intr-un bol.",
    "Apfel klein schneiden und darübergeben.": "Taie marul marunt si pune-l deasupra.",
    "Mit Haferflocken und etwas Honig abschließen.": "Adauga la final fulgii de ovaz si putina miere.",
    "Eier kochen oder als Rührei braten.": "Fierbe ouale sau fa-le omleta.",
    "Tomaten und Gurke aufschneiden.": "Taie rosiile si castravetele.",
    "Mit Brot und Quark servieren.": "Serveste cu paine si quark.",
    "Quark in eine Schale geben.": "Pune quarkul intr-un bol.",
    "Banane in Scheiben schneiden und darüberlegen.": "Taie banana felii si pune-o deasupra.",
    "Mit Haferflocken und wenig Honig abschließen.": "Adauga la final fulgii de ovaz si putina miere.",
    "Kartoffeln vorkochen oder vom Vortag verwenden.": "Fierbe cartofii dinainte sau foloseste cartofi ramasi de ieri.",
    "Tomaten schneiden und kurz in der Pfanne erwärmen.": "Taie rosiile si incalzeste-le scurt in tigaie.",
    "Eier dazugeben und alles als Rührei fertig garen.": "Adauga ouale si termina totul ca omleta.",
    "Putenbrust in Stücke schneiden und anbraten.": "Taie pieptul de curcan bucati si rumeneste-l.",
    "Zucchini und Tomaten dazugeben und kurz garen.": "Adauga dovlecelul si rosiile si gateste-le scurt.",
    "Mit gekochtem Reis servieren.": "Serveste cu orez gatit.",
    "Kartoffeln weich kochen.": "Fierbe cartofii pana devin moi.",
    "Rindfleisch in der Pfanne braten.": "Prajeste carnea de vita in tigaie.",
    "Gurke schneiden und mit Quark als einfacher Salat servieren.": "Taie castravetele si serveste-l cu quark ca salata simpla.",
    "Süßkartoffeln in Würfel schneiden und garen.": "Taie cartofii dulci cuburi si gateste-i.",
    "Putenbrust anbraten.": "Rumeneste pieptul de curcan.",
    "Zucchini kurz mitgaren und alles zusammen servieren.": "Gateste scurt si dovlecelul si serveste totul impreuna.",
    "Rindfleisch anbraten.": "Rumeneste carnea de vita.",
    "Reis erwärmen.": "Incalzeste orezul.",
    "Rote Bete und Gurke dazugeben und alles zusammen servieren.": "Adauga sfecla rosie si castravetele si serveste totul impreuna.",
    "Kartoffeln garen.": "Gateste cartofii.",
    "Rinderhack anbraten.": "Rumeneste carnea tocata de vita.",
    "Zucchini und Tomaten kurz mitgaren und zusammen servieren.": "Gateste scurt dovlecelul si rosiile si serveste totul impreuna.",
    "Lachs in der Pfanne oder im Ofen garen.": "Gateste somonul in tigaie sau la cuptor.",
    "Gurke und Tomaten schneiden und als Salat dazugeben.": "Taie castravetele si rosiile si adauga-le ca salata.",
    "Kartoffeln in Scheiben garen.": "Gateste cartofii taiati felii.",
    "Eier dazugeben und alles stocken lassen.": "Adauga ouale si lasa totul sa se lege.",
    "Kartoffeln, Zucchini und Tomaten schneiden und aufs Blech geben.": "Taie cartofii, dovlecelul si rosiile si pune-le pe tava.",
    "Putenstücke dazugeben und alles gar backen.": "Adauga bucatile de curcan si coace totul pana este gata.",
    "Süßkartoffeln garen.": "Gateste cartofii dulci.",
    "Skyr in eine Schale geben und wenig Honig darübergeben.": "Pune skyrul intr-un bol si adauga putina miere.",
    "Apfel schneiden und mit Quark essen.": "Taie marul si mananca-l cu quark.",
    "Banane mit Skyr zusammen essen.": "Mananca banana impreuna cu skyrul.",
    "Ei kochen, Gurke schneiden und beides zusammen essen.": "Fierbe oul, taie castravetele si mananca-le impreuna.",
    "Apfel schneiden, mit Quark anrichten und wenig Honig darübergeben.": "Taie marul, serveste-l cu quark si adauga putina miere.",
    "Macht satt, ist schnell gebaut und startet ohne Zuckerabsturz.": "Tine bine de foame, se face repede si evita pornirea zilei cu pofta de dulce.",
    "Schmeckt vertraut, hält lange satt und fühlt sich nicht nach Diät an.": "Are gust familiar, tine bine de foame si nu se simte ca o dieta.",
    "Kann am Vorabend vorbereitet werden und spart morgens Energie.": "Se poate pregati seara si economiseste energie dimineata.",
    "Cremig, einfach und gut für einen ruhigen Start ohne süßen Snack danach.": "Cremos, simplu si bun pentru un inceput linistit fara pofta de dulce dupa aceea.",
    "Warm, vertraut und gut fuer Mittag oder als Restenbox am naechsten Tag.": "Cald, familiar si bun la pranz sau pentru portia ramasa a doua zi.",
    "Schmeckt wie normales Alltagsessen und braucht fast keine Kuechenarbeit.": "Are gust de mancare normala de zi cu zi si cere foarte putin efort in bucatarie.",
    "Einfach fuer zwei Portionen und gut zum Mitnehmen.": "Usor de facut pentru doua portii si bun de luat la pachet.",
    "Gute Struktur fuer Tage mit mehr Hunger, aber ohne Fast-Food-Charakter.": "Bun pentru zilele cu mai multa foame, fara sa semene cu fast-food.",
    "Erinnert an Hausmannskost, macht satt und gibt oft noch eine zweite Portion.": "Aduce a mancare de casa, satura bine si lasa des si a doua portie.",
    "Klarer Telleraufbau und angenehm vertrauter Geschmack.": "Farfurie clara si gust familiar, usor de acceptat.",
    "Leichtes Abendessen mit viel Eiweiss.": "Cina usoara, cu multe proteine.",
    "Warm, deftig genug fuer den Abend und trotzdem leichter als Take-away.": "Calda, destul de consistenta pentru seara si totusi mai usoara decat take-away.",
    "Ein Blech, wenig Abwasch und ein Teller, der vertraut wirkt.": "O singura tava, putin de spalat si o farfurie care pare familiara.",
    "Guter Standard gegen Sueshunger.": "O alegere buna impotriva poftei de dulce.",
    "Hilft besonders am Nachmittag statt salzigen Snacks.": "Ajuta mai ales dupa-amiaza in locul gustarilor sarate.",
    "Sehr einfach für unterwegs oder das Büro.": "Foarte simplu pentru drum sau birou.",
    "Kombiniert Obst mit Eiweiß und ist besser sättigend als nur Obst.": "Combina fructul cu proteine si satura mai bine decat fructul singur.",
    "Wenn der Hunger groesser ist, aber es trotzdem einfach bleiben soll.": "Cand foamea este mai mare, dar vrei sa ramana ceva simplu.",
    "Skyr in eine Schüssel geben.": "Pune skyrul intr-un bol.",
    "Haferflocken und Leinsamen darüber streuen.": "Presara deasupra fulgii de ovaz si semintele de in.",
    "Beeren draufgeben und direkt essen.": "Adauga fructele de padure si mananca imediat.",
    "Eier 7 bis 8 Minuten kochen oder als Rührei braten.": "Fierbe ouale 7-8 minute sau fa-le omleta.",
    "Tomaten und Gurke aufschneiden.": "Taie rosiile si castravetele.",
    "Mit Roggenbrot und Magerquark servieren.": "Serveste cu paine de secara si quark slab.",
    "Haferflocken, Joghurt und Milch verruehren.": "Amesteca fulgii de ovaz cu iaurtul si laptele.",
    "Apfel wuerfeln und mit Zimt unterheben.": "Taie marul cuburi si amesteca-l cu scortisoara.",
    "Ueber Nacht kalt stellen oder direkt 10 Minuten quellen lassen.": "Lasa peste noapte la rece sau asteapta 10 minute sa se inmoaie.",
    "Quark in ein Glas oder eine Schale geben.": "Pune quarkul intr-un pahar sau bol.",
    "Birne klein schneiden und darauf verteilen.": "Taie para marunt si pune-o deasupra.",
    "Mit Walnüssen und Haferflocken abschließen.": "Completeaza cu nuci si fulgi de ovaz.",
    "Poulet in Streifen schneiden und anbraten.": "Taie puiul fasii si rumeneste-l.",
    "Brokkoli und Karotten kurz garen.": "Gateste scurt broccoli si morcovii.",
    "Mit Linsen und Reis in Schuesseln verteilen und mit Joghurt servieren.": "Pune in boluri cu linte si orez si serveste cu iaurt.",
    "Thunfisch und Bohnen abtropfen.": "Scurge tonul si fasolea.",
    "Salat, Tomaten und Gurke schneiden.": "Taie salata, rosiile si castravetele.",
    "Alles mit etwas Olivenöl und Pfeffer mischen.": "Amesteca totul cu putin ulei de masline si piper.",
    "Tofu wuerfeln und knusprig anbraten.": "Taie tofu cuburi si rumeneste-l pana devine crocant.",
    "Gemüse in der gleichen Pfanne kurz garen.": "Gateste rapid legumele in aceeasi tigaie.",
    "Reis und Sojasauce zugeben und alles warm schwenken.": "Adauga orezul si sosul de soia si amesteca totul la cald.",
    "Ofen auf 200 Grad vorheizen.": "Preincalzeste cuptorul la 200 de grade.",
    "Gemüse schneiden, mit wenig Öl mischen und aufs Blech geben.": "Taie legumele, amesteca-le cu putin ulei si pune-le pe tava.",
    "Fleisch anbraten oder mitgaren, dann mit Quinoa und wenig Feta servieren.": "Rumeste carnea sau gateste-o impreuna, apoi serveste cu quinoa si putina feta.",
    "Zwiebel und Peperoni schneiden und anschwitzen.": "Taie ceapa si ardeiul si caleste-le usor.",
    "Bohnen, Mais und Tomaten zugeben.": "Adauga fasolea, porumbul si rosiile.",
    "15 Minuten kochen lassen und mit Joghurt servieren.": "Lasa la fiert 15 minute si serveste cu iaurt.",
    "Kartoffeln weich kochen oder im Ofen garen.": "Fierbe cartofii pana devin moi sau coace-i in cuptor.",
    "Lachs in der Pfanne oder im Ofen garen.": "Gateste somonul in tigaie sau la cuptor.",
    "Brokkoli daempfen und alles mit Zitronensaft servieren.": "Fierbe broccoli la abur si serveste totul cu suc de lamaie.",
    "Fisch wuerzen und sanft anbraten.": "Asezoneaza pestele si rumeneste-l usor.",
    "Zucchetti und Tomaten kurz in der Pfanne garen.": "Gateste rapid dovlecelul si rosiile in tigaie.",
    "Kichererbsen warm machen und alles zusammen servieren.": "Incalzeste nautul si serveste totul impreuna.",
    "Wok-Gemüse und etwas Ingwer zugeben.": "Adauga legumele pentru wok si putin ghimbir.",
    "Mit Reis und Sojasauce fertigstellen.": "Termina mancarea cu orez si sos de soia.",
    "Backofen auf 200 Grad vorheizen.": "Preincalzeste cuptorul la 200 de grade.",
    "Putenstuecke dazugeben und 25 Minuten backen.": "Adauga bucatile de curcan si coace 25 de minute.",
    "Beides zusammen in eine Schale geben und essen.": "Pune-le impreuna intr-un bol si mananca.",
    "Karotten schneiden und mit Hummus essen.": "Taie morcovii si mananca-i cu hummus.",
    "Apfel und eine kleine Portion Mandeln mitnehmen.": "Ia cu tine un mar si o portie mica de migdale.",
    "Birne schneiden und mit Hüttenkäse essen.": "Taie para si mananc-o cu branza cottage.",
    "Kefir trinken und Walnüsse dazu essen.": "Bea chefirul si mananca alaturi nucile.",
    "Heute keine zuckerhaltigen Getraenke.": "Astazi fara bauturi cu zahar.",
    "Nach dem Abendessen 10 bis 15 Minuten spazieren.": "Dupa cina, plimbare 10-15 minute.",
    "Mittag und Abend: halber Teller Gemuese.": "La pranz si seara: jumatate de farfurie cu legume.",
    "Snacks bewusst klein halten und Protein zuerst.": "Pastreaza gustarile mici si incepe cu proteina.",
    "Zum Kaffee nichts Sueses nebenbei einbauen.": "La cafea, fara ceva dulce pe langa.",
    "Heute Wasserflasche sichtbar hinstellen.": "Tine sticla de apa la vedere astazi.",
    "Abendessen nicht neben dem Fernseher essen.": "Nu manca cina in fata televizorului.",
    "Halber Teller Gemuese, Viertel Eiweiss, Viertel staerkereiche Beilage.": "Jumatate de farfurie legume, un sfert proteina, un sfert garnitura cu amidon.",
    "Wasser oder ungesuesster Kaffee/Tee statt Softdrinks.": "Apa sau cafea/ceai neindulcit in loc de bauturi dulci.",
    "3 Hauptmahlzeiten plus 1 bis 2 kleine Snacks ist oft alltagstauglicher als staendiges Naschen.": "3 mese principale plus 1-2 gustari mici sunt adesea mai usor de urmat decat rontaitul continuu.",
    "Kurzer Spaziergang nach dem Abendessen ist ein starker kleiner Hebel.": "O plimbare scurta dupa cina este un obicei mic cu efect mare.",
    "Die App ist fuer Diabetes-Praevention gedacht, nicht fuer Diagnose oder Medikamentensteuerung.": "Aplicatia este pentru prevenirea diabetului, nu pentru diagnostic sau ajustarea medicatiei.",
    "Moderater Gewichtsverlust und mindestens 150 Minuten Bewegung pro Woche sind die staerksten Lifestyle-Hebel gegen Typ-2-Diabetes.": "Scaderea moderata in greutate si cel putin 150 de minute de miscare pe saptamana sunt cele mai puternice obiceiuri impotriva diabetului de tip 2.",
    "Wasser statt Softdrinks und ballaststoffreiche, wenig verarbeitete Mahlzeiten sind fuer den Alltag ein robuster Standard.": "Apa in loc de suc si mesele bogate in fibre, putin procesate, sunt o baza solida pentru fiecare zi.",
    "Bei starkem Durst, haeufigem Wasserlassen, starker Muede oder unerklaerlichem Gewichtsverlust bitte medizinisch abklaeren lassen.": "Daca apar sete intensa, urinare frecventa, oboseala puternica sau scadere inexplicabila in greutate, cere un consult medical.",
    "Das Gewicht liegt im Bereich Adipositas. Ein Termin fuer Blutdruck, A1c, Nuechternglukose und Lipide ist sinnvoll.": "Greutatea este in zona de obezitate. Merita o programare pentru tensiune, A1c, glicemie a jeun si lipide.",
    "Bei bestaetigter Praediabetes bitte den Plan mit Arzt oder Ernaehrungsberatung abstimmen.": "Daca prediabetul este confirmat, potriveste planul cu medicul sau cu un nutritionist.",
    "Heute liegt der Log deutlich ueber Ziel. Rest des Tages besser einfach halten: Gemuese, mageres Eiweiss, Wasser.": "Astazi jurnalul este clar peste tinta. Pentru restul zilei, mergi pe ceva simplu: legume, proteina slaba, apa.",
    "Mit Diabetes in der Familie lohnt sich fruehe Kontrolle besonders. Gewicht, Bewegung und Blutwerte jetzt ernst nehmen.": "Cand exista diabet in familie, controalele timpurii merita si mai mult. Greutatea, miscarea si analizele trebuie luate in serios acum."
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
  const response = await fetch("/api/nutrition-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ profile: state.profile, date: state.selectedDate, entries: currentEntries() })
  });
  if (!response.ok) {
    throw new Error(text("planLoadError"));
  }
  return response.json();
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
