import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    robot: false,
  });

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
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log('Signup Data:', form);
    // You can redirect or reset form here if needed
  };

  return (
    <div className="signup-background">
      <div className="form-container">
        <h2 className="form-title">Signup</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">First Name</label>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="form-input" required />

          <label className="form-label">Middle Name</label>
          <input type="text" name="middleName" value={form.middleName} onChange={handleChange} className="form-input" />

          <label className="form-label">Last Name</label>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="form-input" required />

          <label className="form-label">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" required />

          <label className="form-label">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} className="form-input" required />

          <label className="form-label">Confirm Password</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="form-input" required />

          <div className="form-checkbox">
            <input type="checkbox" name="robot" checked={form.robot} onChange={handleChange} />
            <span>I am not a robot</span>
          </div>

          <button type="submit" className="form-button">Signup</button>
        </form>

        <div className="form-links">
          <button onClick={() => navigate('/')}>Already have an account? Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
