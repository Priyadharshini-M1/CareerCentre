import React from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from './profile.png'; // Import your profile picture
import './Homepage.css';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle logging out
  const handleLogout = () => {
    localStorage.removeItem('username'); // Remove username from local storage on logout
    navigate('/');
  };

  // Get username from local storage
  const username = localStorage.getItem('username');

  // Function to handle navigation to other pages
  const handleAptitudeView = () => {
    navigate('/Aptitude');
  };

  const handleCodingView = () => {
    navigate('/Coding');
  };

  const handleHRQuestions = () => {
    navigate('/HRQuestions');
  };

  return (
    <div className='container'>
      {/* Display profile picture and username in the top right corner */}
      <div className='user-info'>
        <img src={profilePic} alt='Profile Pic' className='profile-pic' /> {/* Use the imported profile picture */}
        <span className='username'>{username}</span>
        <div>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div>
      <h1>Career Centre</h1>
      </div>
      <div className='home-container'>
        {/* Other content */}
        <div className='content'>
          <div className='module'>
            <h3>Aptitude</h3>
            <p>Practice aptitude questions at various difficulty levels.</p>
            <button className='module-btn' onClick={handleAptitudeView}>View</button>
          </div>
          <div className='module'>
            <h3>Coding</h3>
            <p>Challenge yourself with coding problems in different languages.</p>
            <button className='module-btn' onClick={handleCodingView}>View</button>
          </div>
          {/* HR Question Block */}
          <div className='module'>
            <h3>HR Questions</h3>
            <p>Prepare for HR interview questions commonly asked in job interviews.</p>
            <button className='module-btn' onClick={handleHRQuestions}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
