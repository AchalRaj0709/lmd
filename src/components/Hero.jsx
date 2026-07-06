import React from 'react';
import { Building, Tag, ShieldCheck } from 'lucide-react';

export default function Hero({ activeTab, children }) {
  const isHome = activeTab === 'home';

  return (
    <section className={`hero-section ${isHome ? 'home-hero' : ''}`}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          {isHome ? (
            <>Live Last-Minute Deals <br />in <span className="highlight-text">Pune & Lonavala</span></>
          ) : (
            <>Live Last-Minute Stay Deals <br />in <span className="highlight-text">Pune & Lonavala</span></>
          )}
        </h1>
        <p className="hero-subtitle">Hotels <span className="hero-bullet">•</span> Villas <span className="hero-bullet">•</span> Camping | Book Today, Stay Today</p>

        {isHome && (
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="hero-stat-icon-box purple">
                <Building />
              </div>
              <div className="hero-stat-info">
                <span className="hero-stat-val">77+</span>
                <span className="hero-stat-label">Properties</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-icon-box blue">
                <span className="material-symbols-outlined" style={{ fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>book</span>
              </div>
              <div className="hero-stat-info">
                <span className="hero-stat-val">4,000+</span>
                <span className="hero-stat-label">Bookings</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-icon-box pink">
                <Tag />
              </div>
              <div className="hero-stat-info">
                <span className="hero-stat-val">Up to 70%</span>
                <span className="hero-stat-label">Savings</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-icon-box violet">
                <ShieldCheck />
              </div>
              <div className="hero-stat-info">
                <span className="hero-stat-val">Instant</span>
                <span className="hero-stat-label">Confirmation</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </section>
  );
}
