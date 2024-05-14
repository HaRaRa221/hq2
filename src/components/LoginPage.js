// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';


function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   // Changed login event to axios post request
   try {
    const response = await axios.post('/login', { email, password });
    localStorage.setItem('token', response.data.token);
    alert('Login successful');
   } catch (error) {
    console.error('Error logging in:', error);
    alert('Login failed');
   }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
