import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { makeStyles } from '@material-ui/core/styles';

const FavsIcon = styled(FavoriteBorderIcon)({
  color: "#E38127",
});


function FavIcon() {
  return {
    isFavorite: {
      color: "green",
    },
    notFavorite: {
      color: "red",
    },
  };
}

export default FavIcon;
