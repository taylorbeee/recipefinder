import { useState, useCallback, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

// Due date - Feb 25 ------ March 4

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Function to fetch recipes based on ingredients
    const fetchRecipes = async () => {
      try {
        // Replace 'YOUR_API_KEY' with the actual API key from the recipe API
        const apiKey = "b092758163cf40dbaea8e7b5e9c5c7ff";
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
            ","
          )}&apiKey=${apiKey}`
        );

        // Update the recipes state with the fetched data
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    // Fetch recipes when the component mounts or when ingredients change
    fetchRecipes();
  }, [ingredients]);

  return (
    <div>
      <h1>Recipe Finder</h1>
      <form>
        <label>
          Enter ingredients (comma-separated):
          <input
            type="text"
            value={ingredients.join(",")}
            onChange={(e) => setIngredients(e.target.value.split(","))}
          />
        </label>
        <button type="button" onClick={() => setIngredients([])}>
          Clear Ingredients
        </button>
      </form>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}

<h2>Recipes:</h2>
      <div className="recipes-container">
        <ul>
          {recipes.map((recipe) => (
            <li className="recipe" key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          ))}
        </ul>
      </div>
      <form className="random-draw-form">
        <button>Random Draw</button>
      </form>
    </div>
  );
}

export default App;
