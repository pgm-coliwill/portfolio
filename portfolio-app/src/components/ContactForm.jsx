// File: ContactForm.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import design from "./contactForm.module.css"; // New CSS file for form styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailStatus, setEmailStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5chulah", 
        "template_svmjozf", 
        formData,
        "5BKxsBHfnIT7TG7wZ" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailStatus({
            success: true,
            message: "Message sent successfully!",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setEmailStatus({
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      );

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={design.contactFormWrapper}>
      <form className={design.contactForm} onSubmit={handleSubmit}>
        <div className={design.formGroup}>
          <label className={design.formLabel} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={design.formInput}
          />
        </div>
        <div className={design.formGroup}>
          <label className={design.formLabel} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={design.formInput}
          />
        </div>
        <div className={design.formGroup}>
          <label className={design.formLabel} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={design.formTextarea}
          />
        </div>
        <button type="submit" className={design.formButton}>
          Send Message
        </button>
      </form>
      {emailStatus.message && (
        <p
          className={
            emailStatus.success ? design.successMessage : design.errorMessage
          }
        >
          {emailStatus.message}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
