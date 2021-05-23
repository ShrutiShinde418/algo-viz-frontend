import React, { useState, useEffect } from 'react';
//import React, { Component } from "react";
import { Link } from "react-router-dom";
import './auth.css';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem('token') !== null) {
  //     window.location.replace('http://localhost:3000/');
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    };

    fetch('http://127.0.0.1:8000/accounts/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className="auth-content auth-card">
      {loading === false && <h1>LOGIN</h1>}
      {errors === true && <h4>Cannot log in with provided credentials</h4>}
      {loading === false && (
    

        <form onSubmit={onSubmit} className="auth-form">
          <label htmlFor='email'>Email address:</label> <br />
          <input className="auth-input-field"
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input className="auth-input-field"
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <input type='submit' className="button" value='Login' />
          <br />
          <Link className="register" to="/signup">Not Registered?</Link>
        </form>
      )}
    </div>
  );
};

export default Login;