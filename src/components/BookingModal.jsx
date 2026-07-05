import React from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';

export default function BookingModal({
  bookingModalOpen,
  setBookingModalOpen,
  selectedStay,
  bookingConfirmed,
  handleConfirmBooking,
  guestName,
  setGuestName,
  guestPhone,
  setGuestPhone,
  checkinDate,
  setCheckinDate
}) {
  if (!bookingModalOpen || !selectedStay) return null;

  return (
    <div className="booking-modal-overlay active">
      <div className="booking-modal">
        <button className="close-modal-btn" onClick={() => setBookingModalOpen(false)}>
          <X style={{ width: '18px', height: '18px' }} />
        </button>
        <div className="modal-body-wrapper">
          {!bookingConfirmed ? (
            <>
              <h3 className="modal-title">Complete Last-Minute Booking</h3>
              <p className="modal-subtitle">Secure your stay at <strong>{selectedStay.name}</strong> ({selectedStay.type})</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '20px 0', padding: '12px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <img src={selectedStay.image} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} alt={selectedStay.name} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>{selectedStay.name}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <MapPin style={{ width: '12px', height: '12px' }} />{selectedStay.location}
                  </p>
                  <p style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '14px', marginTop: '2px' }}>₹{selectedStay.price.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <form className="booking-form" onSubmit={handleConfirmBooking}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter guest full name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter 10-digit number"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Check-in Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkinDate}
                    onChange={(e) => setCheckinDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <button type="submit" className="confirm-booking-btn">Confirm Instant Booking</button>
              </form>
            </>
          ) : (
            <div className="success-checkmark-box">
              <div className="checkmark-circle">
                <CheckCircle2 style={{ width: '40px', height: '40px', strokeWidth: '3px' }} />
              </div>
              <h3 className="modal-title">Booking Confirmed!</h3>
              <p className="modal-subtitle" style={{ marginTop: '8px' }}>
                Thank you <strong>{guestName}</strong>! Your stay at <strong>{selectedStay.name}</strong> has been successfully booked for <strong>{checkinDate}</strong>.
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
                An instant confirmation SMS has been sent to your number.
              </p>
              <button
                className="confirm-booking-btn"
                onClick={() => setBookingModalOpen(false)}
                style={{ marginTop: '24px', width: '150px', backgroundColor: 'var(--text-dark)' }}
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
