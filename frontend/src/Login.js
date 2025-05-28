// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // create navigation object
  const [form, setForm] = useState({ email: '', password: '', robot: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.robot) {
      alert("Please confirm you're not a robot.");
      return;
    }
    console.log('Login Data:', form);
  };

  return (
    <div className="login-background">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Username / Email</label>
          <input type="text" name="email" value={form.email} onChange={handleChange} className="form-input" required />

          <label className="form-label">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} className="form-input" required />

          <div className="form-checkbox">
            <input type="checkbox" name="robot" checked={form.robot} onChange={handleChange} />
            <span>I am not a robot</span>
          </div>

          <button type="submit" className="form-button">Login</button>
        </form>

        <div className="form-links">
          <a href="#">Forgot password?</a>
          <button onClick={() => navigate('/signup')}>Not registered? Create an account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
