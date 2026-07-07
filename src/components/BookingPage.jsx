import React, { useState } from 'react';

// --- SVG ICONS PROVIDED BY USER ---

const BackArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#4525BE"/>
  </svg>
);

const WalletIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V3H2V14H19V16H2ZM6 12C5.45 12 4.97917 11.8042 4.5875 11.4125C4.19583 11.0208 4 10.55 4 10V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H20C20.55 0 21.0208 0.195833 21.4125 0.5875C21.8042 0.979167 22 1.45 22 2V10C22 10.55 21.8042 11.0208 21.4125 11.4125C21.0208 11.8042 20.55 12 20 12H6ZM8 10C8 9.45 7.80417 8.97917 7.4125 8.5875C7.02083 8.19583 6.55 8 6 8V10H8ZM18 10H20V8C19.45 8 18.9792 8.19583 18.5875 8.5875C18.1958 8.97917 18 9.45 18 10ZM13 9C13.8333 9 14.5417 8.70833 15.125 8.125C15.7083 7.54167 16 6.83333 16 6C16 5.16667 15.7083 4.45833 15.125 3.875C14.5417 3.29167 13.8333 3 13 3C12.1667 3 11.4583 3.29167 10.875 3.875C10.2917 4.45833 10 5.16667 10 6C10 6.83333 10.2917 7.54167 10.875 8.125C11.4583 8.70833 12.1667 9 13 9ZM6 4C6.55 4 7.02083 3.80417 7.4125 3.4125C7.80417 3.02083 8 2.55 8 2H6V4ZM20 4V2H18C18 2.55 18.1958 3.02083 18.5875 3.4125C18.9792 3.80417 19.45 4 20 4Z" fill="#E91E63"/>
  </svg>
);

const GiftIcon = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15V17H18V15H2ZM2 4H4.2C4.11667 3.85 4.0625 3.69167 4.0375 3.525C4.0125 3.35833 4 3.18333 4 3C4 2.16667 4.29167 1.45833 4.875 0.875C5.45833 0.291667 6.16667 0 7 0C7.5 0 7.9625 0.129167 8.3875 0.3875C8.8125 0.645833 9.18333 0.966667 9.5 1.35L10 2L10.5 1.35C10.8 0.95 11.1667 0.625 11.6 0.375C12.0333 0.125 12.5 0 13 0C13.8333 0 14.5417 0.291667 15.125 0.875C15.7083 1.45833 16 2.16667 16 3C16 3.18333 15.9875 3.35833 15.9625 3.525C15.9375 3.69167 15.8833 3.85 15.8 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4ZM2 12H18V6H12.9L15 8.85L13.4 10L10 5.4L6.6 10L5 8.85L7.05 6H2V12ZM7 4C7.28333 4 7.52083 3.90417 7.7125 3.7125C7.90417 3.52083 8 3.28333 8 3C8 2.71667 7.90417 2.47917 7.7125 2.2875C7.52083 2.09583 7.28333 2 7 2C6.71667 2 6.47917 2.09583 6.2875 2.2875C6.09583 2.47917 6 2.71667 6 3C6 3.28333 6.09583 3.52083 6.2875 3.7125C6.47917 3.90417 6.71667 4 7 4ZM13 4C13.2833 4 13.5208 3.90417 13.7125 3.7125C13.9042 3.52083 14 3.28333 14 3C14 2.71667 13.9042 2.47917 13.7125 2.2875C13.5208 2.09583 13.2833 2 13 2C12.7167 2 12.4792 2.09583 12.2875 2.2875C12.0958 2.47917 12 2.71667 12 3C12 3.28333 12.0958 3.52083 12.2875 3.7125C12.4792 3.90417 12.7167 4 13 4Z" fill="#E91E63"/>
  </svg>
);

const PartPopperIcon = () => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 11.9583L2.91667 3.79167L8.16667 9.04167L0 11.9583ZM7.32083 6.44583L6.70833 5.83333L9.975 2.56667C10.2861 2.25556 10.6604 2.1 11.0979 2.1C11.5354 2.1 11.9097 2.25556 12.2208 2.56667L12.5708 2.91667L11.9583 3.52917L11.6083 3.17917C11.4722 3.04306 11.3021 2.975 11.0979 2.975C10.8938 2.975 10.7236 3.04306 10.5875 3.17917L7.32083 6.44583ZM4.9875 4.1125L4.375 3.5L4.725 3.15C4.86111 3.01389 4.92917 2.84861 4.92917 2.65417C4.92917 2.45972 4.86111 2.29444 4.725 2.15833L4.34583 1.77917L4.95833 1.16667L5.3375 1.54583C5.64861 1.85694 5.80417 2.22639 5.80417 2.65417C5.80417 3.08194 5.64861 3.45139 5.3375 3.7625L4.9875 4.1125ZM6.15417 5.27917L5.54167 4.66667L7.64167 2.56667C7.77778 2.43056 7.84583 2.26042 7.84583 2.05625C7.84583 1.85208 7.77778 1.68194 7.64167 1.54583L6.70833 0.6125L7.32083 0L8.25417 0.933333C8.56528 1.24444 8.72083 1.61875 8.72083 2.05625C8.72083 2.49375 8.56528 2.86806 8.25417 3.17917L6.15417 5.27917ZM8.4875 7.6125L7.875 7L8.80833 6.06667C9.11944 5.75556 9.49375 5.6 9.93125 5.6C10.3687 5.6 10.7431 5.75556 11.0542 6.06667L11.9875 7L11.375 7.6125L10.4417 6.67917C10.3056 6.54306 10.1354 6.475 9.93125 6.475C9.72708 6.475 9.55694 6.54306 9.42083 6.67917L8.4875 7.6125Z" fill="#E91E63"/>
  </svg>
);

const LockIcon = () => (
  <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 10.5C0.725 10.5 0.489583 10.4021 0.29375 10.2063C0.0979166 10.0104 0 9.775 0 9.5V4.5C0 4.225 0.0979166 3.98958 0.29375 3.79375C0.489583 3.59792 0.725 3.5 1 3.5H1.5V2.5C1.5 1.80833 1.74375 1.21875 2.23125 0.73125C2.71875 0.24375 3.30833 0 4 0C4.69167 0 5.28125 0.24375 5.76875 0.73125C6.25625 1.21875 6.5 1.80833 6.5 2.5V3.5H7C7.275 3.5 7.51042 3.59792 7.70625 3.79375C7.90208 3.98958 8 4.225 8 4.5V9.5C8 9.775 7.90208 10.0104 7.70625 10.2063C7.51042 10.4021 7.275 10.5 7 10.5H1ZM1 9.5H7V4.5H1V9.5ZM4 8C4.275 8 4.51042 7.90208 4.70625 7.70625C4.90208 7.51042 5 7.275 5 7C5 6.725 4.90208 6.48958 4.70625 6.29375C4.51042 6.09792 4.275 6 4 6C3.725 6 3.48958 6.09792 3.29375 6.29375C3.09792 6.48958 3 6.725 3 7C3 7.275 3.09792 7.51042 3.29375 7.70625C3.48958 7.90208 3.725 8 4 8ZM2.5 3.5H5.5V2.5C5.5 2.08333 5.35417 1.72917 5.0625 1.4375C4.77083 1.14583 4.41667 1 4 1C3.58333 1 3.22917 1.14583 2.9375 1.4375C2.64583 1.72917 2.5 2.08333 2.5 2.5V3.5ZM1 9.5V4.5V9.5Z" fill="#1A1C1E"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 6L11 1" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GuestBadgeIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10.5H3.5H1.16667C0.845833 10.5 0.571181 10.3858 0.342708 10.1573C0.114236 9.92882 0 9.65417 0 9.33333V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H9.33333C9.65417 0 9.92882 0.114236 10.1573 0.342708C10.3858 0.571181 10.5 0.845833 10.5 1.16667V9.33333C10.5 9.65417 10.3858 9.92882 10.1573 10.1573C9.92882 10.3858 9.65417 10.5 9.33333 10.5H7H5ZM5.25 5.83333C5.81389 5.83333 6.29514 5.63403 6.69375 5.23542C7.09236 4.83681 7.29167 4.35556 7.29167 3.79167C7.29167 3.22778 7.09236 2.74653 6.69375 2.34792C6.29514 1.94931 5.81389 1.75 5.25 1.75C4.68611 1.75 4.20486 1.94931 3.80625 2.34792C3.40764 2.74653 3.20833 3.22778 3.20833 3.79167C3.20833 4.35556 3.40764 4.83681 3.80625 5.23542C4.20486 5.63403 4.68611 5.83333 5.25 5.83333ZM1.16667 9.33333H9.33333C9.33333 9.30417 9.33333 9.19236 9.33333 8.99792C9.33333 8.80347 9.33333 8.69167 9.33333 8.6625C8.80833 8.14722 8.19826 7.74132 7.50313 7.44479C6.80799 7.14826 6.05694 7 5.25 7C4.44306 7 3.69201 7.14826 2.99688 7.44479C2.30174 7.74132 1.69167 8.14722 1.16667 8.6625C1.16667 8.69167 1.16667 8.80347 1.16667 8.99792C1.16667 9.19236 1.16667 9.30417 1.16667 9.33333Z" fill="#E91E63"/>
  </svg>
);

export default function BookingPage({
  stay,
  onBack,
  onConfirmBooking,
  adultCount = 2,
  roomCount = 1,
  checkinDate,
  checkoutDate
}) {
  // --- STATE FOR GUEST DATA ---
  const [guestsData, setGuestsData] = useState(() => {
    const initial = [];
    for (let i = 0; i < roomCount; i++) {
      initial.push({
        fullName: '',
        email: '',
        phone: '',
        arrivalPreference: 'Early Morning (8AM - 11AM)'
      });
    }
    return initial;
  });

  // --- STATE FOR PAYMENT METHOD ---
  const [paymentMethod, setPaymentMethod] = useState('pay-at-partner'); // 'pay-at-partner' or 'cashfree'

  // --- HANDLERS ---
  const handleInputChange = (index, field, value) => {
    setGuestsData(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    for (let i = 0; i < roomCount; i++) {
      if (!guestsData[i].fullName.trim()) {
        alert(`Please enter Guest Full Name for Room ${i + 1}`);
        return;
      }
      if (!guestsData[i].email.trim()) {
        alert(`Please enter Email Address for Room ${i + 1}`);
        return;
      }
      
      // Phone Number validation on rooms that require it
      const requiresContact = (roomCount === 1 && i === 0) || (roomCount > 1 && i === 1);
      if (requiresContact && !guestsData[i].phone.trim()) {
        alert(`Please enter Phone Number for Room ${i + 1}`);
        return;
      }
    }

    // Call confirmation callback with primary guest name
    const primaryName = guestsData[0]?.fullName || 'Guest';
    onConfirmBooking(primaryName);
  };

  // --- CALCULATE DATES AND PRICES ---
  const formatDateStr = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const calculateNights = (checkin, checkout) => {
    if (!checkin || !checkout) return 1;
    const date1 = new Date(checkin);
    const date2 = new Date(checkout);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const effectiveCheckoutDate = checkoutDate && checkoutDate !== checkinDate
    ? checkoutDate
    : (() => {
        if (!checkinDate) return '';
        const d = new Date(checkinDate);
        d.setDate(d.getDate() + 1);
        return d.toISOString().split('T')[0];
      })();

  const nightsCount = calculateNights(checkinDate, effectiveCheckoutDate);
  const stayPrice = stay.price || 2499;
  const stayOriginalPrice = stay.originalPrice || 6000;

  const roomSubtotal = stayPrice * nightsCount * roomCount;
  const serviceFee = 6000; // Flat ₹6000 service fee matching the Figma total
  const touristTax = 0;
  const grandTotal = roomSubtotal + serviceFee + touristTax;

  const savingPerNight = Math.max(0, stayOriginalPrice - stayPrice);
  const totalSaving = savingPerNight * nightsCount * roomCount;

  return (
    <div className="booking-page-root">
      {/* 1. Header Navigation */}
      <header className="booking-page-header">
        <button className="booking-back-btn" onClick={onBack} title="Back" type="button">
          <BackArrowIcon />
        </button>
        <div className="booking-header-titles">
          <h1 className="booking-main-title">Complete Your Booking</h1>
          <span className="booking-sub-title">
            Secure {stay.name} for your upcoming stay.
          </span>
        </div>
      </header>

      {/* 2. Main Columns Layout */}
      <form onSubmit={handleFormSubmit} className="booking-page-content">
        <div className="booking-left-column">
          
          {/* STEP 1: GUEST DETAILS */}
          <div className="booking-step-section">
            <div className="step-header-row">
              <span className="step-number-circle">1</span>
              <h2 className="step-title-text">Guest Details</h2>
            </div>

            {/* Render Guest Form dynamically for each room */}
            {guestsData.map((guest, idx) => {
              // Primary contact details are requested on Room 1 (if single room) OR Room 2 (if multiple rooms)
              const showContactDetails = (roomCount === 1 && idx === 0) || (roomCount > 1 && idx === 1);

              return (
                <div key={idx} className="room-form-card">
                  <h3 className="room-card-title">Room {idx + 1}</h3>
                  
                  <div className="booking-input-group">
                    <label className="booking-input-label">Guest Full Name</label>
                    <input
                      type="text"
                      className="booking-text-input"
                      placeholder="John Doe"
                      value={guest.fullName}
                      onChange={(e) => handleInputChange(idx, 'fullName', e.target.value)}
                      required
                    />
                  </div>

                  <div className="booking-input-group">
                    <label className="booking-input-label">Email Address</label>
                    <input
                      type="email"
                      className="booking-text-input"
                      placeholder="john@example.com"
                      value={guest.email}
                      onChange={(e) => handleInputChange(idx, 'email', e.target.value)}
                      required
                    />
                  </div>

                  {showContactDetails && (
                    <>
                      <div className="booking-input-group">
                        <label className="booking-input-label">Phone Number</label>
                        <input
                          type="tel"
                          className="booking-text-input"
                          placeholder="+1 (555) 000-0000"
                          value={guest.phone}
                          onChange={(e) => handleInputChange(idx, 'phone', e.target.value)}
                          required
                        />
                      </div>

                      <div className="booking-input-group">
                        <label className="booking-input-label">Arrival Preference</label>
                        <div className="booking-select-wrapper">
                          <select
                            className="booking-select-input"
                            value={guest.arrivalPreference}
                            onChange={(e) => handleInputChange(idx, 'arrivalPreference', e.target.value)}
                          >
                            <option value="Early Morning (8AM - 11AM)">Early Morning (8AM - 11AM)</option>
                            <option value="Mid-Day (11AM - 3PM)">Mid-Day (11AM - 3PM)</option>
                            <option value="Late Afternoon (3PM - 7PM)">Late Afternoon (3PM - 7PM)</option>
                            <option value="Night (7PM - Midnight)">Night (7PM - Midnight)</option>
                          </select>
                          <span className="select-arrow-icon">
                            <ChevronDownIcon />
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* STEP 2: PAYMENT METHOD */}
          <div className="booking-step-section">
            <div className="step-header-row">
              <span className="step-number-circle">2</span>
              <h2 className="step-title-text">Payment Method</h2>
            </div>

            {/* Option 1: Pay at Partner */}
            <div
              className={`payment-option-card ${paymentMethod === 'pay-at-partner' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('pay-at-partner')}
            >
              <div className="payment-radio-col">
                <span className="payment-radio-outer">
                  {paymentMethod === 'pay-at-partner' && <span className="payment-radio-inner" />}
                </span>
              </div>
              
              <div className="payment-details-col">
                <div className="payment-icon-row">
                  <WalletIcon />
                </div>
                <span className="payment-option-title">
                  Pay at Partner / Cash at Restaurant
                </span>
                
                <span className="payment-recommended-badge">RECOMMENDED</span>
                
                <p className="payment-option-subtext">
                  You will pay the amount directly at the restaurant. No online payment needed.
                </p>
              </div>
            </div>

            {/* Option 2: Cashfree Payments */}
            <div
              className={`payment-option-card unselected-border ${paymentMethod === 'cashfree' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('cashfree')}
            >
              <div className="payment-radio-col">
                <span className="payment-radio-outer">
                  {paymentMethod === 'cashfree' && <span className="payment-radio-inner" />}
                </span>
              </div>

              <div className="payment-details-col">
                <span className="payment-option-title bold-title">
                  Cashfree Payments
                </span>
                
                <p className="payment-option-subtext">
                  Pay securely online using UPI, Cards, Net Banking and more.
                </p>

                <div className="payment-methods-pills">
                  <span className="payment-pill">UPI</span>
                  <span className="payment-pill">VISA</span>
                  <span className="payment-pill">MASTERCARD</span>
                  <span className="payment-pill">RUPAY</span>
                  <span className="payment-pill">+5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Right Column: Booking Summary Card */}
        <div className="booking-right-column">
          <div className="booking-summary-card">
            <h2 className="summary-card-title">Booking Summary</h2>

            {/* Image Box */}
            <div className="summary-stay-image-box">
              <img
                src={stay.image || "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=80"}
                alt={stay.name}
                className="summary-stay-img"
              />
              <span className="summary-stay-badge">GREEN VALLEY</span>
              <div className="summary-stay-name-overlay">
                <h3 className="summary-stay-title">{stay.name}</h3>
              </div>
            </div>

            {/* Dates Grid */}
            <div className="summary-dates-grid">
              <div className="date-block">
                <span className="date-label">CHECK-IN</span>
                <span className="date-value-text">{formatDateStr(checkinDate)}</span>
              </div>
              <div className="date-block">
                <span className="date-label">CHECK-OUT</span>
                <span className="date-value-text">{formatDateStr(effectiveCheckoutDate)}</span>
              </div>
            </div>

            <div className="summary-divider-line" />

            {/* Guests & Nights badge */}
            <div className="summary-guests-badge-row">
              <div className="summary-guests-badge">
                <GuestBadgeIcon />
                <span>{adultCount} Guests • {nightsCount} Nights</span>
              </div>
            </div>

            {/* Pricing Breakdown Table */}
            <div className="summary-pricing-table">
              <div className="pricing-row">
                <span className="pricing-label-text">
                  {nightsCount} Nights × ₹{stayPrice.toLocaleString('en-IN')}
                </span>
                <span className="pricing-value-text">
                  ₹{roomSubtotal.toLocaleString('en-IN')}.00
                </span>
              </div>
              <div className="pricing-row">
                <span className="pricing-label-text">Service Fee</span>
                <span className="pricing-value-text">
                  ₹{serviceFee.toLocaleString('en-IN')}.00
                </span>
              </div>
              <div className="pricing-row">
                <span className="pricing-label-text">Tourist Tax</span>
                <span className="pricing-value-text">
                  ₹{touristTax.toLocaleString('en-IN')}.00
                </span>
              </div>

              <div className="summary-divider-line" />

              <div className="pricing-total-row">
                <span className="total-label-text">Total</span>
                <div className="total-price-col">
                  <span className="total-price-value">
                    ₹{grandTotal.toLocaleString('en-IN')}.00
                  </span>
                  <span className="total-subtext">Includes all taxes and fees</span>
                </div>
              </div>
            </div>

            {/* Best Price Guaranteed Box */}
            {totalSaving > 0 && (
              <div className="best-price-guaranteed-box">
                <div className="best-price-icon-wrapper">
                  <GiftIcon />
                </div>
                <div className="best-price-texts">
                  <span className="best-price-title">Best Price Guaranteed</span>
                  <span className="best-price-desc">
                    You're saving ₹{totalSaving.toLocaleString('en-IN')} on this deal
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Sticky Bottom Bar */}
        <div className="booking-sticky-footer">
          {totalSaving > 0 && (
            <div className="savings-alert-pill">
              <PartPopperIcon />
              <span className="savings-pill-text">
                You are saving ₹{totalSaving.toLocaleString('en-IN')} on this booking!
              </span>
            </div>
          )}
          
          <button type="submit" className="booking-confirm-cta-btn">
            Confirm & Pay ₹{grandTotal.toLocaleString('en-IN')}.00
          </button>
          
          <div className="secure-checkout-tag">
            <LockIcon />
            <span>100% Secure. Your data is safe with us.</span>
          </div>
        </div>
      </form>
    </div>
  );
}
