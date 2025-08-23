import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import CreateListing from "./pages/CreateListing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}
