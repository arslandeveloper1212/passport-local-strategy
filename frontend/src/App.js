import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Products from "./components/pages/Products";

import Profile from "./components/pages/Profile";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}

        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />

        <Route
          path="/products"
          element={<ProtectedRoute element={<Products />} />}
        />

        {/* 
        <Route
          path="/products"
          element={
            localStorage.getItem("user") ? (
              <Products />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
