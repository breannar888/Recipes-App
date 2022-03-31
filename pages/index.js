import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { db } from "../utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import RecipeCard from "../components/RecipeCard";
import { Grid } from "@mui/material";
import useAuth from "../contexts/AuthContext";

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
  const { currentUser } = useAuth();
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Recipe App</title>
        </Head>
        <main className={styles.main}>
          <h1>Home</h1>
          <h3>{`The current user is: ${currentUser?.email}`}</h3>
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="flex-start"
          >
            {recipe.map((recipe, x) => (
              <Grid item xs={6} md={3} lg={3} key={x + 1}>
                <RecipeCard key={recipe.id} recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </>
  );
}
