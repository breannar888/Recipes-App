import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";
import Favoritelogo from "../public/iconComponents/favoritelogo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/system";
import Link from "next/link";

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
  });

  const StyleBox = styled(Box)({
    borderBottom: "2px solid transparent",
    borderRight: "2px solid transparent",
    maxWidth: 300,
    maxHeight: 350,
    "&:hover": {
      borderBottom: "2px solid #FFC700",
      borderRight: "2px solid #FFC700",
    },
  });

  return (
    <StyleBox>
      <StyleCard key={recipe.id}>
        <Link href={"/recipes/" + recipe.id} key={recipe.id}>
          <CardMedia
            sx={{ cursor: "pointer" }}
            component="img"
            height="194"
            image={recipe.image}
            alt={recipe.name}
          ></CardMedia>
        </Link>
        <CardContent>
          <Link href={"/recipes/" + recipe.id} key={recipe.id}>
            <Typography
              sx={{
                width: "fit-content",
                cursor: "pointer",
                "&:active": {
                  color: "#6C6C6C",
                },
              }}
              variant="h6"
            >
              {recipe.name}
            </Typography>
          </Link>
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
    </StyleBox>
  );
};

export default RecipeCard;
