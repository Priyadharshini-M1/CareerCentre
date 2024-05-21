import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CodingTopics.css';

const Aptitude = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { user: 'Admin', text: 'Welcome to the Coding Community! Feel free to ask your coding doubts.' },
    { user: 'Admin', text: 'Example Question: How to implement a binary search algorithm in Java?' },
    { user: 'Admin', text: 'Example Question: What is the difference between ArrayList and LinkedList in Java?' },
  ]);
  const [input, setInput] = useState('');

  const handleBackbtn = () => {
    navigate('/Homepage');
  };

  const dockerstart = () => {
    navigate('/JavaCodingQuestions');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput('');
      // Simulate an admin response for demonstration
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: 'Admin', text: `Admin response to: "${input}"` },
        ]);
      }, 2000);
    }
  };

  return (
    <div className='coding'>
      <div className='aptitude-container'>
        <h1>Career Centre</h1>
        <button className='backbtn' onClick={handleBackbtn}>Back</button>
      </div>
      <div className='main-content'>
        <div className='buttons-container'>
          <div className='easylevel'>
            <h2>Java</h2>
            <button className='startbtn' onClick={dockerstart}>Start</button>
          </div>
          <div className='easylevel'>
            <h2>Python</h2>
            <button className='startbtnint'>Start</button>
          </div>
          <div className='easylevel'>
            <h2>C++</h2>
            <button className='startbtnad'>Start</button>
          </div>
        </div>
        <div className='chat-container'>
          <h2>Coding Community Chat</h2>
          <div className='chat-box'>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.user === 'You' ? 'user-message' : 'admin-message'}`}>
                <strong>{msg.user}: </strong>{msg.text}
              </div>
            ))}
          </div>
          <form className='chat-form' onSubmit={handleSubmit}>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Ask your coding doubts here...'
            />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Aptitude;
