import React, { useRef, useState } from 'react';
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import '../styles/Updates.css'; // Import your CSS file

export default function Updates() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault();
    const email = messageRef.current.value;

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address');
      setSuccessMessage(null);
      return;
    }

    let data = {
      message: email,
    };

    try {
      await addDoc(ref, data);
      setSuccessMessage('You have signed up successfully and we will send an email if there are any updates available!');
      setErrorMessage(null);
      messageRef.current.value = ''; // Clear input field
    } catch (e) {
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage(null);
      console.log(e);
    }
  };

  const validateEmail = (email) => {
    // A basic email validation using regular expression
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  return (
    <div className="updates-container">
      <form onSubmit={handleSave} className="form-box">
        <h1 className="centered-heading">Latest News and Updates</h1>
        <p className="left-aligned-text">Stay informed about the latest trends, success stories, and advancements in "Smarter Farming with Field Zoning" through our blog and newsletter. Sign up now!</p>
        <h2>Newsletter Signup Form</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <label>Enter email</label>
        <input type="text" ref={messageRef} />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
}