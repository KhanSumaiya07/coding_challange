import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const storedUser = JSON.parse(localStorage.getItem('userCredentials'));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      navigate('/home'); // redirect to protected page
    } else {
      alert('Invalid email or password!');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className='page-wrapper'>
      <div className='login-wrapper'>
        <h3 className='page-heading'>Login</h3>
        <div className='container'>
          <div className='inputs-container'>
            <label htmlFor='email'>Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='inputs-container'>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter your password'
              required
            />
          </div>
          <button onClick={handleSubmit} className='login-btn'>
            Login
          </button>
          <Link className='reg-link' to='/'>
            If not registered, please Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
