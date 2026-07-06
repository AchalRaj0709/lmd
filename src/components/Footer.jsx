import React from 'react';
import { Phone, Send, Check, Lock } from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer({ handleNewsletterSubmit }) {
  return (
    <footer className="main-footer">
      <div className="footer-top-grid">
        <div className="footer-col brand-col">
          <h2 className="footer-logo">
            Last <br />
            Minutes <br />
            Deal.
          </h2>
          <p className="footer-brand-text">
            Premium curated journeys for the spontaneous <br />
            traveler. Discover hidden gems and luxury <br />
            deals <br />
            in real-time.
          </p>
          <div className="promo-card">
            <div className="promo-icon-box">
              🏨
            </div>
            <div className="promo-content">
              <h4 className="promo-title">Save More Tonight</h4>
              <p className="promo-desc">
                Great stays. Bigger savings. <br />
                Only on Last Minutes Deal.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links-list">
            {['About Us', 'How It Works', 'Help Center', 'Careers', 'Terms of Service', 'Privacy Policy'].map(link => (
              <li key={link}>
                <a href="#">
                  <span>{link}</span>
                  <span className="link-arrow">&gt;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col links-col">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links-list">
            {['Booking Guide', 'Cancellation Policy', 'Payment Options', 'Contact Us', 'FAQ'].map(link => (
              <li key={link}>
                <a href="#">
                  <span>{link}</span>
                  <span className="link-arrow">&gt;</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="support-hotline-box">
            <div className="hotline-icon-box">
              <Phone style={{ width: '18px', height: '18px' }} />
            </div>
            <div className="hotline-content">
              <span className="hotline-sub">Need Help? Call Us</span>
              <span className="hotline-num">+91 98765 43210</span>
              <span className="hotline-hours">Mon - Sun, 9 AM - 9 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-col newsletter-col">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="newsletter-text">
            Get recent news and updates on best last-<br />
            minute deals.
          </p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" name="newsletterEmail" placeholder="Enter your email address" required />
            <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
              <Send style={{ width: '16px', height: '16px' }} />
            </button>
          </form>
          <span className="newsletter-note">
            <Lock className="note-icon" size={14} /> No spam. Unsubscribe anytime.
          </span>

          {/* Landscape Silhouette Art */}
          <div className="silhouette-wrapper">
            <svg className="footer-silhouette" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,90 Q50,85 100,90 T200,90 T300,90 L300,100 L0,100 Z" fill="rgba(255,255,255,0.06)" />
              <rect x="180" y="30" width="60" height="60" rx="3" fill="rgba(255,255,255,0.07)" />
              <rect x="185" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="197" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="209" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="221" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />

              <rect x="185" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="197" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="209" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="221" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />

              <rect x="185" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="197" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="209" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="221" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />

              <rect x="185" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="197" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="209" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="221" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" />

              <path d="M255,90 Q252,70 258,50" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
              <path d="M258,50 Q248,45 240,52 Q250,40 258,50 Q268,45 275,55 Q262,43 258,50" fill="rgba(255,255,255,0.15)" />

              <path d="M272,90 Q270,75 274,60" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              <path d="M274,60 Q264,55 256,62 Q266,50 274,60 Q284,55 291,65 Q278,53 274,60" fill="rgba(255,255,255,0.15)" />
            </svg>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="social-connect">
          <span>Connect With Us</span>
          <div className="social-icons">
            <a href="#" className="social-icon-btn" aria-label="Facebook"><Facebook /></a>
            <a href="#" className="social-icon-btn" aria-label="Instagram"><Instagram /></a>
            <a href="#" className="social-icon-btn" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>

        <div className="payment-accept">
          <span>We Accept</span>
          <div className="payment-logos">
            <span className="pay-logo visa">VISA</span>
            <span className="pay-logo mastercard">
              <span className="mc-circles">
                <span className="mc-circle red"></span>
                <span className="mc-circle orange"></span>
              </span>
              mastercard
            </span>
            <span className="pay-logo amex">AMEX</span>
            <span className="pay-logo upi">UPI</span>
            <span className="pay-logo netbanking">NET BANKING</span>
          </div>
        </div>

        <div className="footer-safety-badge">
          <div className="safety-icon-box">
            <Check className="safety-icon" style={{ width: '16px', height: '16px' }} />
          </div>
          <div className="safety-content">
            <span className="safety-title">Your data is safe with us.</span>
            <span className="safety-subtitle">100% Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
