import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem('username', username); // Save username in local storage
      navigate('/Homepage');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignupbtn = () => {
    navigate('/Signup');
  };

  return (
    <div>
      <form className='loginForm' onSubmit={handleLogin}>
        <h1>Login Here</h1>
        <label>Username : </label>
        <input
          type='text'
          placeholder='Enter the username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password : </label>
        <input
          type='password'
          placeholder='Enter the password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
        <button type='button' onClick={handleSignupbtn}>Signup</button>
      </form>
    </div>
  );
};

export default Login;
