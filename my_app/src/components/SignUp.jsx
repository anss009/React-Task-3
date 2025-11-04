import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.emailOrPhone || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    alert('Account created successfully! 🎊');
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join us and start your journey today</p>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label className="signup-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="signup-input"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-label">Email or Phone Number</label>
            <input
              type="text"
              name="emailOrPhone"
              className="signup-input"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter your email or phone"
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-label">Password</label>
            <div className="signup-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="signup-input"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
              <button
                type="button"
                className="signup-toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {formData.password && (
              <div className="password-strength">
                {formData.password.length < 6 
                  ? '⚠️ Password should be at least 6 characters' 
                  : '✓ Strong password'}
              </div>
            )}
          </div>
          <div className="signup-form-group">
            <label className="signup-label">Confirm Password</label>
            <div className="signup-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="signup-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="signup-toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>
        <div className="signup-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
          <button className="signup-back-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;