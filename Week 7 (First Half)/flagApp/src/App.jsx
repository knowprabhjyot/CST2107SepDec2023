import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import FlagDetailPage from "../pages/FlagDetailPage/FlagDetailPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

// React Material Design for using existing components
// Revising React Router Dom
// Firebase (Signup and Login UI)
// We will hook the whole application together.
// This whole application is Country to Travel

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUserState, setCurrentUser] = useState();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    setCurrentUser(currentUser);

    if (!currentUser || location.pathname === "/register") {
      navigate("/register");
    }

    if (!currentUser) {
      navigate("/");
    }

    if (
      currentUser &&
      (location.pathname === "/" || location.pathname === "/register")
    ) {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      {currentUserState && <Navbar data={currentUserState} />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:country" element={<FlagDetailPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
