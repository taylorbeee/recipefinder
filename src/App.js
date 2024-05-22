import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // Function to fetch recipes based on ingredients
  const fetchRecipes = async () => {
    try {
      const apiKey = "b092758163cf40dbaea8e7b5e9c5c7ff";
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
          ","
        )}&apiKey=${apiKey}`
      );

      // Update the recipes state with fetched data
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [ingredients]);

  return (
    <div>
      <h1>Try New Recipes From Ingredients On Hand</h1>
      <form>
        <label>
          Enter Ingredients (separated by comma):
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
        <h2>Recipe Ideas:</h2>
        <ul>
          {recipes.map((recipe) => (
            <li className="recipe" key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
