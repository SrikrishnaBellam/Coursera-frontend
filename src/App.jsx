import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import Cart from './CartItem';

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <div className="landing_content">
          <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
          <button className="get-started-button" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
        <div className="aboutus_container">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/products');
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage onGetStarted={handleGetStartedClick} />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
