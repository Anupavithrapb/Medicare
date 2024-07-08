
// Register.js
import React, { useContext, useState } from 'react';
import { mycontext } from './Context'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../Css/Register.css";

function Register() {
  const { email, setEmail, name, setName, password, setPassword, phone, setPhone, gender, setGender } = useContext(mycontext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const Registerbtn = async () => {
    setError(''); // Clear any previous errors

    // Check for empty fields
    if (!name || !email || !password || !phone || !gender) {
      setError('Please fill in all fields');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    // Check password length
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/v1/users/register', {
        name,
        email,
        password,
        phone,
        gender,
      });

      if (response.status === 201) {
        alert('Registration successful');
        navigate('/login');
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        setError(`Registration failed: ${message}`);
      } else {
        setError('Registration failed');
      }
      console.log(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="register-container">
      <h1 className="title">Create an Account</h1>
      <div className="input-container">
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            value={phone}
            placeholder="Mobile Number"
            onChange={(e) => setPhone(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <button className="register-button" onClick={Registerbtn}>
          Register
        </button>
        <Link to="/login" className="log-reg">
          Skip to Login
        </Link>
      </div>
    </div>
  );
}

export default Register;



