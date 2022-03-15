import React, { useState } from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/system";

const RecipeCard = ({ recipe }) => {
  const [isFav, setisFav] = useState(false);

  const fillisFav = () => {
    setisFav(!isFav);
    console.log(isFav);
  };

  const StyleCard = styled(Card)({
    maxWidth: 300,
    maxHeight: 340,
    borderRadius: 0,
    "&:hover": {
      borderBottom: "2px solid #FFC700",
      borderRight: "2px solid #FFC700",
    },
  });

  return (
    <div>
      <StyleCard key={recipe.id}>
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
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton disableRipple onClick={fillisFav}>
            {isFav ? (
              <FavoriteIcon color="secondary" />
            ) : (
              <FavoriteBorderIcon color="secondary" />
            )}
          </IconButton>
          <Typography>{recipe.cooktime}</Typography>
        </CardActions>
      </StyleCard>
    </div>
  );
};

export default RecipeCard;
