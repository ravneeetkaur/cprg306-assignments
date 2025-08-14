import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        console.log(response.status);
      }
      const rawdata = await response.json();
      setMeals(rawdata.meals);
    } catch (error) {
      console.log(error);
    }
  }

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals || []);
    } else {
      setMeals([]);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  let content;
  if (!ingredient) {
    content = (
      <p className="text-center text-lg italic">
        Select an item to explore meal inspirations
      </p>
    );
  } else if (meals.length > 0) {
    content = (
      <div>
        <p className="text-center text-lg mb-3 font-medium">
          Meal ideas using <span className="text-teal-300">{ingredient}</span>:
        </p>
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="mb-3 p-3 bg-teal-700 rounded-lg hover:bg-teal-600 hover:scale-[1.02] transition-all duration-200 cursor-pointer flex items-center"
          >
            {meal.strMealThumb && (
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-12 h-12 mr-3 rounded shadow-sm"
              />
            )}
            <span>{meal.strMeal}</span>
          </div>
        ))}
      </div>
    );
  } else {
    content = (
      <p className="text-center text-lg">
        No meal ideas found for{" "}
        <span className="text-teal-300">{ingredient}</span>
      </p>
    );
  }

  return (
    <div className="flex-1 p-5 bg-teal-800 rounded-xl shadow-lg text-white">
      <header className="text-2xl font-bold mb-5 text-center tracking-wide">
        Meal Ideas
      </header>
      {content}
    </div>
  );
}
