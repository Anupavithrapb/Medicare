
const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Booking = require("../models/Booking");
const mongoose=require('mongoose')
const register = async (req, res) => {
    try {
        const { name, email, password, phone, gender } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User with this email already exists'
            });
        }

        // Hash and salt password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            gender
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            newUser,
        });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            return res.status(400).json({
                success: false,
                message: 'Duplicate key error: Email already exists',
            });
        }
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};


// const login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(404).send('User Not Found');
//       }
//       // Compare hashed password
//       const match = await bcrypt.compare(password, user.password);
//       if (!match) {
//         return res.status(401).send('Invalid Password');
//       }
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
//       res.status(200).json({ message: "Login Success", success: true, token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: `Error in Login  ${error.message}` });
//     }
//   };
  


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User Not Found');
        }
        // Compare hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send('Invalid Password');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.status(200).send({ message: "Login Success", success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: `Error in Login  ${error.message}` });
    }
};


const getUserProfile = async (req, res) => {
    const userEmail = req.params.userEmail;
  
    try {
      const userProfile = await User.findOne(userEmail);
      if (!userProfile) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      res.status(200).json({ success: true, data: { user: userProfile } });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  



const getUserBookings = async (req, res) => {
    const userEmail = req.params.userEmail;
    console.log('User ID from request:', userEmail);

    // Validate userId is a valid ObjectId
    // if (!mongoose.Types.ObjectId.isValid(userId)) {
    //     console.log('Invalid User ID format');
    //     return res.status(400).json({ success: false, message: 'Invalid User ID' });
    // }
    const userProfile = await User.findOne(userEmail);
    if (!userProfile) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    try {
        // Retrieve bookings for the specific user
        const userBookings = await Booking.find({ email: userEmail });
        console.log('User Bookings:', userBookings);

        if (userBookings.length === 0) {
            console.log('No bookings found for this user');
            return res.status(404).json({ success: false, message: 'No bookings found for this user' });
        }

        res.status(200).json({ success: true, data: { bookings: userBookings } });
    } catch (error) {
        console.error('Error fetching user bookings:', error); // Detailed error logging
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {
    register,
    login,
    getUserProfile,
    getUserBookings
};

