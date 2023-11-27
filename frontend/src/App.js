import React, {useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nav from "./components/Nav";

import Products from "./components/pages/Products";

import Profile from "./components/pages/Profile";
import Logout from "./components/Logout";


function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("user") !== null
  );

  useEffect(() => {
    setAuthenticated(localStorage.getItem("user") !== null);
  }, []);


  return (
    <div>
      <Nav authenticated={authenticated} />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}

       
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>}/>
       
        
       

        <Route
          path="/profile"
          element={
            authenticated ? (
              <Profile />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

<Route
          path="/products"
          element={
            authenticated ? (
              <Products />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        
      </Routes>
    </div>
  );
}

export default App;
