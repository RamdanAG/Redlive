import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  // Cek apakah user adalah admin
  if (!user || user.username !== "admin" || user.password !== "089") {
    alert("Anda tidak memiliki akses ke halaman ini!");
    return <Navigate to="/home" />;
  }

  return children;
};

export default AdminRoute;