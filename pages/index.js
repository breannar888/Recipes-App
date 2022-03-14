import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { db } from "../utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipe, setRecipe] = useState([]);
  const recipeCollectionRef = collection(db, "recipes");
  useEffect(() => {
    const getRecipe = async () => {
      const data = await getDocs(recipeCollectionRef);
      setRecipe(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipe();
  }, []);

  console.log(recipe);
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe App</title>
      </Head>
      <main className={styles.main}>
        <h1>Home</h1>
        {recipe.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </main>
    </div>
  );
}
