
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/submit', { message });
      setMessage('');
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  };

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Chat;
