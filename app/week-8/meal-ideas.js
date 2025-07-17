'use client';

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

async function fetchMealDetails(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    if (ingredient) {
      setSelectedMealId(null);
      setMealDetails(null);
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  useEffect(() => {
    if (selectedMealId) {
      fetchMealDetails(selectedMealId).then(setMealDetails);
    }
  }, [selectedMealId]);

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${ingredient} (${measure})`);
      }
    }
    return ingredients;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Here are some meal ideas using <span className="capitalize">{ingredient}</span>:
      </h2>

      <div className="space-y-2">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-slate-800 text-white p-4 rounded-md shadow hover:bg-slate-700 transition cursor-pointer"
            onClick={() => setSelectedMealId(meal.idMeal)}
          >
            <h3 className="text-lg font-bold">{meal.strMeal}</h3>

            {selectedMealId === meal.idMeal && mealDetails && (
              <div className="mt-2">
                <h4 className="font-semibold mb-1">Ingredients needed:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {getIngredients(mealDetails).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealIdeas;
