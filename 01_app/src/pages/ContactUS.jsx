import React, { useState } from 'react';
import axios from 'axios';
import "./SignUp.css"
const ContactUS = () => {
  const [crimeType, setCrimeType] = useState('');
  const [crimeArea, setCrimeArea] = useState('');
  const [crimeHardness, setCrimeHardness] = useState('');
  const [criminals, setCriminals] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3002/chat', {
        crimeType,
        crimeArea,
        crimeHardness,
        criminals,
        message
      });
      setCrimeType('');
      setCrimeArea('');
      setCrimeHardness('');
      setCriminals('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  };

  return (
    <div className='container2'>
      <input type="text" value={crimeType} onChange={(e) => setCrimeType(e.target.value)} placeholder="Crime Type" />
      <input type="text" value={crimeArea} onChange={(e) => setCrimeArea(e.target.value)} placeholder="Crime Area" />
      <input type="text" value={crimeHardness} onChange={(e) => setCrimeHardness(e.target.value)} placeholder="Crime Hardness" />
      <input type="text" value={criminals} onChange={(e) => setCriminals(e.target.value)} placeholder="Criminals" />
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Additional Message" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ContactUS;