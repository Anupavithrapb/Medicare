

import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "../Css/Login.css";
import { mycontext } from './Context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useContext(mycontext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/v1/users/login', { email, password });
      alert('Login Successful');
      const userData = { email, ...response.data }; // include email in userData
      localStorage.setItem('LoggedInUser', JSON.stringify(userData));
      setUser(userData);
      navigate("/");
    } catch (error) {
      alert('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <h1 className="title">Login</h1>
      <div className="input-container">
        <div className='email'>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className='password'>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        
        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/register" className="reg-link">
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
