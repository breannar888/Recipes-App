import React, { useRef, useState } from "react";
import { Card, Button, Box, TextField, Typography } from "@mui/material";
import style from "../styles/login.module.css";
import { styled } from "@mui/system";
import Link from "next/link";
import { signup } from "../utils/firebase-config";
import useAuth from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./FormValidation";

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

const ErrorMessage = styled(Typography)({
  maxWidth: "250px",
});

const SignupForm = () => {
  const { loading, setLoading } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (err) {
      alert(err.message);
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
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                inputRef={nameRef}
                label="Username:"
                id="name-input"
                name="username"
                type="text"
                variant="outlined"
                {...register("username")}
                error={errors.username ? true : false}
              />
              <ErrorMessage variant="inherit" color="red">
                {errors.username?.message}
              </ErrorMessage>
            </div>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                inputRef={emailRef}
                label="Email Address:"
                id="email-input"
                name="email"
                type="text"
                variant="outlined"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <ErrorMessage variant="inherit" color="red">
                {errors.email?.message}
              </ErrorMessage>
            </div>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                inputRef={passwordRef}
                label="Password:"
                id="password-input"
                name="password"
                type="password"
                variant="outlined"
                {...register("password")}
                error={errors.password ? true : false}
              />
              <ErrorMessage variant="inherit" color="red">
                {errors.password?.message}
              </ErrorMessage>
            </div>
            <FormButton
              onClick={handleSubmit(handleSignup)}
              disabled={loading}
              variant="contained"
            >
              Sign Up
            </FormButton>
            <FormButton variant="contained" disabled>
              Demo User
            </FormButton>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              Already have an account?
              <Link href="login" passHref>
                <SignUpBtn>Login!</SignUpBtn>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default SignupForm;
