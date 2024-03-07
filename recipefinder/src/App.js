import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [missingIngredients, setMissingIngredients] = useState([]);

  // Function to fetch recipes based on ingredients
  const fetchRecipes = async () => {
    try {
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

  //    // Function to handle recipe click
  // const handleRecipeClick = (recipe) => {
  //   // Set the selected recipe
  //   setSelectedRecipe(recipe);

  // Calculate missing ingredients
  //   const missing = recipe.missedIngredients.map(
  //     (ingredient) => ingredient.name
  //   );
  //   setMissingIngredients(missing);
  // };

  // Fetch recipes when the component mounts or when ingredients change
  useEffect(() => {
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
        <h2>Recipes:</h2>
        <ul>
          {recipes.map((recipe) => (
            <li
              className="recipe"
              key={recipe.id}
              // onClick={() => handleRecipeClick(recipe)}
            >
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          ))}
        </ul>
      </div>
      <form className="random-draw-form">
        <button>Random Draw</button>
      </form>

      {/* Display selected recipe and missing ingredients */}
      {/* {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.title}</h2>
          <p>Missing Ingredients: {missingIngredients.join(', ')}</p>
        </div>
      )} */}
    </div>
  );
}

export default App;
