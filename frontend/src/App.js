import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nav from "./components/Nav";

import AddProducts from "./components/pages/AddProducts";
import UpdateProducts from "./components/pages/UpdateProducts";
import Profile from "./components/pages/Profile";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/updateproducts" element={<UpdateProducts />} />
          <Route path="/profile" element={<Profile />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
