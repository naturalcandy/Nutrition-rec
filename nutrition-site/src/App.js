import './App.css';
import React, { useState } from 'react';
import {SearchSpecification} from './NutriSearch'




function App() {
  return (

    <div className="App">
      <Header1 />
      <RecipeOrResturaunt />
      <FirstButtonMenu />
      <UserInputMacros />
      <SearchSpecification />

    </div>
  );
}

export default App;


const Header1 = () => {
  return (
    <div className="header">
      <div> 
        <h1>
          MacroMeal
        </h1>
        Enter your macro requirements below and let us take care of the work!
      </div>
    </div>
  )
}

const RecipeOrResturaunt = () => {
  return (
    <div>
      <h2>
        I'm looking for...
      </h2>
    </div>
  )
}


const FirstButtonMenu = () => {
  return (
    <div class="firstButtonContainer">
        <button class="homeRecipeButton">Meal Recipes I Can Make!</button>
        <button class="resturauntButton">Meals I Can Find Outside! </button>
    </div>
  )
}

//UI Component that gets bare minimum forms for
//client's desired macro ranges. 
const UserInputMacros = () => {
  return (
    <form class="macroForm">
      <div class="Protein"> 
        <label for="protein-from">Protein (from):</label>
        <input type="text" id="protein-from" name="protein-from" />
        <label for="protein-to">to</label>
        <input type="text" id="protein-to" name="protein-to" />
      </div>
      <div class="Carbs"> 
        <label for="carbs-from">Carbs (from):</label>
        <input type="text" id="carbs-from" name="carbs-from" />
        <label for="carbs-to">to</label>
        <input type="text" id="carbs-to" name="carbs-to" />
      </div>
      <div class="Fat"> 
        <label for="fat-from">Fat (from):</label>
        <input type="text" id="fat-from" name="fat-from" />
        <label for="fat-to">to</label>
        <input type="text" id="fat-to" name="fat-to" />
      </div>
    </form>
  )
}
