import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await axios.get('/logout');
      setUser(null);
      // Clear the session cookie on the client side
      document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      // Clear localStorage
      localStorage.clear();
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
  return <Navigate to="/login" />;
};

export default Logout;
