import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import FlagDetailPage from "../pages/FlagDetailPage/FlagDetailPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";

// React Material Design for using existing components
// Revising React Router Dom
// Firebase (Signup and Login UI)
// We will hook the whole application together.
// This whole application is Country to Travel

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail" element={<FlagDetailPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
}

export default App;
