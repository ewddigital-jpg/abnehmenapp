import test from "node:test";
import assert from "node:assert/strict";
import { buildMealPlan, buildNutritionPlan, buildWeekPlan, calculateTargets } from "../src/planEngine.js";

test("calculateTargets keeps calorie target below maintenance but above floor", () => {
  const result = calculateTargets({
    age: 58,
    sex: "male",
    heightCm: 178,
    weightKg: 112,
    activityLevel: "light",
    goal: "steady"
  });

  assert.ok(result.maintenanceCalories > result.calorieTarget);
  assert.ok(result.calorieTarget >= 1600);
  assert.ok(result.proteinMin < result.proteinMax);
  assert.equal(result.weeklyActivityMinutes, 150);
  assert.equal(result.weightLossGoalPercent, "5-7%");
});

test("buildMealPlan creates a complete day plan with recipes and steps", () => {
  const plan = buildMealPlan({
    age: 58,
    sex: "male",
    heightCm: 178,
    weightKg: 112,
    activityLevel: "light",
    goal: "gentle"
  }, "2026-03-31");

  assert.equal(plan.meals.length, 3);
  assert.ok(plan.snacks.length >= 1);
  assert.ok(plan.totals.calories > 0);
  assert.ok(Math.abs(plan.totals.calorieDelta) < 350);
  assert.ok(plan.meals[0].ingredients.length > 0);
  assert.ok(plan.meals[0].steps.length > 0);
  assert.ok(typeof plan.dailyFocus === "string");
});

test("buildWeekPlan returns seven days and a grouped grocery list", () => {
  const week = buildWeekPlan({
    age: 61,
    sex: "male",
    heightCm: 172,
    weightKg: 118,
    activityLevel: "sedentary",
    goal: "steady",
    likesFish: false
  }, "2026-03-31");

  assert.equal(week.days.length, 7);
  assert.ok(week.days.every((day) => day.plan.meals.length === 3));
  assert.ok(week.groceryList.length > 0);
  assert.ok(week.groceryList.every((group) => group.items.length > 0));
  assert.ok(week.days.every((day) => day.plan.meals.every((meal) => !meal.title.toLowerCase().includes("lachs"))));
});

test("buildNutritionPlan summarizes logs and exposes recipes for the UI", () => {
  const payload = buildNutritionPlan({
    date: "2026-03-31",
    profile: {
      age: 61,
      sex: "male",
      heightCm: 172,
      weightKg: 118,
      activityLevel: "sedentary",
      goal: "steady",
      diagnosedPrediabetes: true,
      familyHistory: true
    },
    entries: [
      {
        label: "Grosses Mittagessen",
        mealType: "Mittagessen",
        calories: 1200,
        protein: 38,
        fiber: 9
      },
      {
        label: "Suesser Snack",
        mealType: "Snack",
        calories: 900,
        protein: 4,
        fiber: 1
      }
    ]
  });

  assert.equal(payload.progress.totals.calories, 2100);
  assert.ok(payload.warnings.length >= 2);
  assert.equal(payload.progress.entries.length, 2);
  assert.ok(payload.recipes.length > 0);
  assert.equal(payload.week.days.length, 7);
  assert.ok(payload.week.groceryList.length > 0);
});
