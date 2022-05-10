import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "../styles/login.module.css";
import { styled } from "@mui/system";
import Link from "next/link";
import { login } from "../utils/firebase-config";
import useAuth from "../contexts/AuthContext";
import * as Yup from "yup";
import {
  SecondaryTextField,
  FormButton,
  LoginBtn,
  ForgotPassword,
  ErrorMessage,
} from "./muiStyledComponents/styledComponents";
import { Card, Box, Typography } from "@mui/material";

const LoginForm = () => {
  const { loading, setLoading } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  async function handleLogin(data) {
    console.log("login", data);
    setLoading(true);
    try {
      await login(data.email, data.password);
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
          <div className={style.Textfieldnoborder}>
            <SecondaryTextField
              id="email"
              name="email"
              label="Email:"
              color="secondary"
              {...register("email")}
              error={errors.email ? true : false}
            />
            <ErrorMessage variant="inherit" color="textSecondary">
              {errors.email?.message}
            </ErrorMessage>
          </div>
          <div className={style.Textfieldnoborder}>
            <SecondaryTextField
              id="password"
              name="password"
              label="Password:"
              color="secondary"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
            />
            <ErrorMessage variant="inherit" color="textSecondary">
              {errors.password?.message}
            </ErrorMessage>
          </div>
          <div>
            <ForgotPassword>Forgot Password?</ForgotPassword>
          </div>
          <Box>
            <FormButton
              onClick={handleSubmit(handleLogin)}
              disabled={loading}
              variant="contained"
              color="secondary"
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
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default LoginForm;
