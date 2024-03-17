import recipedata from "./recipe.json";

function IngredientList() {
  
  // const Ingredient = recipedata.map((ingredients) => (
  //   <li>
  //     {Ingredient.index}
  //   </li>
  // ))
  // return (
  //   <div>
  //     <h3>Ingredients</h3>
  //     <ul>
  //       {Ingredient}       
  //     </ul>
  //  </div>
  // );
  return (
    <div>
    <h3>Ingredients</h3>
      {recipedata.map((e) => {
        return (
          <ul>
            {e.ingredients.map((ingredient, index) => {
              return (
                <li key={index}>{ingredient}</li>
              )
            })}
          </ul>
        )
     })}
    </div>
  )
}

export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 