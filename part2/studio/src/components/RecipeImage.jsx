import recipedata from "./recipe.json"

function RecipeImage() {
  const recipePicture = recipedata.map(info =>
    <div>
      <img src={info.recipeImage} alt={info.name} className="recipeImage"></img>
    </div>
  );
  return recipePicture;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 