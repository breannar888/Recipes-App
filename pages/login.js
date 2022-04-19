import React from "react";
import { withPublic } from "../utils/route";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return <LoginForm />;
};

export default withPublic(Login);
