import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Card,
  Button,
  FormControl,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import style from "../styles/signup.module.css";
import { styled } from "@mui/system";
import Link from "next/dist/client/link";

const Signup = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const FormTextField = styled(TextField)({
    marginBottom: "8px",
    marginTop: "5px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFC700",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFC700",
      },
      "&:hover fieldset": {
        border: "2px solid #FFC700",
      },
    },
    "& label.Mui-focused": {
      color: "#5E5E5E",
    },
  });

  const FormButton = styled(Button)({
    borderRadius: "42px",
    backgroundColor: "#FFC700",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#D6A700",
    },
  });

  const modalContent = show ? (
    <Card
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "300px",
          height: "fit-content",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: "5%",
          }}
        >
          <h1>Login</h1>
          <button onClick={handleCloseClick}>x</button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "320px",
          }}
        >
          <FormControl>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                id="email-input"
                name="email"
                type="text"
                variant="outlined"
                label="Email Address:"
              ></FormTextField>
            </div>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                id="password-input"
                name="password"
                type="password"
                variant="outlined"
                label="Password:"
                color="secondary"
              ></FormTextField>
            </div>
            <FormButton type="submit" variant="contained">
              Sign Up
            </FormButton>
            <FormButton type="submit" variant="contained">
              Demo User
            </FormButton>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              Dont have an account?
              <Link href="/" passHref onClick={handleCloseClick}>
                <Typography component="span" color="primary">
                  Signup!
                </Typography>
              </Link>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Card>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Signup;
