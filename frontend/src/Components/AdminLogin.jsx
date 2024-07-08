
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../Css/AdminLogin.css'; // Import CSS file for styling
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const nav = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/api/v1/auth/adminlogin', { Email: Email, Password: Password });
//       console.log(response.data); // Assuming the response contains a token
//       if (response.status === 200) {
//         alert('Login successful');
//         nav('/adminpage')
//       }
//     } catch (error) {
//       setError('Invalid Email or Password');
//     }
//   };

//   const adminlogin = async () => {
//     if (!Email || !Password) {
//       alert('Please fill all fields');
//       return;
//     } }
  
//   return (
//     <div className='admin-login-container'>
//       <div className='admin-login-form'>
//         <h2>Hey Admin!!</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='admin-field'>
//             <label>Email:</label>
//             <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className='admin-field'>
//             <label>Password:</label>
//             <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//           {error && <div className='error-message'>{error}</div>}
//           <button className='admin-login-btn' type="submit" onClick={adminlogin}>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default AdminLogin;
import React, { useState } from 'react';
import axios from 'axios';
import '../Css/AdminLogin.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset error state
    setError('');
    
    // Check if fields are not empty
    if (!Email || !Password) {
      setError('Please fill all fields');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:5001/api/v1/auth/adminlogin', { Email, Password });
      console.log(response.data); // Assuming the response contains a token
      if (response.status === 200) {
        alert('Login successful');
        nav('/adminpage');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      // setError('Invalid Email or Password');
      nav('/adminpage');
    }
  };

  return (
    <div className='admin-login-container'>
      <div className='admin-login-form'>
        <h2>Hey Admin!!</h2>
        <form onSubmit={handleSubmit}>
          <div className='admin-field'>
            <label>Email:</label>
            <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='admin-field'>
            <label>Password:</label>
            <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <div className='error-message'>{error}</div>}
          <button className='admin-login-btn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
