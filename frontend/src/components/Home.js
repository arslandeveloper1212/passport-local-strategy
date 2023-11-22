import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  
  const [user, setUser] = useState(null);
  // console.log(user);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/checkAuth');
        console.log(response);
        setUser(response.data.user);
        console.log(response.data.user)
        
        
        
      } catch (error) {
        console.log(error);
      }
    };

    checkAuth();
  }, []);

 
  
  const handleLogout = async () => {
    try {
      await axios.get('/logout');
      setUser(null);
      // Clear the session cookie on the client side
      document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {user ? (
        <div style={{textAlign: 'center'}} >
          <h2>Welcome, {user.username}!</h2>
          <button className='btn_color' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{textAlign: 'center'}}>
           <h2 >Welcome! Please log in or register.</h2>
       <Link to="/login"> <button className='btn_color'>Go to Login</button></Link>
        </div>
       
      )}
    </div>
  );
};

export default Home;
