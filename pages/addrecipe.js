import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import AddRecipeForm from "../components/AddRecipeForm";
import Test from "../components/Test";

function Recipe() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Add Your Recipe!</h1>
        <AddRecipeForm />
      </main>
    </div>
  );
}

export default Recipe;
