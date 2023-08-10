import "./Contact.css";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(formData); // This will log the form data. Here, you can send it to a backend or perform any other action.

    // Clearing the form data.
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="main">
      <div className="left-part">
        <div className="contact-heading">Send a message</div>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="What’s the message?"
            value={formData.message}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
      <div className="right-part">
        <div className="right-top">
          <h4>CONTACT US</h4>
          <p id="phno">+918763052472</p>
          <p>hello@example.com</p>
        </div>
        <div className="right-down">
          <h4>ADDRESS</h4>
          <p id="markt">Market Complex, Jyoti Vihar,</p>
          <p>Burla, Odisha 768019</p>
        </div>
        <div className="map-image">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.791540291418!2d83.87897397526304!3d21.47669457224302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213c30d3c00001%3A0x57a50679ae0cef7a!2sKanha%20%26%20Brothers!5e0!3m2!1sen!2sin!4v1691683540070!5m2!1sen!2sin"
            width="223"
            height="200"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
