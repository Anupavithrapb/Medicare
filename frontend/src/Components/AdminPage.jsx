

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/AdminPage.css'; // Import the CSS file for styling

const AdminPage = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/v1/auth/bookedappointment');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
    
        fetchBookings();
    }, []);

    const handleApprove = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5001/api/v1/auth/acceptbooking/${id}`);
            if (response.data.success) {
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking._id === id ? { ...booking, status: 'accepted' } : booking
                    )
                );
            }
        } catch (error) {
            console.error('Error approving booking:', error);
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5001/api/v1/auth/rejectbooking/${id}`);
            if (response.data.success) {
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking._id === id ? { ...booking, status: 'rejected' } : booking
                    )
                );
            }
        } catch (error) {
            console.error('Error rejecting booking:', error);
        }
    };

    return (
        <div className='admin-page-container'>
            <h1> Booked Appointments</h1>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Age</th>
                        <th>Timeslot</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}>
                            <td>{booking.name}</td>
                            <td>{booking.age}</td>
                            <td>{booking.slot}</td>
                            <td>{booking.status}</td>
                            <td>
                                {booking.status === 'pending' && (
                                    <>
                                        <button
                                            className='approve-btn'
                                            onClick={() => handleApprove(booking._id)}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className='reject-btn'
                                            onClick={() => handleReject(booking._id)}
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}
                                {booking.status === 'accepted' && <span>Accepted</span>}
                                {booking.status === 'rejected' && <span>Rejected</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
