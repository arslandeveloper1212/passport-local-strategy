import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from "./Nav"
const Logout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('/logout');
      setUser(null);
      // Clear the session cookie on the client side
      document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      // Clear localStorage
      localStorage.clear();
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  // Call handleLogout when the component mounts
  // This assumes that the Logout component is rendered when you want to perform the logout
  useEffect(() => {
    handleLogout();
  }, []);

  // Redirect to the login page after logout
  return (
    <div>
      <Nav />
      <Navigate to="/login" />;
    </div>
  );
  
};

export default Logout;
