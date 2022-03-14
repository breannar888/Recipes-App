import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import Favoritelogo from "../public/iconComponents/favoritelogo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <Card key={recipe.id} sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="194"
          image={recipe.image}
          alt={recipe.name}
        ></CardMedia>
        <CardContent>
          <Typography variant="h6">{recipe.name}</Typography>
          <Typography variant="caption">{recipe.description}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton >
            <FavoriteBorderIcon color="secondary"/>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecipeCard;
