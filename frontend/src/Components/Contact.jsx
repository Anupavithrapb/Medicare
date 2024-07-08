import React from 'react';
import '../Css/Contact.css'; // Ensure you create a corresponding CSS file for styling

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Thank you for contacting us. We will get back to you soon.');
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us:</p>
      <ul>
        <li><strong>Phone:</strong> +91 6543217890</li>
        <li><strong>Email:</strong> bookmydoctor@gmail.com</li>
      </ul>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
