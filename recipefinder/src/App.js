import { useState, useCallback, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const api_url = "https://api.spoonacular.com/recipes/findByIngredients";
const api_key = "b092758163cf40dbaea8e7b5e9c5c7ff";



function App() {

const fetchApi = GET => useEffect{

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to React
        </a>
      </header>
    </div>
  );
}

export default App;
