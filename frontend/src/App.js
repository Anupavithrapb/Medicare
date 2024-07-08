
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from './Components/About';

import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer';
import UserProfile from './Components/UserProfile';
import MyBooking from './Components/MyBooking';
import ViewBookings from './Components/ViewBooking';
import UserBookingHistory from './Components/UserBookingHistory';
import { MyProvider } from './Components/Context'; // Import the provider
import AdminLogin from './Components/AdminLogin';
import AdminPage from './Components/AdminPage';
import Contact from './Components/Contact';

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  // const [user, setUser] = useState(null);

  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('LoggedInUser');
  //   if (loggedInUser) {
  //     setUser(JSON.parse(loggedInUser));
  //   }
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <MyProvider value={{ email, setEmail, name, setName, password, setPassword, phone, setPhone, role, setRole, gender, setGender, user, setUser }}>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            {/* <Route path='/userprofile' element={<UserProfile user={user} />} /> */}
            <Route path='/booking' element={<MyBooking />} />
            <Route path='/view-booking' element={<ViewBookings />} />
            <Route path='/booking-history' element={<UserBookingHistory />} />
            <Route path='/adminlogin' element={<AdminLogin/>}/>
            <Route path='/adminpage' element={<AdminPage/>}/>
            <Route path='/userprofile/:userId' element={<UserProfile user={user} />} />


          </Routes>
        </MyProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
