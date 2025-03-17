import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    alert("Anda harus login terlebih dahulu!");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;