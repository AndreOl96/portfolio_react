// Form.js
import React, { useState } from 'react';
import './form.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="form-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="form-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea className="form-textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className="form-button" type="submit">Send</button>
    </form>
  );
};

export default Form;
