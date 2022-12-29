import Home from "pages/Home";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "store/authSlice";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import VideosPage from "pages/VideosPage";
import PublicRoutes from "./PublicRoutes";
import SingleVideo from "pages/SingleVideo";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function MainRouter() {
  const dispatch = useDispatch();
  const isAdult = window.sessionStorage.getItem("DP_User_Is_Adult") === "true";
  const isAppOn = process.env.REACT_APP_SWITCH === "on";
  dispatch(authenticate(isAdult && isAppOn));
  useSelector((state) => state.auth);
  return (
    <div>
      <Router>
        {isAdult && isAppOn && <Navbar />}
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<AuthenticatedRoutes />}>
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/videos/:id" element={<SingleVideo />} />
          </Route>
        </Routes>
        {isAdult && isAppOn && <Footer />}
      </Router>
    </div>
  );
}
