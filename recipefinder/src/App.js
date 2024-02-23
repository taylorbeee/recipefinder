import { useState, useCallback, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const api_url = "https://api.spoonacular.com/recipes/findByIngredients"; 
const api_key = "b092758163cf40dbaea8e7b5e9c5c7ff";

// Due date - Feb 25 ------ March 4

// useEffect(() => {
//   // Function to fetch recipes based on ingredients
//   const fetchRecipes = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' with the actual API key from the recipe API
//       const apiKey = 'YOUR_API_KEY';
//       const response = await axios.get(
//         `https://api.example.com/recipes?ingredients=${ingredients.join(',')}&apiKey=${apiKey}`
//       );

//       // Update the recipes state with the fetched data
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

function App() {

const fetchApi = GET => useEffect{

}

const [ recipeData, seRecipeData ] = useState({
  
})

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
