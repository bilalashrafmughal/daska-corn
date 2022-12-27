import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoutes() {
  const isAuthenticated = useSelector((state) => state.auth);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/videos" />;
}
