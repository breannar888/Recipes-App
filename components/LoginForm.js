import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "../styles/login.module.css";
import { styled } from "@mui/system";
import Link from "next/link";
import { login } from "../utils/firebase-config";
import useAuth from "../contexts/AuthContext";
import * as Yup from "yup";

import { Card, Box, TextField, Typography, Button } from "@mui/material";

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
  width: "100%",
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
            <FormTextField
              id="email"
              name="email"
              label="Email:"
              {...register("email")}
              error={errors.email ? true : false}
            />
            <ErrorMessage variant="inherit" color="textSecondary">
              {errors.email?.message}
            </ErrorMessage>
          </div>
          <div className={style.Textfieldnoborder}>
            <FormTextField
              id="password"
              name="password"
              label="Password:"
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
