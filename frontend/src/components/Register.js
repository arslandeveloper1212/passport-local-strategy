import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('/register', { username, password });
      console.log(response.data);
    navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    
    <div style={{backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center",
    flexDirection: "column", minHeight: "100vh"}} >
      <div style={{backgroundColor: "lightgrey", padding: "60px", borderRadius: "20px"}}>

      
      <h2 className='blue_violet' style={{textAlign:"center", fontSize: "38px"}} >SignUp</h2>
      <input type="text" className='form-control' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className='form-control my-3' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='btn_color' onClick={handleRegister}>Submit</button>
    </div>
    </div>
    
  );
};

export default Register;
