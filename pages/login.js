import React, { useRef, useState } from "react";
import {
  Card,
  Button,
  FormControl,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import style from "../styles/login.module.css";
import { styled } from "@mui/system";
import Link from "next/link";
import { login, logout } from "../utils/firebase-config";
import useAuth from "../contexts/AuthContext";
import { withPublic } from "../utils/route";

const Login = () => {
  const { setLoading } = useAuth();

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

  const LoginBtn = styled(Button)({
    padding: 0,
    textTransform: "none",
    textDecoration: "underline",
  });

  const ForgotPassword = styled(Typography)({
    paddingBottom: 10,
    color: "#5E5E5E",
    textAlign: "center",
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  return (
    <Card
      sx={{
        backgroundColor: "blue",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "42px",
          border: "2px solid #FFC700",
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
                inputProps={{ ref: emailRef }}
                id="email-input"
                name="email"
                type="text"
                variant="outlined"
                label="Email Address:"
              ></FormTextField>
            </div>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                inputProps={{ ref: passwordRef }}
                id="password-input"
                name="password"
                type="password"
                variant="outlined"
                label="Password:"
                color="secondary"
              ></FormTextField>
            </div>
            <div>
              <ForgotPassword>Forgot Password?</ForgotPassword>
            </div>
            <FormButton onClick={handleLogin} type="submit" variant="contained">
              Login
            </FormButton>
            <FormButton
              onClick={handleLogout}
              type="submit"
              variant="contained"
            >
              Logout
            </FormButton>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              Dont have an account?
              <Link href="signup" passHref>
                <LoginBtn>Sign Up!</LoginBtn>
              </Link>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Card>
  );
};

export default withPublic(Login);
