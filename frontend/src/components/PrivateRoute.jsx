import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Home from "../pages/Home";

const PrivateRoute = () => {
  const { user } = useAuthContext();

  return user ? <Home /> : <Navigate to="/login" />;
};

export default PrivateRoute;
