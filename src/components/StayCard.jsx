import React from 'react';
import { Home as HomeIcon, Building, Tent, Heart, MapPin, Star } from 'lucide-react';

export default function StayCard({ stay, isFav, toggleFavorite, handleOpenBooking }) {
  let CatIconComponent = Building;
  if (stay.type === 'Villa') CatIconComponent = HomeIcon;
  if (stay.type === 'Camping') CatIconComponent = Tent;

  return (
    <div className="stay-card">
      <div className="card-img-wrapper">
        <span className="discount-badge">{stay.discount}</span>
        <button
          className={`fav-btn ${isFav ? 'active' : ''}`}
          onClick={(e) => toggleFavorite(stay.id, e)}
          title={isFav ? 'Remove from Saved' : 'Save Deal'}
        >
          <Heart 
            className={`heart-icon ${isFav ? 'bell-icon-pulse' : ''}`} 
            style={{ fill: isFav ? 'var(--primary)' : 'none' }} 
          />
        </button>
        <span className={`category-pill ${stay.type.toLowerCase()}`}>
          <CatIconComponent className="cat-icon" />
          <span>{stay.type}</span>
        </span>
        <img src={stay.image} alt={stay.name} className="card-img" loading="lazy" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{stay.name}</h3>
        <div className="card-location">
          <MapPin className="card-loc-icon" />
          <span>{stay.location}</span>
        </div>
        <div className="card-rating-row">
          <Star className="rating-star" style={{ fill: '#f59e0b', color: '#f59e0b' }} />
          <span className="rating-score">{stay.rating}</span>
          <span className="rating-count">({stay.reviews})</span>
        </div>
        <div className="card-amenities-list">
          {stay.amenities.map(amenity => (
            <span key={amenity} className="amenity-badge">{amenity}</span>
          ))}
        </div>
        <div className="card-footer">
          <div className="price-layout">
            <span className="price-deal">₹{stay.price.toLocaleString('en-IN')}</span>
            <span className="price-original">₹{stay.originalPrice.toLocaleString('en-IN')}</span>
          </div>
          <button className="book-btn" onClick={() => handleOpenBooking(stay)}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
