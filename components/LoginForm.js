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
import { login } from "../utils/firebase-config";
import useAuth from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./FormValidation";

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
  textAlign: "center",
});

const ErrorMessage = styled(Typography)({
  maxWidth: "250px",
});

const LoginForm = () => {
  const { setLoading } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
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
          border: "2px solid #FFC700",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            p: "15%",
            fontWeight: "bold",
          }}
        >
          Login
        </Typography>
        <Box>
          <FormControl>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                inputProps={{ ref: emailRef }}
                name="email"
                type="text"
                variant="outlined"
                label="Email Address:"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <ErrorMessage variant="inherit" color="textSecondary">
                {errors.email?.message}
              </ErrorMessage>
            </div>
            <div className={style.Textfieldnoborder}>
              <FormTextField
                inputProps={{ ref: passwordRef }}
                name="password"
                type="password"
                variant="outlined"
                label="Password:"
                {...register("password")}
                error={errors.password ? true : false}
              />
            </div>
            <ErrorMessage variant="inherit" color="textSecondary">
              {errors.password?.message}
            </ErrorMessage>
            <div>
              <ForgotPassword>Forgot Password?</ForgotPassword>
            </div>
            <FormButton
              onClick={handleSubmit(handleLogin())}
              type="submit"
              variant="contained"
            >
              Login
            </FormButton>
            <FormButton type="submit" variant="contained" disabled>
              Demo User
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

export default LoginForm;
