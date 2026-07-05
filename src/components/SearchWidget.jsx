import React from 'react';
import { MapPin, ChevronDown, Calendar, Users } from 'lucide-react';

export default function SearchWidget({
  widgetParams,
  setWidgetParams,
  openDropdown,
  setOpenDropdown,
  adultCount,
  setAdultCount,
  roomCount,
  setRoomCount,
  handleWidgetSearch
}) {
  return (
    <div className="search-widget-container">
      <div className="search-widget" onClick={(e) => e.stopPropagation()}>

        {/* Destination Dropdown */}
        <div
          className={`widget-field ${openDropdown === 'destination' ? 'active' : ''}`}
          onClick={() => setOpenDropdown(prev => prev === 'destination' ? null : 'destination')}
        >
          <div className="field-content">
            <span className="field-label">Where are you going?</span>
            <div className="field-value-row">
              <MapPin className="field-value-icon" />
              <span className="field-value-text">{widgetParams.destination}</span>
              <ChevronDown className="chevron-icon-inline" />
            </div>
          </div>

          {openDropdown === 'destination' && (
            <div className="widget-dropdown">
              {['Pune & Lonavala', 'Pune Only', 'Lonavala Only', 'Mumbai'].map(dest => (
                <div
                  key={dest}
                  className={`dropdown-item ${widgetParams.destination === dest ? 'active' : ''}`}
                  onClick={() => setWidgetParams(prev => ({ ...prev, destination: dest }))}
                >
                  {dest}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Check-in Dropdown */}
        <div
          className={`widget-field ${openDropdown === 'checkin' ? 'active' : ''}`}
          onClick={() => setOpenDropdown(prev => prev === 'checkin' ? null : 'checkin')}
        >
          <div className="field-content">
            <span className="field-label">Check-in</span>
            <div className="field-value-row">
              <Calendar className="field-value-icon" />
              <span className="field-value-text">{widgetParams.checkin}</span>
              <ChevronDown className="chevron-icon-inline" />
            </div>
          </div>

          {openDropdown === 'checkin' && (
            <div className="widget-dropdown">
              {['Today', 'Tomorrow', 'Next Friday'].map(opt => (
                <div
                  key={opt}
                  className={`dropdown-item ${widgetParams.checkin === opt ? 'active' : ''}`}
                  onClick={() => setWidgetParams(prev => ({ ...prev, checkin: opt }))}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Check-out Dropdown */}
        <div
          className={`widget-field ${openDropdown === 'checkout' ? 'active' : ''}`}
          onClick={() => setOpenDropdown(prev => prev === 'checkout' ? null : 'checkout')}
        >
          <div className="field-content">
            <span className="field-label">Check-out</span>
            <div className="field-value-row">
              <Calendar className="field-value-icon" />
              <span className="field-value-text">{widgetParams.checkout}</span>
              <ChevronDown className="chevron-icon-inline" />
            </div>
          </div>

          {openDropdown === 'checkout' && (
            <div className="widget-dropdown">
              {[
                { display: 'Today (1 Night)', value: 'Today' },
                { display: 'Tomorrow (1 Night)', value: 'Tomorrow' },
                { display: 'Day After (2 Nights)', value: 'Day After Tomorrow' }
              ].map(opt => (
                <div
                  key={opt.value}
                  className={`dropdown-item ${widgetParams.checkout === opt.value ? 'active' : ''}`}
                  onClick={() => setWidgetParams(prev => ({ ...prev, checkout: opt.value }))}
                >
                  {opt.display}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Guests & Counter Dropdown */}
        <div
          className={`widget-field ${openDropdown === 'guests' ? 'active' : ''}`}
          onClick={() => setOpenDropdown(prev => prev === 'guests' ? null : 'guests')}
        >
          <div className="field-content">
            <span className="field-label">Guests & Rooms</span>
            <div className="field-value-row">
              <Users className="field-value-icon" />
              <span className="field-value-text">{widgetParams.guests}</span>
              <ChevronDown className="chevron-icon-inline" />
            </div>
          </div>

          {openDropdown === 'guests' && (
            <div className="widget-dropdown guests-dropdown-box">
              <div className="guests-counter-row">
                <span>Adults</span>
                <div className="counter-ctrls">
                  <button
                    className="counter-btn"
                    onClick={(e) => { e.stopPropagation(); if (adultCount > 1) setAdultCount(c => c - 1); }}
                  >-</button>
                  <span className="counter-val">{adultCount}</span>
                  <button
                    className="counter-btn"
                    onClick={(e) => { e.stopPropagation(); setAdultCount(c => c + 1); }}
                  >+</button>
                </div>
              </div>
              <div className="guests-counter-row">
                <span>Rooms</span>
                <div className="counter-ctrls">
                  <button
                    className="counter-btn"
                    onClick={(e) => { e.stopPropagation(); if (roomCount > 1) setRoomCount(c => c - 1); }}
                  >-</button>
                  <span className="counter-val">{roomCount}</span>
                  <button
                    className="counter-btn"
                    onClick={(e) => { e.stopPropagation(); setRoomCount(c => c + 1); }}
                  >+</button>
                </div>
              </div>
              <button
                className="apply-guests-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setWidgetParams(prev => ({
                    ...prev,
                    guests: `${adultCount} Guest${adultCount > 1 ? 's' : ''}, ${roomCount} Room${roomCount > 1 ? 's' : ''}`
                  }));
                  setOpenDropdown(null);
                }}
              >
                Apply Selection
              </button>
            </div>
          )}
        </div>

        {/* Search Submit CTA */}
        <button className="search-deals-btn" onClick={handleWidgetSearch}>
          <span>Search Deals</span>
        </button>
      </div>
    </div>
  );
}
