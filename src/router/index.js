import Home from "pages/Home";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "store/authSlice";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import VideosPage from "pages/VideosPage";
import PublicRoutes from "./PublicRoutes";
import SingleVideo from "pages/SingleVideo";
import Navbar from "components/Navbar";

export default function MainRouter() {
  const dispatch = useDispatch();
  const isAdult =
    window.sessionStorage.getItem("Daska_Porn_User_Is_Adult") === "true";
  dispatch(authenticate(isAdult));
  return (
    <div>
      <Router>
        {isAdult && <Navbar />}
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<AuthenticatedRoutes />}>
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/videos/:id" element={<SingleVideo />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
