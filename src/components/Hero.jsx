import React from 'react';

export default function Hero({ children }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Live Last-Minute Stay Deals <br />in <span className="highlight-text">Pune & Lonavala</span>
        </h1>
        <p className="hero-subtitle">Hotels • Villas • Camping | Book Today, Stay Today</p>
      </div>
      {children}
    </section>
  );
}
