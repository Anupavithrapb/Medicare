import React from 'react';
import "../Css/About.css";
import doctor1 from "../Image/doctor1.jpg";
import doctor3 from "../Image/doctor3.avif";

function About() {
  return (
    <div className='about-container'>
      <h1 className='about-h1' style={{color:"#0056b3"}}>Proud to be one of the nation's best</h1>

      {/* <div className='about-section'>
        <div className='about-image'>
          <img src={doctor1} alt='Dr. Siddarth' />
        </div>
        <div className='about-card'>
          <h2 className='about-h2'>Dr. Siddarth</h2>
          <h3 className='about-h3'>Cardiologist</h3>
          <p className='about-p'>Our best is something we strive for each day, caring for our patients - not looking back at what we accomplished but towards what we can do tomorrow. Providing the best.</p>
          <button className='learnmore'>Learn More</button>
        </div>
      </div> */}

      <div className='about-section'>
        <div className='about-image'>
          <img src={doctor3} alt='Dr. Archa Anad' />
        </div>
        <div className='about-card'>
          <h2 className='about-h2'>Dr. Archa Anad</h2>
          <h3 className='about-h3'>Gynecologist</h3>
          <h5>MBBS,MD,MS</h5>
          <p className='about-p'>Our best is something we strive for each day, caring for our patients - not looking back at what we accomplished but towards what we can do tomorrow. Providing the best.</p>
          <button className='learnmore'>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
