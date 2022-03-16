import React from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase-config";
import style from "../../styles/recipes.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RecipePage = ({ recipe }) => {
  const { name, description, ingredients, image, instructions } = recipe;

  return (
    <div className={style.recipewrapper}>
      <div className={style.topcontainer}>
        <div className={style.title}>
          <h1>{name}</h1>
          <div className={style.fav}>
            <FavoriteBorderIcon fontSize="inherit" color="secondary" />
          </div>
        </div>
        <p className={style.description}>{description}</p>
        <div className={style.profileinfo}>
          <img src={image} alt={name} />
          <div className={style.info}>
            <span>Profile Name</span>
            <div>Recipe Updated Date</div>
          </div>
        </div>
      </div>
      <div className={style.bottomcontainer}>
        <div className={style.recipeimg}>
          <img src={image} alt={name} />
        </div>
        <fieldset className={style.nutrition}>
          <legend className={style.nuttitle}>
            Nutritional Facts <span>(per serving)</span>
          </legend>
          <div className={style.nutdata}>
            <div>
              <p>0</p>
              Calories
            </div>
            <div>
              <p>0</p>
              Protien
            </div>
            <div>
              <p>0</p>
              Carbs
            </div>
            <div>
              <p>0</p>
              Fat
            </div>
          </div>
        </fieldset>
        <div className={style.recipeinfo}>
          <h3>Ingredients:</h3>
          <ul className={style.ingredients}>
            {ingredients
              .toString()
              .split(",")
              .map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
          <h3>Directions:</h3>
          <ol>
            {instructions
              .toString()
              .split(",")
              .map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const id = params.id;
  const recipeSnapshot = await getDoc(doc(db, "recipes", id));
  const recipe = recipeSnapshot.data();
  recipe.id = recipeSnapshot.id;
  return {
    props: {
      recipe,
    },
  };
}

export async function getStaticPaths() {
  const recipeCollection = collection(db, "recipes");
  const recipeSnapshot = await getDocs(recipeCollection);
  const recipes = recipeSnapshot.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });

  const paths = recipes.map((recipe) => ({
    params: {
      id: recipe.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default RecipePage;
