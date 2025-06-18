// src/pages/Login.js
import React, { useState } from 'react';
import { loginUser } from './api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (err) {
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Login form">
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        aria-required="true"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
