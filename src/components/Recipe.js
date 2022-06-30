import React from 'react'
import IngredientList from './IngredientList'

const Recipe = (props) => {
    const {
        name,
        cookTime, 
        servings, 
        instructions,
        ingredients
        } = props

  return (
    <div>
        <div>
            <h3>{name}</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <div>
            <span>cookTime</span>
            <span>{cookTime}</span>
        </div>
        <div>
            <span>servings</span>
            <span>{servings}</span>
        </div>
        <div>
            <span>instructions</span>
            <div> {instructions} </div>
        </div>
        <div>
            <span>Ingredients</span>
            <div>
                <IngredientList ingredients={ingredients} />  
            </div>
        </div>
    </div>

  )
}

export default Recipe