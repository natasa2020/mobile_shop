import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="contact-page">
        <div className="welcomeMessage">
            <p>Hey, do you need the ideal phone or do you need help choosing a phone?</p>
            <p>Feel free to visit us in our shop or contact us! Best Regards,MobileShop.</p>
        </div>
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>Address: Karaburma, Belgrade, Serbia</p>
          <p>Mobile Phone: +381 69 0227032</p>
        </div>
        <div className="map-container">
          <iframe
            title="MobileShop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.682321062565!2d20.50724771575902!3d44.80443347909817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a67ed30557e8b%3A0x2b09c58f4338369c!2sKaraburma%2C%20Belgrade%2C%20Serbia!5e0!3m2!1sen!2sus!4v1626073080320!5m2!1sen!2sus"
            width="500"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
        <div className="cf-container"> 
        <ContactForm />
        </div>
      </div>
    );
};

export default Contact;