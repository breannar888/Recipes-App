import React, { useRef, useState } from "react";
import {
  Card,
  Button,
  FormControl,
  TextField,
  Box,
  Modal,
  Typography,
} from "@mui/material";
import style from "../styles/login.module.css";
import { styled } from "@mui/system";
import Link from "next/link";
import { signup, logout } from "../utils/firebase-config";
import useAuth from "../contexts/AuthContext";

const SignUp = () => {
  const { loading, setLoading } = useAuth();

  const FormTextField = styled(TextField)({
    marginBottom: "8px",
    marginTop: "5px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#A2C5AC",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#A2C5AC",
      },
      "&:hover fieldset": {
        border: "2px solid #A2C5AC",
      },
    },
    "& label.Mui-focused": {
      color: "#5E5E5E",
    },
  });

  const FormButton = styled(Button)({
    borderRadius: "42px",
    backgroundColor: "#A2C5AC",
    marginBottom: "10px",
  });

  const SignUpBtn = styled(Button)({
    padding: 0,
    textTransform: "none",
    textDecoration: "underline",
    color: "#FFC700",
  });

  const ForgotPassword = styled(Typography)({
    paddingBottom: 10,
    color: "#5E5E5E",
    textAlign: "center",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  //const usernameRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  return (
    <Card>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "42px",
          border: "2px solid #A2C5AC",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: "5%",
          }}
        >
          <h1>Sign Up</h1>
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
            <FormButton
              onClick={handleSignup}
              disabled={loading}
              variant="contained"
            >
              Sign Up
            </FormButton>
            <FormButton variant="contained" onClick={handleLogout}>
              Logout
            </FormButton>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              Already have an account?
              <Link href="login" passHref>
                <SignUpBtn>Login!</SignUpBtn>
              </Link>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Card>
  );
};

export default SignUp;
