import React from "react";
import '../scss/Contact.scss';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page">
            <div className="background-gradient2"></div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" className="contact-text-field"/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Your Email" className="contact-text-field"/>
        </div>
        <div>
          <label>Message:</label>
          <input type="text" placeholder="Your Message" className="contact-text-field"></input>
        </div>
        <button type="submit" className="send">Send</button>
      </form>

      {/* Ending Section */}
      <section className="end1" id="end">
        <div className="ending1">
          <p>
            © 2024 <a href="#">Visco.com</a> All Rights Reserved. 
            <Link to="/terms-and-conditions">
            <button className="terms">Terms of Service</button></Link>
            <a href="#">Privacy Policy</a>
            </p>
          </div>
        </section>
      </div>
  );
}; 

export default Contact;
