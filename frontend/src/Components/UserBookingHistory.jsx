// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserBookingHistory = () => {
//     const [bookings, setBookings] = useState([]);

//     useEffect(() => {
//         const fetchUserBookings = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5001/api/v1/booking/singlebooking/${userId}'); // Adjust endpoint to fetch user bookings
//                 setBookings(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching user bookings:', error);
//             }
//         };

//         fetchUserBookings();
//     }, []);

//     return (
//         <div>
//             <h1>My Booking History</h1>
//             <ul>
//                 {bookings.map(booking => (
//                     <li key={booking._id}>
//                         <p>Name: {booking.name}</p>
//                         <p>Age: {booking.age}</p>
//                         <p>Slot: {booking.slot}</p>
//                         <p>Appointment Date: {booking.appointmentDate}</p>
//                         <p>Ticket Price: {booking.ticketPrice}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserBookingHistory;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../Css/UserBookingHistory.css";

// const UserBookingHistory = () => {
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUserBookings = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5001/api/v1/booking/user-bookings');
//                 setBookings(response.data.bookings);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching bookings:', error);
//                 setError('Failed to fetch bookings. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchUserBookings();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div className="booking-history-container">
//             <h2>Booking History</h2>
//             {bookings.length === 0 ? (
//                 <p>No bookings found.</p>
//             ) : (
//                 <ul className="booking-list">
//                     {bookings.map((booking, index) => (
//                         <li key={index} className="booking-item">
//                             <p><strong>Name:</strong> {booking.name}</p>
//                             <p><strong>Age:</strong> {booking.age}</p>
//                             <p><strong>Date:</strong> {new Date(booking.appointmentDate).toLocaleDateString()}</p>
//                             <p><strong>Time:</strong> {booking.slot}</p>
//                             <p><strong>Price:</strong> ${booking.ticketPrice}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default UserBookingHistory;


// UserBookingHistory.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Css/UserBookingHistory.css"; // Create a CSS file to style the component

const UserBookingHistory = () => {
    const [bookings, setBookings] = useState([]);
    const userId = "66866ae3454ea1c8fa66f43b"; // Replace this with the actual user ID from your authentication state

    useEffect(() => {
        // const fetchBookings = async () => {
        //     try {
        //         const response = await axios.post('http://localhost:5001/api/v1/booking/user-bookings', { userId });
        //         if (response.data.success) {
        //             setBookings(response.data.data);
        //         } else {
        //             console.error(response.data.message);
        //         }
        //     } catch (error) {
        //         console.error('Error fetching user bookings:', error);
        //     }
        // };
        const fetchBookings = async () => {
            const userId = '66866ae3454ea1c8fa66f43b'; // Replace with actual userId
            try {
                const response = await axios.post('http://localhost:5001/api/v1/booking/user-bookings', { userId });
                if (response.data.success) {
                    // Handle successful response
                } else {
                    console.error('Failed to fetch bookings:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, [userId]);

    return (
        <div className="booking-history-container">
            <h1>Your Booking History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Slot</th>
                        <th>Appointment Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.name}</td>
                                <td>{booking.age}</td>
                                <td>{booking.slot}</td>
                                <td>{new Date(booking.appointmentDate).toLocaleDateString()}</td>
                                <td>{booking.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No bookings found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserBookingHistory;
