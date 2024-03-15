import recipedata from "./recipe.json";

function IngredientList() {
  
  const Ingredient = recipedata.map((item) => (
    <li key={item.ingredients}>
      {item.ingredients}
    </li>
  ))
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredient}       
      </ul>
   </div>
  );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 