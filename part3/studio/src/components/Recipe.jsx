import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.instagram.com/gabe_kennedy/?hl=en";
   let authorPhoto = "https://images.squarespace-cdn.com/content/v1/6189edeba65e873a7aa4b5fd/9fb42a1c-be9b-452c-b7af-fa9a46db8f84/7291D58E-C9C8-4E95-9B32-4004F129BB61+2.jpg?format=1500w";
   let authorName = "Gabe Kennedy";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Short Ribs", "Onions", "Carrots", "Fresh Herbs", "Red Wine"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Braised Short Ribs</h1>
            <p>Classic braised short ribs in a red wine sauce. The perfect comfort food.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://th.bing.com/th/id/OIP.CqWaJwGVM9PIkyaKesb80wHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7" alt="Plated Red Wine Braised Short Ribs" className=""/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
