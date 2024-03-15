import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map(info => (
    <h1> {info.name}</h1>
  ));
  return recipeName;
  };

export default RecipeName;

//import return the name of the recipe as a level 1 header