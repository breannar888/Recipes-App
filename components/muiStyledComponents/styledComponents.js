import React from "react";
import { styled, alpha } from "@mui/system";
import {
  TextField,
  Typography,
  Button,
  Select,
  Input,
  FormControl,
  MenuItem,
  Grid,
  Chip,
  Card,
} from "@mui/material";

//recipe styled components
export const RecipeInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.gray,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.gray,
    },
    "&:hover fieldset": {
      border: `2px solid ${theme.palette.primary.gray}`,
    },
  },
}));

export const RecipeBtn = styled(Button)({
  borderRadius: "42px",
});

export const IngredChip = styled(Chip)({
  backgroundColor: "#FFC700",
  marginRight: "5px",
  marginBottom: "5px",
});

export const InstructionChip = styled(Chip)({
  border: "1px solid #D0D0D0",
  marginRight: "5px",
  marginBottom: "5px",
  justifyContent: "flex-start",
  backgroundColor: "white",
});

export const IngredInput = styled(Input)({
  border: "1px solid #FFC700",
  borderRadius: "40px",
  paddingLeft: "15px",
});

export const InstructInput = styled(Input)({
  border: "1px solid #D0D0D0",
  borderRadius: "40px",
  paddingLeft: "15px",
});

export const ErrorMessage = styled(Typography)({
  maxWidth: "250px",
  color: "red",
});

export const PrimaryTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "8px",
  marginTop: "5px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  "& label.Mui-focused": {
    color: "#5E5E5E",
  },
}));

export const SecondaryTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "8px",
  marginTop: "5px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover fieldset": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  "& label.Mui-focused": {
    color: "#5E5E5E",
  },
}));

export const FormButton = styled(Button)({
  borderRadius: "42px",
  marginBottom: "10px",
  width: "100%",
});

export const LoginBtn = styled(Button)({
  padding: 0,
  textTransform: "none",
  textDecoration: "underline",
});

export const ForgotPassword = styled(Typography)({
  paddingBottom: 10,
  textAlign: "center",
});

export const SignUpBtn = styled(Button)({
  padding: 0,
  textTransform: "none",
  textDecoration: "underline",
  color: "#FFC700",
});
