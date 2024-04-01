import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [ 
      {
         "label": "Dinner Recipes",
         "value": 0      
      }, 
      {
         "label": "Slow Cook Meals",
         "value": 1
      }, 
      {
         "label": "Gabe Kennedy Recipes",
         "value": 2
      }
   ];

   let boardOptions = boards.map() =>
      return ( 
         <option key={index} value={boards.value}>{boards.label}</option> 
         <select>
            {boards.map((each) => {
             return (
                {each.boards.map((boards, index) => {
                   return (
                      
                   )
                 })}
               )
            })}
         </select>
       )

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
