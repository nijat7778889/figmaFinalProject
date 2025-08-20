import React from 'react';
import './ShopPage.css';
import heroImage from './images/Log.png';
import kotoLogo from './images/kotonLogo.png';

const ShopPage: React.FC = () => {
  return (
    <div className="shop-container">
      <header className="shop-header">
        <div className="logo">
          <img width={200} src={kotoLogo} alt="KOTO" className="logo-img" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="shop-now-btn">Shop Now</button>
          
          <div className="stats-container">
            <StatItem number="200+" label="International Brands" />
            <StatItem number="2,000+" label="High-Quality Products" />
            <StatItem number="30,000+" label="Happy Customers" />
          </div>
        </div>
        
        <div className="hero-image">
          <img src={heroImage} alt="Fashion collection" className="hero-img" />
        </div>
      </section>

      <section className="brands-section">
        <div className="brands-container">
          {['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'].map((brand) => (
            <span key={brand} className="brand">{brand}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

const StatItem: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default ShopPage;