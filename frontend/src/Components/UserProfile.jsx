
// // // export default UserProfile;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import '../Css/UserProfile.css'; // Import your CSS file

// // const UserProfile = () => {


// //   return (
// //     <div className='card'>
// //       <div className='card-header'>
// //         <h1 className='profile-h1'>User Profile</h1>
// //       </div>
// //       <div className='card-body'>
// //         <p className='profile-p'>Name: {userData.name}</p>
// //         <p className='profile-p'>Email: {userData.email}</p>
// //         <p className='profile-p'>Phone: {userData.phone}</p>
// //         <p className='profile-p'>Gender: {userData.gender}</p>
// //         <h2 className='profile-h2'>Bookings</h2>
// //         {bookings.length === 0? (
// //           <p>No bookings found.</p>
// //         ) : (
// //           <ul className='booking-list'>
// //             {bookings.map((booking) => (
// //               <li key={booking._id} className='booking-item'>
// //                 <p>Booking Date: {booking.appointmentDate}</p>
// //                 <p>Booking Time: {booking.slot}</p>
// //                 {/* Add more booking details as needed */}
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserProfile;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Css/UserProfile.css'; // Import your CSS file

// const UserProfile = () => {
//     const [userData, setUserData] = useState({});
//     const [bookings, setBookings] = useState([]);
//     const user = JSON.parse(localStorage.getItem('LoggedInUser'));
// console.log("userProfilePage",user);
//     // const userId = user._id; // Assuming user prop contains user details

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5001/api/v1/users/user-profile/${user.email}`);
//                 if (response.data.success) {
//                     setUserData(response.data.data.user);
//                 } else {
//                     console.error('Failed to fetch user profile:', response.data.message);
//                 }
//             } catch (error) {
//                 console.error('Error fetching user profile:', error);
//             }
//         };

//         const fetchUserBookings = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5001/api/v1/users/user-bookings/${user.email}`);
//                 if (response.data.success) {
//                     setBookings(response);
//                 } else {
//                     console.error('Failed to fetch user bookings:', response.data.message);
//                 }
//             } catch (error) {
//                 console.error('Error fetching user bookings:', error);
//             }
//         };

//         if (user.email) {
//             fetchUserProfile();
//             fetchUserBookings();
//         }
//     }, [user.email]);
// console.log("book",bookings);
//     return (
//         <div className='card'>
//             <div className='card-header'>
//                 <h1 className='profile-h1'>User Profile</h1>
//             </div>
//             <div className='card-body'>
//                 <p className='profile-p'>Name: {userData.name}</p>
//                 <p className='profile-p'>Email: {userData.email}</p>
//                 <p className='profile-p'>Phone: {userData.phone}</p>
//                 <p className='profile-p'>Gender: {userData.gender}</p>
//                 <h2 className='profile-h2'>Bookings</h2>
//                 {bookings.length === 0 ? (
//                     <p>No bookings found.</p>
//                 ) : (
//                     <ul className='booking-list'>
//                         {bookings.map((booking) => (
//                             <li key={booking._id} className='booking-item'>
//                                 <p>Booking Date: {booking.appointmentDate}</p>
//                                 <p>Booking Time: {booking.slot}</p>
//                                 {/* Add more booking details as needed */}
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UserProfile;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/UserProfile.css'; // Import your CSS file

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [bookings, setBookings] = useState([]);
    const user = JSON.parse(localStorage.getItem('LoggedInUser'));

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/v1/users/user-profile/${user.email}`);
                if (response.data.success) {
                    setUserData(response.data.data.user);
                } else {
                    console.error('Failed to fetch user profile:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        const fetchUserBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/v1/users/user-bookings/${user.email}`);
                if (response.data.success) {
                    setBookings(response.data.data.bookings);
                } else {
                    console.error('Failed to fetch user bookings:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching user bookings:', error);
            }
        };

        if (user.email) {
            fetchUserProfile();
            fetchUserBookings();
        }
    }, [user.email]);

    return (
        <div className='card'>
            <div className='card-header'>
                <h1 className='profile-h1'>User Profile</h1>
            </div>
            <div className='card-body'>
                {userData ? (
                    <>
                        <p className='profile-p'>Name: {userData.name}</p>
                        <p className='profile-p'>Email: {userData.email}</p>
                        <p className='profile-p'>Phone: {userData.phone}</p>
                        <p className='profile-p'>Gender: {userData.gender}</p>
                    </>
                ) : (
                    <p>Loading user data...</p>
                )}
                <h2 className='profile-h2'>Bookings</h2>
                {bookings.length === 0 ? (
                    <p>No bookings found.</p>
                ) : (
                    <ul className='booking-list'>
                        {bookings.map((booking) => (
                            <li key={booking._id} className='booking-item'>
                                <p>Booking Date: {booking.appointmentDate}</p>
                                <p>Booking Time: {booking.slot}</p>
                                {/* Add more booking details as needed */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
