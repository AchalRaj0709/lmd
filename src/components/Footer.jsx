import React from 'react';
import { Phone, Send, Lock } from 'lucide-react';
import footerImg from '../assets/image.png';

const Facebook = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 8C16 3.582 12.418 0 8 0C3.582 0 0 3.582 0 8C0 11.9933 2.92533 15.3027 6.75 15.9027V10.3127H4.71867V7.99933H6.75V6.238C6.75 4.23333 7.94467 3.12533 9.772 3.12533C10.6467 3.12533 11.5627 3.282 11.5627 3.282V5.25067H10.5533C9.55933 5.25067 9.24933 5.86733 9.24933 6.5V8H11.468L11.1133 10.3133H9.24933V15.9033C13.0747 15.3027 16 11.9927 16 8Z" fill="white"/>
  </svg>
);

const Instagram = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 1.442C10.136 1.442 10.3893 1.45 11.2333 1.48867C13.4013 1.58733 14.414 2.616 14.5127 4.768C14.5513 5.61133 14.5587 5.86467 14.5587 8.00067C14.5587 10.1373 14.5507 10.39 14.5127 11.2333C14.4133 13.3833 13.4033 14.5127 11.2333 14.5127C10.3893 14.5513 10.1373 14.5593 8 14.5593C5.864 14.5593 5.61067 14.5513 4.76733 14.5127C2.594 14.4133 1.58667 13.38 1.488 11.2327C1.44933 10.3893 1.44133 10.1367 1.44133 8C1.44133 5.864 1.45 5.61133 1.488 4.76733C1.58733 2.616 2.59733 1.58667 4.76733 1.488C5.61133 1.45 5.864 1.442 8 1.442ZM8 0C5.82733 0 5.55533 0.00933333 4.702 0.048C1.79667 0.181333 0.182 1.79333 0.0486667 4.70133C0.00933333 5.55533 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79333 15.8187 4.70133 15.952C5.55533 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C14.2013 15.8187 15.82 14.2067 15.9513 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55533 15.952 4.702C15.8213 1.79933 14.2073 0.182 11.2993 0.0486667C10.4453 0.00933333 10.1727 0 8 0V0ZM8 3.892C5.73133 3.892 3.892 5.73133 3.892 8C5.73133 8 5.73133 12.1087 8 12.1087C10.2687 12.1087 12.1087 10.2687 12.1087 8C12.1087 5.73133 10.2687 3.892 8 3.892ZM8 10.6667C6.52733 10.6667 5.33333 9.47333 5.33333 8C5.33333 6.52733 6.52733 5.33333 8 5.33333C9.47267 5.33333 10.6667 6.52733 10.6667 8C10.6667 9.47333 9.47267 10.6667 8 10.6667ZM12.2707 2.77C11.74 2.77 11.31 3.2 11.31 3.73C11.31 4.26 11.74 4.69 12.2707 4.69C12.8007 4.69 13.23 4.26 13.23 3.73C13.23 3.2 12.8007 2.77 12.2707 2.77Z" fill="white"/>
  </svg>
);

const Twitter = (props) => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.9687 1.54911C15.3697 1.81285 14.7351 1.98694 14.0853 2.06578C14.7694 1.65461 15.2816 1.00981 15.5273 0.250447C14.8933 0.620447 14.1907 0.88978 13.4427 1.03978C12.428 -0.0452616 10.8107 -0.312862 9.50062 0.387508C8.19052 1.08788 7.5147 2.58133 7.85333 4.02778C5.12667 3.89911 2.71133 2.58911 1.09333 0.610447C0.799196 1.11032 0.645776 1.68046 0.649333 2.26045C0.649333 3.40045 1.22933 4.40245 2.108 4.99111C1.58724 4.97454 1.07798 4.83374 0.622667 4.58045V4.62045C0.617924 6.18571 1.7192 7.53648 3.25333 7.84711C2.7722 7.97603 2.26828 7.9954 1.77867 7.90378C2.2107 9.24039 3.44355 10.1554 4.848 10.1818C3.68769 11.0924 2.25498 11.5866 0.78 11.5851C0.52 11.5851 0.260667 11.5698 0 11.5404C1.50381 12.5033 3.25234 13.0144 5.038 13.0131C11.0733 13.0131 14.37 8.01578 14.37 3.68978C14.37 3.54978 14.37 3.40978 14.36 3.26978C15.0048 2.80378 15.5603 2.22543 16 1.56245L15.9687 1.54911Z" fill="white"/>
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
            <img src={footerImg} alt="Footer Silhouette" className="footer-silhouette" />
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
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginRight: '8px' }}>
            <rect width="34" height="34" rx="17" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.166 12.055C12.0611 12.019 14.8448 10.9335 17 9C19.155 10.9338 21.9387 12.0197 24.834 12.056C24.944 12.706 25 13.376 25 14.057C25 19.282 21.66 23.727 17 25.374C12.34 23.726 9 19.281 9 14.056C9 13.374 9.057 12.706 9.166 12.055ZM20.707 15.763C21.086 15.3706 21.0806 14.7469 20.6948 14.3612C20.3091 13.9754 19.6854 13.97 19.293 14.349L16 17.642L14.707 16.349C14.3146 15.97 13.6909 15.9754 13.3052 16.3612C12.9194 16.7469 12.914 17.3706 13.293 17.763L15.293 19.763C15.6835 20.1534 16.3165 20.1534 16.707 19.763L20.707 15.763Z" fill="#22C55E"/>
          </svg>
          <div className="safety-content">
            <span className="safety-title">Your data is safe with us.</span>
            <span className="safety-subtitle">100% Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
