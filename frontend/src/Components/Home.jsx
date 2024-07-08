// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import "../Css/Home.css";
// import finddoctor from "../Image/finddoctor.png";
// import calender from "../Image/calender.png";
// import { BsArrowRightCircleFill } from "react-icons/bs";
// import { mycontext } from './Context';

// function Home() {
//   // Retrieve user from localStorage and parse it

//   const {user, setUser} = useContext(mycontext);
//   const User = JSON.parse(localStorage.getItem('LoggedInUser'));

//   return (
//     <div className="hero_section">
//       <div className="container">
//         <div className="flex">
//           <div className="content">
//             <h1 className="heading">We help patients live a healthy, longer life.</h1>
//             <p className="paragraph">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quaerat cumque fugit, perspiciatis cum nemo aperiam, aut quia earum amet architecto, modi odio. Soluta unde ducimus perferendis?
//             </p>
//             <button className="rqst-btn">
//               <Link to={`/userprofile/${User.email}`} className="link">
//                 User Profile
//               </Link>
//             </button>
//           </div>

//           <div className="image">
//             <img
//               src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
//               alt="Doctor"
//             />
//           </div>
//         </div>

//         <div className="content-end">
//           <h1 className="h1-end">Providing best medical services</h1>
//           <p className="p-end">
//             World-class care for everyone. Our health system offers unmatched, expert health care.
//           </p>
//         </div>

//         <div className="section">
//           {/* Uncomment and use if needed */}
//           {/* <div className="find-doctor">
//             <div className="find-image">
//               <img src={finddoctor} alt="Find a doctor" height="300px" />
//             </div>
//             <div className="find-btn">
//               <h2 className="find-h2">Find a doctor</h2>
//               <Link to="/doctors" className="arrow-btn">
//                 <BsArrowRightCircleFill style={{ width: "100px", height: "50px" }} />
//               </Link>
//             </div>
//           </div> */}

//           <div className="book-doctor">
//             <div className="book-image">
//               <img src={calender} alt="Book appointment" height="200px" />
//             </div>
//             <div className="book-btn">
//               <h2 className="book-h2">Book Appointment</h2>
//               <Link to="/booking" className="arrow-btn">
//                 <BsArrowRightCircleFill style={{ width: "100px", height: "50px" }} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../Css/Home.css";
import finddoctor from "../Image/finddoctor.png";
import calender from "../Image/calender.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { mycontext } from './Context';

function Home() {
  const { user, setUser } = useContext(mycontext);
  const User = JSON.parse(localStorage.getItem('LoggedInUser'));

  return (
    <div className="hero_section">
      <div className="container">
        <div className="flex">
          <div className="content">
            <h1 className="heading">We help patients live a healthy, longer life.</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quaerat cumque fugit, perspiciatis cum nemo aperiam, aut quia earum amet architecto, modi odio. Soluta unde ducimus perferendis?
            </p>
            {User && (
              <button className="rqst-btn">
                <Link to={`/userprofile/${User.email}`} className="link">
                  User Profile
                </Link>
              </button>
            )}
          </div>

          <div className="image">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
              alt="Doctor"
            />
          </div>
        </div>

        <div className="content-end">
          <h1 className="h1-end">Providing best medical services</h1>
          <p className="p-end">
            World-class care for everyone. Our health system offers unmatched, expert health care.
          </p>
        </div>

        <div className="section">
          {/* Uncomment and use if needed */}
          {/* <div className="find-doctor">
            <div className="find-image">
              <img src={finddoctor} alt="Find a doctor" height="300px" />
            </div>
            <div className="find-btn">
              <h2 className="find-h2">Find a doctor</h2>
              <Link to="/doctors" className="arrow-btn">
                <BsArrowRightCircleFill style={{ width: "100px", height: "50px" }} />
              </Link>
            </div>
          </div> */}

          <div className="book-doctor">
            <div className="book-image">
              <img src={calender} alt="Book appointment" height="200px" />
            </div>
            <div className="book-btn">
              <h2 className="book-h2">Book Appointment</h2>
              <Link to="/booking" className="arrow-btn">
                <BsArrowRightCircleFill style={{ width: "100px", height: "50px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

