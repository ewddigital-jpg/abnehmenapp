const ACTIVITY_FACTORS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725
};

const GOAL_DEFICITS = {
  gentle: 300,
  steady: 450
};

const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const MONTH_NAMES = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

const RECIPE_LIBRARY = {
  breakfast: [
    {
      id: "breakfast-skyr-oats",
      mealType: "Frühstück",
      title: "Skyr mit Apfel und Honig",
      tier: "low",
      calories: 360,
      protein: 28,
      fiber: 6,
      prepMinutes: 4,
      cookMinutes: 0,
      difficulty: "leicht",
      servings: 1,
      tags: ["schnell", "eiweiß"],
      why: "Einfach, süß genug ohne Dessert und gut gegen Heißhunger am Vormittag.",
      ingredients: [
        { item: "Skyr", quantity: 250, unit: "g", aisle: "Kühlung" },
        { item: "Apfel", quantity: 1, unit: "Stk", aisle: "Obst und Gemüse" },
        { item: "Haferflocken", quantity: 30, unit: "g", aisle: "Trockenwaren" },
        { item: "Honig", quantity: 8, unit: "g", aisle: "Trockenwaren" }
      ],
      steps: [
        "Skyr in eine Schale geben.",
        "Apfel klein schneiden und darübergeben.",
        "Mit Haferflocken und etwas Honig abschließen."
      ]
    },
    {
      id: "breakfast-egg-bread",
      mealType: "Frühstück",
      title: "Eier mit Tomaten, Gurken und Brot",
      tier: "low",
      calories: 410,
      protein: 27,
      fiber: 7,
      prepMinutes: 6,
      cookMinutes: 8,
      difficulty: "leicht",
      servings: 1,
      tags: ["herzhaft", "klassisch"],
      why: "Herzhaft, vertraut und sättigend ohne kompliziert zu sein.",
      ingredients: [
        { item: "Eier", quantity: 2, unit: "Stk", aisle: "Kühlung" },
        { item: "Brot", quantity: 2, unit: "Scheiben", aisle: "Bäckerei" },
        { item: "Tomaten", quantity: 180, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Gurke", quantity: 150, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Quark", quantity: 100, unit: "g", aisle: "Kühlung" }
      ],
      steps: [
        "Eier kochen oder als Rührei braten.",
        "Tomaten und Gurke aufschneiden.",
        "Mit Brot und Quark servieren."
      ]
    }
  ],
  lunch: [
    {
      id: "lunch-chicken-lentil-bowl",
      mealType: "Mittagessen",
      title: "Putenreis mit Zucchini und Tomaten",
      tier: "mid",
      calories: 560,
      protein: 45,
      fiber: 7,
      prepMinutes: 10,
      cookMinutes: 15,
      difficulty: "leicht",
      servings: 2,
      tags: ["meal-prep", "einfach"],
      why: "Klare Zutaten, gute Sättigung und einfach für zwei Portionen.",
      ingredients: [
        { item: "Putenbrust", quantity: 300, unit: "g", aisle: "Fleisch" },
        { item: "Reis gekocht", quantity: 220, unit: "g", aisle: "Trockenwaren" },
        { item: "Zucchini", quantity: 250, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Tomaten", quantity: 220, unit: "g", aisle: "Obst und Gemüse" }
      ],
      steps: [
        "Putenbrust in Stücke schneiden und anbraten.",
        "Zucchini und Tomaten dazugeben und kurz garen.",
        "Mit gekochtem Reis servieren."
      ]
    },
    {
      id: "lunch-tuna-bean-salad",
      mealType: "Mittagessen",
      title: "Rindfleisch mit Kartoffeln und Gurkensalat",
      tier: "low",
      calories: 540,
      protein: 39,
      fiber: 6,
      prepMinutes: 10,
      cookMinutes: 18,
      difficulty: "leicht",
      servings: 2,
      tags: ["klassisch", "satt"],
      why: "Sehr vertrauter Teller und gut, wenn normales Mittagessen gefragt ist.",
      ingredients: [
        { item: "Rindfleisch", quantity: 280, unit: "g", aisle: "Fleisch" },
        { item: "Kartoffeln", quantity: 500, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Gurke", quantity: 250, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Quark", quantity: 120, unit: "g", aisle: "Kühlung" }
      ],
      steps: [
        "Kartoffeln weich kochen.",
        "Rindfleisch in der Pfanne braten.",
        "Gurke schneiden und mit Quark als einfacher Salat servieren."
      ]
    },
    {
      id: "lunch-tofu-rice-pan",
      mealType: "Mittagessen",
      title: "Putenpfanne mit Süßkartoffeln und Zucchini",
      tier: "mid",
      calories: 590,
      protein: 43,
      fiber: 8,
      prepMinutes: 12,
      cookMinutes: 18,
      difficulty: "leicht",
      servings: 2,
      tags: ["warm", "alltag"],
      why: "Warm, einfach und gut vorzubereiten.",
      ingredients: [
        { item: "Putenbrust", quantity: 320, unit: "g", aisle: "Fleisch" },
        { item: "Süßkartoffeln", quantity: 450, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Zucchini", quantity: 250, unit: "g", aisle: "Obst und Gemüse" }
      ],
      steps: [
        "Süßkartoffeln in Würfel schneiden und garen.",
        "Putenbrust anbraten.",
        "Zucchini kurz mitgaren und alles zusammen servieren."
      ]
    }
  ],
  dinner: [
    {
      id: "dinner-bean-chili",
      mealType: "Abendessen",
      title: "Rinderhack mit Kartoffeln und Zucchini",
      tier: "low",
      calories: 560,
      protein: 39,
      fiber: 7,
      prepMinutes: 10,
      cookMinutes: 18,
      difficulty: "leicht",
      servings: 2,
      tags: ["abend", "klassisch"],
      why: "Deftig genug für den Abend und trotzdem aus einfachen Zutaten.",
      ingredients: [
        { item: "Rinderhack", quantity: 300, unit: "g", aisle: "Fleisch" },
        { item: "Kartoffeln", quantity: 450, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Zucchini", quantity: 250, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Tomaten", quantity: 180, unit: "g", aisle: "Obst und Gemüse" }
      ],
      steps: [
        "Kartoffeln garen.",
        "Rinderhack anbraten.",
        "Zucchini und Tomaten kurz mitgaren und zusammen servieren."
      ]
    },
    {
      id: "dinner-cod-chickpeas",
      mealType: "Abendessen",
      title: "Eierpfanne mit Kartoffeln und Tomaten",
      tier: "low",
      calories: 520,
      protein: 28,
      fiber: 5,
      prepMinutes: 8,
      cookMinutes: 12,
      difficulty: "leicht",
      servings: 2,
      tags: ["einfach", "günstig"],
      why: "Sehr einfach, günstig und auch abends gut verträglich.",
      ingredients: [
        { item: "Eier", quantity: 4, unit: "Stk", aisle: "Kühlung" },
        { item: "Kartoffeln", quantity: 300, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Tomaten", quantity: 220, unit: "g", aisle: "Obst und Gemüse" }
      ],
      steps: [
        "Kartoffeln in Scheiben garen.",
        "Tomaten kurz in der Pfanne erwärmen.",
        "Eier dazugeben und alles stocken lassen."
      ]
    },
    {
      id: "dinner-chicken-stir-fry",
      mealType: "Abendessen",
      title: "Putenblech mit Kartoffeln und Zucchini",
      tier: "high",
      calories: 600,
      protein: 42,
      fiber: 7,
      prepMinutes: 12,
      cookMinutes: 25,
      difficulty: "leicht",
      servings: 3,
      tags: ["ofen", "wenig-abwasch"],
      why: "Ein Blech, wenig Abwasch und alltagstauglich.",
      ingredients: [
        { item: "Putenbrust", quantity: 420, unit: "g", aisle: "Fleisch" },
        { item: "Kartoffeln", quantity: 600, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Zucchini", quantity: 300, unit: "g", aisle: "Obst und Gemüse" },
        { item: "Tomaten", quantity: 250, unit: "g", aisle: "Obst und Gemüse" }
      ],
      steps: [
        "Backofen auf 200 Grad vorheizen.",
        "Kartoffeln, Zucchini und Tomaten schneiden und aufs Blech geben.",
        "Putenstücke dazugeben und alles gar backen."
      ]
    }
  ],
  snack: [
    {
      id: "snack-skyr-berries",
      mealType: "Snack",
      title: "Skyr mit Honig",
      tier: "low",
      calories: 180,
      protein: 18,
      fiber: 0,
      prepMinutes: 1,
      cookMinutes: 0,
      difficulty: "leicht",
      servings: 1,
      tags: ["schnell", "eiweiß"],
      why: "Sehr einfach und besser als schnell etwas Süßes nebenbei.",
      ingredients: [
        { item: "Skyr", quantity: 170, unit: "g", aisle: "Kühlung" },
        { item: "Honig", quantity: 8, unit: "g", aisle: "Trockenwaren" }
      ],
      steps: ["Skyr in eine Schale geben und wenig Honig darübergeben."]
    },
    {
      id: "snack-carrots-hummus",
      mealType: "Snack",
      title: "Quark mit Apfel",
      tier: "low",
      calories: 170,
      protein: 18,
      fiber: 3,
      prepMinutes: 3,
      cookMinutes: 0,
      difficulty: "leicht",
      servings: 1,
      tags: ["einfach", "eiweiß"],
      why: "Macht ruhig satt und passt gut am Nachmittag.",
      ingredients: [
        { item: "Quark", quantity: 150, unit: "g", aisle: "Kühlung" },
        { item: "Apfel", quantity: 1, unit: "Stk", aisle: "Obst und Gemüse" }
      ],
      steps: ["Apfel schneiden und mit Quark essen."]
    }
  ]
};

const DAILY_FOCUS = [
  "Heute keine zuckerhaltigen GetrÃ¤nke.",
  "Nach dem Abendessen 10 bis 15 Minuten spazieren.",
  "Mittag und Abend: halber Teller GemÃ¼se.",
  "Snacks bewusst klein halten und Protein zuerst.",
  "Zum Kaffee nichts SÃ¼ÃŸes nebenbei einbauen.",
  "Heute Wasserflasche sichtbar hinstellen.",
  "Abendessen nicht neben dem Fernseher essen."
];

function round(value) {
  return Math.round(value);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function toNumber(value, fallback) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function normalizeSex(sex) {
  return sex === "female" ? "female" : "male";
}

function normalizeActivity(activityLevel) {
  return ACTIVITY_FACTORS[activityLevel] ? activityLevel : "light";
}

function normalizeGoal(goal) {
  return GOAL_DEFICITS[goal] ? goal : "gentle";
}

function parseDateKey(dateKey) {
  const parsed = new Date(`${dateKey}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function addDays(dateKey, daysToAdd) {
  const base = parseDateKey(dateKey);
  const next = new Date(base);
  next.setDate(next.getDate() + daysToAdd);
  return next.toISOString().slice(0, 10);
}

function formatDateLabel(dateKey) {
  const date = parseDateKey(dateKey);
  return `${DAY_NAMES[date.getDay()]}, ${date.getDate()}. ${MONTH_NAMES[date.getMonth()]}`;
}

function hashKey(value) {
  return String(value)
    .split("")
    .reduce((total, character, index) => total + character.charCodeAt(0) * (index + 11), 0);
}

function rotationIndex(dateKey, salt, length) {
  return hashKey(`${dateKey}:${salt}`) % length;
}

function candidateRecipes(category, preferredTiers, profile) {
  let recipes = RECIPE_LIBRARY[category].filter((recipe) => preferredTiers.includes(recipe.tier));

  if (category === "dinner" && !profile.likesFish) {
    recipes = recipes.filter((recipe) => !recipe.title.toLowerCase().includes("lachs") && !recipe.title.toLowerCase().includes("fisch") && !recipe.title.toLowerCase().includes("kabeljau"));
  }

  return recipes.length ? recipes : RECIPE_LIBRARY[category];
}

function getTierConfig(calorieTarget) {
  if (calorieTarget <= 1700) {
    return {
      breakfast: ["low", "mid"],
      lunch: ["low", "mid"],
      dinner: ["low", "mid"],
      snack: ["low"]
    };
  }

  if (calorieTarget <= 1950) {
    return {
      breakfast: ["mid", "low"],
      lunch: ["mid", "low"],
      dinner: ["mid", "low"],
      snack: ["mid", "low"]
    };
  }

  return {
    breakfast: ["mid", "high"],
    lunch: ["high", "mid"],
    dinner: ["high", "mid"],
    snack: ["mid", "high", "low"]
  };
}

function cloneRecipe(recipe, overrides = {}) {
  return {
    ...recipe,
    ingredients: recipe.ingredients.map((ingredient) => ({ ...ingredient })),
    steps: [...recipe.steps],
    tags: [...recipe.tags],
    ...overrides
  };
}

function pickRecipe(category, dateKey, salt, preferredTiers, profile, excludedIds = []) {
  const pool = candidateRecipes(category, preferredTiers, profile);
  const filteredPool = pool.filter((recipe) => !excludedIds.includes(recipe.id));
  const sourcePool = filteredPool.length ? filteredPool : pool;
  return cloneRecipe(sourcePool[rotationIndex(dateKey, salt, sourcePool.length)]);
}

export function normalizeProfile(input = {}) {
  return {
    name: String(input.name ?? "Papa").trim() || "Papa",
    age: clamp(toNumber(input.age, 46), 18, 90),
    intermittentFasting: Boolean(input.intermittentFasting),
    sex: normalizeSex(input.sex),
    heightCm: clamp(toNumber(input.heightCm, 175), 140, 220),
    weightKg: clamp(toNumber(input.weightKg, 102), 45, 250),
    activityLevel: normalizeActivity(input.activityLevel),
    goal: normalizeGoal(input.goal),
    diagnosedPrediabetes: Boolean(input.diagnosedPrediabetes),
    familyHistory: Boolean(input.familyHistory),
    likesFish: input.likesFish === false ? false : true
  };
}

export function calculateTargets(profileInput = {}) {
  const profile = normalizeProfile(profileInput);
  const heightMeters = profile.heightCm / 100;
  const bmi = profile.weightKg / (heightMeters * heightMeters);
  const bmr = profile.sex === "female"
    ? 10 * profile.weightKg + 6.25 * profile.heightCm - 5 * profile.age - 161
    : 10 * profile.weightKg + 6.25 * profile.heightCm - 5 * profile.age + 5;
  const maintenanceCalories = round(bmr * ACTIVITY_FACTORS[profile.activityLevel]);

  let deficit = GOAL_DEFICITS[profile.goal];
  if (bmi < 25) {
    deficit = 180;
  } else if (bmi >= 35) {
    deficit = Math.min(deficit + 100, 550);
  }

  const calorieFloor = profile.sex === "female" ? 1400 : 1600;
  const calorieTarget = Math.max(calorieFloor, maintenanceCalories - deficit);
  const referenceWeight = 22 * heightMeters * heightMeters;
  const proteinBaseWeight = Math.min(profile.weightKg, referenceWeight + 12);
  const proteinMin = round(proteinBaseWeight * 1.2);
  const proteinMax = round(proteinBaseWeight * 1.6);
  const fiberTarget = calorieTarget >= 2200 ? 35 : 30;
  const waterLiters = Math.max(2.0, Math.min(3.5, Number((profile.weightKg * 0.03).toFixed(1))));

  return {
    profile,
    bmi: Number(bmi.toFixed(1)),
    bmiLabel: bmi >= 35 ? "Adipositas Grad II" : bmi >= 30 ? "Adipositas" : bmi >= 25 ? "Ãœbergewicht" : "unter 25",
    bmr: round(bmr),
    maintenanceCalories,
    calorieTarget,
    calorieDeficit: maintenanceCalories - calorieTarget,
    proteinMin,
    proteinMax,
    fiberTarget,
    waterLiters,
    weeklyActivityMinutes: 150,
    weightLossGoalPercent: "5-7%",
    plateMethod: "Halber Teller GemÃ¼se, Viertel EiweiÃŸ, Viertel stÃ¤rkereiche Beilage.",
    notes: [
      "Wasser oder ungesÃ¼ÃŸter Kaffee/Tee statt Softdrinks.",
      "3 Hauptmahlzeiten plus 1 bis 2 kleine Snacks ist oft alltagstauglicher als stÃ¤ndiges Naschen.",
      "Kurzer Spaziergang nach dem Abendessen ist ein starker kleiner Hebel."
    ]
  };
}

function buildDailyMeals(profile, dateKey) {
  const targets = calculateTargets(profile);
  const tierConfig = getTierConfig(targets.calorieTarget);
  const lunch = pickRecipe("lunch", dateKey, "lunch", tierConfig.lunch, targets.profile);
  const dinner = pickRecipe("dinner", dateKey, "dinner", tierConfig.dinner, targets.profile);
  const snack1 = pickRecipe("snack", dateKey, "snack-a", tierConfig.snack, targets.profile);

  const meals = [
    cloneRecipe(lunch, { mealType: "Mittagessen" }),
    cloneRecipe(dinner, { mealType: "Abendessen" })
  ];

  if (!profile.intermittentFasting) {
    const breakfast = pickRecipe("breakfast", dateKey, "breakfast", tierConfig.breakfast, targets.profile);
    meals.unshift(cloneRecipe(breakfast, { mealType: "Fr\u00fchst\u00fcck" }));
  }

  const snacks = [cloneRecipe(snack1, { mealType: "Snack 1" })];
  const baseCals = meals.reduce((sum, m) => sum + m.calories, snack1.calories);

  if (targets.calorieTarget - baseCals > 150) {
    const snack2 = pickRecipe("snack", dateKey, "snack-b", ["mid", "low", "high"], targets.profile, snacks.map((snack) => snack.id));
    snacks.push(cloneRecipe(snack2, { mealType: `Snack ${snacks.length + 1}` }));
  }

  return { meals, snacks };
}

function summarizeRecipes(recipes) {
  return recipes.reduce(
    (totals, recipe) => ({
      calories: totals.calories + recipe.calories,
      protein: totals.protein + recipe.protein,
      fiber: totals.fiber + recipe.fiber
    }),
    { calories: 0, protein: 0, fiber: 0 }
  );
}

export function buildMealPlan(profileInput = {}, date = new Date().toISOString().slice(0, 10)) {
  const profile = normalizeProfile(profileInput);
  const targets = calculateTargets(profile);
  const { meals, snacks } = buildDailyMeals(profile, date);
  const allRecipes = [...meals, ...snacks];
  const totals = summarizeRecipes(allRecipes);
  const calorieDelta = targets.calorieTarget - totals.calories;
  const dailyFocus = DAILY_FOCUS[rotationIndex(date, "focus", DAILY_FOCUS.length)];

  return {
    date,
    dateLabel: formatDateLabel(date),
    calorieTarget: targets.calorieTarget,
    meals,
    snacks,
    totals: {
      calories: totals.calories,
      protein: totals.protein,
      fiber: totals.fiber,
      calorieDelta
    },
    dailyFocus,
    habits: [
      "Wasser statt Softdrink.",
      "10 bis 15 Minuten spazieren.",
      "GemÃ¼seposition bei Mittag und Abend halten."
    ]
  };
}

function normalizeEntries(entries = []) {
  return entries
    .filter((entry) => entry && typeof entry === "object")
    .map((entry, index) => ({
      id: String(entry.id ?? `${entry.label ?? "meal"}-${index}`),
      label: String(entry.label ?? "Mahlzeit").trim() || "Mahlzeit",
      mealType: String(entry.mealType ?? "Eintrag").trim() || "Eintrag",
      calories: clamp(toNumber(entry.calories, 0), 0, 4000),
      protein: clamp(toNumber(entry.protein, 0), 0, 250),
      fiber: clamp(toNumber(entry.fiber, 0), 0, 80),
      sourceMealId: entry.sourceMealId ?? null,
      loggedAt: entry.loggedAt ?? null
    }));
}

export function summarizeProgress(profileInput = {}, entries = [], date) {
  const targets = calculateTargets(profileInput);
  const normalizedEntries = normalizeEntries(entries);
  const totals = summarizeRecipes(normalizedEntries);
  const remainingCalories = targets.calorieTarget - totals.calories;

  return {
    date,
    entries: normalizedEntries,
    totals,
    remainingCalories,
    remainingProtein: Math.max(0, targets.proteinMin - totals.protein),
    remainingFiber: Math.max(0, targets.fiberTarget - totals.fiber),
    calorieStatus: remainingCalories < -150 ? "over" : remainingCalories < 150 ? "near" : "under"
  };
}

function ingredientKey(ingredient) {
  return `${ingredient.aisle}|${ingredient.item}|${ingredient.unit}`;
}

function buildGroceryList(days) {
  const bucket = new Map();

  for (const day of days) {
    for (const recipe of [...day.plan.meals, ...day.plan.snacks]) {
      for (const ingredient of recipe.ingredients) {
        const key = ingredientKey(ingredient);
        const current = bucket.get(key) ?? {
          aisle: ingredient.aisle,
          item: ingredient.item,
          quantity: 0,
          unit: ingredient.unit,
          usedIn: []
        };

        if (typeof ingredient.quantity === "number") {
          current.quantity += ingredient.quantity;
        }
        current.usedIn.push(recipe.title);
        bucket.set(key, current);
      }
    }
  }

  const groupedMap = new Map();
  for (const ingredient of bucket.values()) {
    const aisleItems = groupedMap.get(ingredient.aisle) ?? [];
    aisleItems.push({
      ...ingredient,
      displayQuantity: `${Number.isInteger(ingredient.quantity) ? ingredient.quantity : ingredient.quantity.toFixed(1)} ${ingredient.unit}`,
      usedIn: Array.from(new Set(ingredient.usedIn)).slice(0, 4)
    });
    groupedMap.set(ingredient.aisle, aisleItems);
  }

  return Array.from(groupedMap.entries())
    .map(([aisle, items]) => ({
      aisle,
      items: items.sort((left, right) => left.item.localeCompare(right.item, "de"))
    }))
    .sort((left, right) => left.aisle.localeCompare(right.aisle, "de"));
}

export function buildWeekPlan(profileInput = {}, startDate = new Date().toISOString().slice(0, 10)) {
  const profile = normalizeProfile(profileInput);
  const days = Array.from({ length: 7 }, (_, index) => {
    const dateKey = addDays(startDate, index);
    const plan = buildMealPlan(profile, dateKey);
    return {
      date: dateKey,
      dateLabel: plan.dateLabel,
      plan,
      summary: `${plan.totals.calories} kcal | ${plan.totals.protein} g Protein Ã‚Â· ${plan.totals.fiber} g Ballaststoffe`
    };
  });

  return {
    startDate,
    days,
    groceryList: buildGroceryList(days)
  };
}

function uniqueRecipesFromWeek(weekPlan) {
  const seen = new Map();

  for (const day of weekPlan.days) {
    for (const recipe of [...day.plan.meals, ...day.plan.snacks]) {
      if (!seen.has(recipe.id)) {
        seen.set(recipe.id, recipe);
      }
    }
  }

  return Array.from(seen.values()).sort((left, right) => left.title.localeCompare(right.title, "de"));
}

function buildWarnings(targets, profile, progress) {
  const warnings = [];

  if (targets.bmi >= 30) {
    warnings.push("Das Gewicht liegt im Bereich Adipositas. Ein Termin fÃ¼r Blutdruck, A1c, NÃ¼chternglukose und Lipide ist sinnvoll.");
  }
  if (profile.diagnosedPrediabetes) {
    warnings.push("Bei bestÃ¤tigter PrÃ¤diabetes bitte den Plan mit Arzt oder ErnÃ¤hrungsberatung abstimmen.");
  }
  if (progress.remainingCalories < -400) {
    warnings.push("Heute liegt der Log deutlich Ã¼ber Ziel. Rest des Tages besser einfach halten: GemÃ¼se, mageres EiweiÃŸ, Wasser.");
  }
  if (profile.familyHistory) {
    warnings.push("Mit Diabetes in der Familie lohnt sich frÃ¼he Kontrolle besonders. Gewicht, Bewegung und Blutwerte jetzt ernst nehmen.");
  }

  return warnings;
}

export function buildNutritionPlan(payload = {}) {
  const profile = normalizeProfile(payload.profile);
  const date = typeof payload.date === "string" && payload.date ? payload.date : new Date().toISOString().slice(0, 10);
  const targets = calculateTargets(profile);
  const today = buildMealPlan(profile, date);
  const progress = summarizeProgress(profile, payload.entries ?? [], date);
  const week = buildWeekPlan(profile, date);
  const warnings = buildWarnings(targets, profile, progress);
  const recipes = uniqueRecipesFromWeek(week);

  return {
    profile,
    targets,
    today,
    progress,
    week,
    recipes,
    warnings,
    guidance: {
      summary: "Die App ist fÃ¼r Diabetes-PrÃ¤vention gedacht, nicht fÃ¼r Diagnose oder Medikamentensteuerung.",
      sourceNotes: [
        "Moderater Gewichtsverlust und mindestens 150 Minuten Bewegung pro Woche sind die stÃ¤rksten Lifestyle-Hebel gegen Typ-2-Diabetes.",
        "Wasser statt Softdrinks und ballaststoffreiche, wenig verarbeitete Mahlzeiten sind fÃ¼r den Alltag ein robuster Standard.",
        "Bei starkem Durst, hÃ¤ufigem Wasserlassen, starker MÃ¼digkeit oder unerklÃ¤rlichem Gewichtsverlust bitte medizinisch abklÃ¤ren lassen."
      ]
    }
  };
}

export const __healthTestables = {
  ACTIVITY_FACTORS,
  GOAL_DEFICITS,
  RECIPE_LIBRARY,
  getTierConfig,
  normalizeEntries,
  summarizeRecipes,
  buildGroceryList,
  formatDateLabel,
  addDays
};


