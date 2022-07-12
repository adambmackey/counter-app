import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  
  const [recipes, setRecipes] = useState(() => { 
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })


  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
   }, [])

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
 }, [recipes])

 

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  const handleRecipeDelete = (id) => {
      setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  return (
      <RecipeContext.Provider value={recipeContextValue}>
         <RecipeList recipes={recipes} />
         <RecipeEdit /> 
      </RecipeContext.Provider>
     
  )


}



const sampleRecipes = [
  {
    id: 1, 
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45', 
    instructions: "1. Put salt on chicken \n 2. Put chicken in oven \n 3. Eat chicken",
    ingredients: [
      {
        id: 1, 
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2, 
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2, 
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45', 
    instructions: "1. Put salt on pork \n 2. Put pork in oven\n 3. Eat pork",
    ingredients: [
      {
        id: 1, 
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2, 
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }

]

export default App;
