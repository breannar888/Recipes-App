import React, { useState } from "react";
import { Typography, FormControl, Grid } from "@mui/material";
import style from "../styles/recipeform.module.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  RecipeInput,
  RecipeBtn,
  IngredChip,
  InstructionChip,
  IngredInput,
  InstructInput,
  ErrorMessage,
} from "./muiStyledComponents/styledComponents";
import NumberInput from "./NumberInput";
import SelectCategory from "./SelectCategory";

const AddRecipeForm = () => {
  const [ingredients, setIngred] = useState([]);
  const [currIngred, setCurrIngred] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [currInst, setCurrInst] = useState("");

  const recipeSchema = Yup.object().shape({
    name: Yup.string().required("Recipe Name is required"),
    image: Yup.string().required("Image required"),
    description: Yup.string().required("Description is required"),
    cooktime: Yup.string().required("Cooktime required"),
    servings: Yup.number().required("Servings is required").min(1),
    preptime: Yup.number().required("Prep Time is required").min(0),
    //category: Yup.string().required("Category is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(recipeSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleKeyUp = (e, inputType) => {
    if (e.keyCode == 13 && inputType == "ingred") {
      if (ingredients.length >= 30) {
        alert("No more ingredients can be added!");
      } else {
        setIngred((oldState) => [...oldState, e.target.value]);
        setCurrIngred("");
      }
    } else if (e.keyCode == 13 && inputType == "instruct") {
      if (instructions.length >= 20) {
        alert("No more instructions can be added!");
      } else {
        setInstructions((oldState) => [...oldState, e.target.value]);
        setCurrInst("");
      }
    }
  };

  const handleChange = (e, inputType) => {
    if (inputType == "ingred") {
      setCurrIngred(e.target.value);
    } else if (inputType == "instruct") {
      setCurrInst(e.target.value);
    }
  };

  const handleDelete = (index, inputType) => {
    if (inputType == "ingred") {
      let arr = [...ingredients];
      arr.splice(index, 1);
      setIngred(arr);
    } else if (inputType == "instruct") {
      let arr = [...instructions];
      arr.splice(index, 1);
      setInstructions(arr);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      container
      spacing={4}
      justifyContent="space-between"
      sx={{ padding: "2%" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className={style.Textfieldnoborder}>
              <Typography>Recipe Name</Typography>
              <RecipeInput
                id="recipeName"
                name="recipeName"
                {...register("name")}
                error={errors.name ? true : false}
                fullWidth
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.name?.message}
              </ErrorMessage>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={style.Textfieldnoborder}>
              <Typography>Image</Typography>
              <RecipeInput
                id="recipeImage"
                name="recipeImage"
                {...register("image")}
                error={errors.image ? true : false}
                fullWidth
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.image?.message}
              </ErrorMessage>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className={style.Textfieldnoborder}>
              <Typography>Description</Typography>
              <RecipeInput
                id="recipeDesc"
                name="recipeDesc"
                {...register("description")}
                error={errors.description ? true : false}
                fullWidth
                multiline
                rows={4}
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.description?.message}
              </ErrorMessage>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={style.Textfieldnoborder}>
              <Typography>Ingredients</Typography>
              {ingredients.map((item, index) => (
                <IngredChip
                  size="medium"
                  onDelete={() => {
                    handleDelete(index, "ingred");
                  }}
                  label={item}
                  key={index}
                />
              ))}
              <IngredInput
                id="ingred"
                name="ingred"
                {...register("ingredient")}
                error={errors.ingredient ? true : false}
                placeholder="...."
                disableUnderline={true}
                value={currIngred}
                onChange={(e) => {
                  handleChange(e, "ingred");
                }}
                onKeyDown={(e) => {
                  handleKeyUp(e, "ingred");
                }}
                inputProps={{ maxLength: 35 }}
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.ingredient?.message}
              </ErrorMessage>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Typography>Instructions</Typography>
              {instructions.map((item, index) => (
                <>
                  <InstructionChip
                    size="medium"
                    onDelete={() => {
                      handleDelete(index, "instruct");
                    }}
                    label={
                      <Typography>
                        {index + 1}. {item}
                      </Typography>
                    }
                    key={index}
                  />
                </>
              ))}
              <InstructInput
                id="instructions"
                name="instruct"
                {...register("instruction")}
                error={errors.instruction ? true : false}
                placeholder="...."
                disableUnderline={true}
                value={currInst}
                onChange={(e) => {
                  handleChange(e, "instruct");
                }}
                onKeyDown={(e) => {
                  handleKeyUp(e, "instruct");
                }}
                inputProps={{ maxLength: 100 }}
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.instruction?.message}
              </ErrorMessage>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <div className={style.Textfieldnoborder}>
              <Typography>Cook Time:</Typography>
              <NumberInput
                control={control}
                name="cooktime"
                error={errors.cooktime ? true : false}
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.cooktime?.message}
              </ErrorMessage>
            </div>
          </Grid>
          <Grid item>
            <div className={style.Textfieldnoborder}>
              <Typography>Servings:</Typography>
              <NumberInput
                control={control}
                name="servings"
                error={errors.servings ? true : false}
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.servings?.message}
              </ErrorMessage>
            </div>
          </Grid>
          <Grid item>
            <div className={style.Textfieldnoborder}>
              <Typography>Category</Typography>
              <SelectCategory />
            </div>
          </Grid>
          <Grid item>
            <div className={style.Textfieldnoborder}>
              <Typography>Prep Time:</Typography>
              <NumberInput
                control={control}
                name="preptime"
                error={errors.preptime ? true : false}
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.preptime?.message}
              </ErrorMessage>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <RecipeBtn
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              fullWidth
            >
              Submit
            </RecipeBtn>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <RecipeBtn variant="outlined" fullWidth>
              Cancel
            </RecipeBtn>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddRecipeForm;
