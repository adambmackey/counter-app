import React from 'react'

const Recipe = (props) => {
    const {
        name,
        cookTime, 
        servings, 
        instructions 
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
            <div>
            {instructions}
            </div>
        </div>
    </div>

  )
}

export default Recipe