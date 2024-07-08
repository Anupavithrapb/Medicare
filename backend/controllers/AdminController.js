
const jwt = require('jsonwebtoken');
const Booking = require('../models/Booking');
const Admin = require('../models/adminModel');

const adminLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        const admin = await Admin.findOne({ Email, Password });

        if (!admin) {
            return res.status(401).send("Invalid Email or Password");
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        console.error("Error during admin login:", error);
        res.status(500).send("Login failed");
    }
};

// const viewBookings = async (req, res) => {
//     try {
//         const bookings = await Booking.find().populate('user', 'name age'); // Ensure user details are populated
//         res.status(200).json(bookings);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed' });
//     }
// };
const viewBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user', 'name age');
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
};
const acceptBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const booking = await Booking.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found' });
        }

        // Optionally notify user that booking has been accepted

        res.status(200).json({ 
            success: true, 
            message: 'Booking accepted successfully', 
            data: {
                id: booking._id,
                user: booking.user,
                timeslot: booking.timeslot,
                status: booking.status
            } 
        });
    } catch (error) {
        console.error('Error accepting booking:', error);
        res.status(500).json({ success: false, message: 'Failed to accept booking' });
    }
};
const rejectBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const booking = await Booking.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found' });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Booking rejected successfully', 
            data: {
                id: booking._id,
                user: booking.user,
                timeslot: booking.timeslot,
                status: booking.status
            } 
        });
    } catch (error) {
        console.error('Error rejecting booking:', error);
        res.status(500).json({ success: false, message: 'Failed to reject booking' });
    }
};


module.exports = { adminLogin, viewBookings, acceptBooking,rejectBooking };
