import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-decorative-circle circle-1"></div>
      <div className="home-decorative-circle circle-2"></div>
      <div className="home-card">
        <h1 className="home-title">Welcome</h1>
        <p className="home-subtitle">
          Your journey begins here. Join our community today or continue where you left off.
        </p>
        <div className="home-buttons">
          <button 
            className="home-btn home-btn-login" 
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="home-btn home-btn-signup" 
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
