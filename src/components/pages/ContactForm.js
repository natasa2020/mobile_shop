import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      //unique URL for my Formspree account(Account natasapetakovic2020@gmail.com)
      const response = await fetch('https://formspree.io/f/mdorodry', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-form-container">
    {submitted ? (
      <p>Thank you for your message!</p>
    ) : (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-textarea" />
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    )}
  </div>
  );
}; 

export default ContactForm;