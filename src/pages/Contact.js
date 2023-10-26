
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import polyLeft from "../assets/polyLeft.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='main'>
      <div className='conus'>
        <h2>Contact Us</h2>
        <h1>Get Started Today</h1>
        <p className='para'>Contact us now to schedule a consultation and discover how "Smarter Farming with Field Zoning" can transform your farm and lead you towards a more prosperous and sustainable future.</p>
      </div>
      <div className='content'>
        <div className='pic' style={{ backgroundImage: `url(${polyLeft})` }}></div>
        <div className='form'>
          <form action="https://formspree.io/f/mqkveegw" method="POST">
            <div className="formGroup">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="formGroup">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='contact'>
        <div>
          <p>If you have any queries, please mail us at:</p>
          <a href="mailto:rathnashri2004@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Send mail
          </a>
        </div>
        <div>
          <p>For any clarifications, feel free to contact us at:</p>
          <a href="tel:+1234567890">
            <FontAwesomeIcon icon={faPhone} /> +123 456 7890
          </a>
        </div>
      </div>
    </div>

    /*<div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${polyLeft})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <div className="contactContainer">
          <h2>Get Started Today</h2>
          <p>Contact us now to schedule a consultation and discover how "Smarter Farming with Field Zoning" can transform your farm and lead you towards a more prosperous and sustainable future.</p>
          <div className="contactForm">
            <form action="https://formspree.io/f/mqkveegw" method="POST">
              <div className="formGroup">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <div className="formGroup">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-info">
          <div>
            <p>If you have any queries, please mail us at:</p>
            <a href="mailto:rathnashri2004@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Send mail
            </a>
          </div>
          <div>
            <p>For any clarifications, feel free to contact us at:</p>
            <a href="tel:+1234567890">
              <FontAwesomeIcon icon={faPhone} /> +123 456 7890
            </a>
          </div>
        </div>

      </div>
    </div>*/
  );
}

export default Contact;