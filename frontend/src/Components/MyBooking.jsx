

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Css/MyBooking.css";

const MyBooking = () => {
    const validSlots = [
        "10:00 - 10:30",
        "11:00 - 11:30",
        "13:00 - 13:30",
        "14:00 - 14:30",
        "15:00 - 15:30"
    ];

    const userId = "66854b67a99b094cc825b06b"; // This will be included in the request but not shown in the form
    const user = JSON.parse(localStorage.getItem('LoggedInUser'));

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        slot: '',
        appointmentDate: '',
        ticketPrice: 100 // Constant ticket price, adjust as needed
    });

    const [bookedSlots, setBookedSlots] = useState([]);

    useEffect(() => {
        const fetchBookedSlots = async () => {
            if (formData.appointmentDate) {
                try {
                    const response = await axios.get(`http://localhost:5001/api/v1/booking/booked-slots?date=${formData.appointmentDate}`);
                    setBookedSlots(response.data.bookedSlots);
                } catch (error) {
                    console.error('Error fetching booked slots:', error);
                }
            }
        };
        fetchBookedSlots();
    }, [formData.appointmentDate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSlotSelect = (slot) => {
        if (!bookedSlots.includes(slot)) {
            setFormData({ ...formData, slot });
        } else {
            alert('Slot is already booked. Please choose another slot.');
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     // Check if the selected slot is already booked
    //     if (bookedSlots.includes(formData.slot)) {
    //         alert('Slot is already booked. Please choose another slot.');
    //         return;
    //     }
    //     let email=user.email

    //     // Log the formData to verify what is being sent
    //     console.log('Form data being sent:', { ...formData, email });

    
    //     try {
    //         const response = await axios.post('http://localhost:5001/api/v1/booking/book', { ...formData, email});
    //         console.log('Booking created:', response.data);
    //         alert('Booking Successful!');
    //         // Optionally, reset form fields
    //         setFormData({
    //             name: '',
    //             age: '',
    //             slot: '',
    //             appointmentDate: '',
    //             ticketPrice: 100
    //         });
    //         setBookedSlots([]);
    //     } catch (error) {
    //         console.error('Error creating booking:', error.response);
    //         if (error.response && error.response.status === 400) {
    //             alert('Failed to book slot. Please choose another slot.');
    //         } else {
    //             alert('Failed to create booking. Please try again later.');
    //         }
    //     }
    // };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if the selected slot is already booked
        if (bookedSlots.includes(formData.slot)) {
            alert('Slot is already booked. Please choose another slot.');
            return;
        }
    
        let email = user.email;
    
        // Log the formData to verify what is being sent
        console.log('Form data being sent:', { ...formData, email, userId });
    
        try {
            const response = await axios.post('http://localhost:5001/api/v1/booking/book', { ...formData, email, userId });
            console.log('Booking created:', response.data);
            alert('Booking Successful!');
            // Optionally, reset form fields
            setFormData({
                name: '',
                age: '',
                slot: '',
                appointmentDate: '',
                ticketPrice: 100
            });
            setBookedSlots([]);
        } catch (error) {
            console.error('Error creating booking:', error.response);
            if (error.response && error.response.status === 400) {
                alert('Failed to book slot. Please choose another slot.');
            } else {
                alert('Failed to create booking. Please try again later.');
            }
        }
    };

    
    return (
        <div className="book-container">
            <h1>Book Your Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="Name"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        id="age"
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                        placeholder="Age"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="date" 
                        id="appointmentDate"
                        name="appointmentDate" 
                        value={formData.appointmentDate} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <div className="slot-container">
                        {validSlots.map((slot, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`slot-card ${bookedSlots.includes(slot) ? 'booked' : ''}`}
                                disabled={bookedSlots.includes(slot)}
                                onClick={() => handleSlotSelect(slot)}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        id="ticketPrice"
                        name="ticketPrice" 
                        value={formData.ticketPrice} 
                        onChange={handleChange} 
                        disabled // To prevent user input, as it's a constant value
                    />
                </div>
                <button type="submit" className="btn-submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default MyBooking;
