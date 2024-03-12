import React from 'react';
import styles from './Description.module.css';
import {AiFillInstagram} from "react-icons/ai";



function RecipeAuthor() {

    let authorLink = "https://www.instagram.com/gabe_kennedy/?hl=en";
    let authorPhoto = "https://images.squarespace-cdn.com/content/v1/6189edeba65e873a7aa4b5fd/9fb42a1c-be9b-452c-b7af-fa9a46db8f84/7291D58E-C9C8-4E95-9B32-4004F129BB61+2.jpg?format=1500w";
    let authorName = "Gabe Kennedy";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} width={400} height={500}alt = "Gabe Kennedy - Chef, Founder, Explorer" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink} className={styles.instagram}> <AiFillInstagram /> </a>
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Braise Short Ribs</h1>
                    <p>Classic braised short ribs in a red wine sauce. Perfect comfort food.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;