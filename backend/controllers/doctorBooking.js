
const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
    console.log('Request body:', req.body);

    const { name, age, slot, appointmentDate, userId } = req.body;
    const ticketPrice = 100; // Constant ticket price

    // Validate fields
    if (!name || !age || !slot || !appointmentDate || !userId) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    try {
        // Check if the slot is available
        const existingBooking = await Booking.findOne({ slot, appointmentDate });
        if (existingBooking) {
            return res.status(400).json({ success: false, message: "Slot is already booked" });
        }

        // Create new booking
        const newBooking = new Booking({ name, age, slot, appointmentDate, ticketPrice, user: userId });
        const savedBooking = await newBooking.save();
        res.status(200).json({ success: true, message: "Booked Successfully", data: savedBooking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
};


const deleteBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteBooking = await Booking.findByIdAndDelete(id);
        if (!deleteBooking) {
            return res.status(404).json({ success: false, message: 'Booking is not found' });
        }
        res.status(200).json({ success: true, message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
};

const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({ success: true, message: 'Successfully fetched all bookings', data: bookings });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};





module.exports = { createBooking,  deleteBooking, getAllBooking,  };
