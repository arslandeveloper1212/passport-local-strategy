import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      localStorage.setItem("user",JSON.stringify(response.data.user))
     
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    
    <div style={{backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center",
    flexDirection: "column", minHeight: "100vh"}}>
      <div style={{backgroundColor: "lightgrey", padding: "60px", borderRadius: "20px"}}>
      <h2 className='blue_violet' style={{textAlign:"center", fontSize: "38px"}} >Login</h2>
      <input type="text" className='form-control' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className='form-control my-3' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='btn_color' onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;
