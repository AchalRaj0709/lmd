import React from 'react';
import { ChevronDown } from 'lucide-react';

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
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="field-value-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6404 1.63931C3.82599 -0.546274 7.37482 -0.546274 9.5604 1.63931C11.746 3.82489 11.746 7.37373 9.5604 9.55931L5.6004 13.5193L1.6404 9.55931C0.590077 8.50909 0 7.08462 0 5.59931C0 4.114 0.590077 2.68953 1.6404 1.63931ZM5.6004 7.19931C6.48347 7.19931 7.2004 6.48237 7.2004 5.59931C7.2004 4.71625 6.48347 3.99931 5.6004 3.99931C4.71734 3.99931 4.0004 4.71625 4.0004 5.59931C4.0004 6.48237 4.71734 7.19931 5.6004 7.19931Z" fill="#9CA3AF"/>
              </svg>
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
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="field-value-icon">
                <path d="M5.64023 6.47479V3.65479M11.2802 6.47479V3.65479M4.93523 9.29479H11.9852M3.52523 16.3448H13.3952C14.1734 16.3448 14.8052 15.713 14.8052 14.9348V6.47479C14.8052 5.69658 14.1734 5.06479 13.3952 5.06479H3.52523C2.74703 5.06479 2.11523 5.69658 2.11523 6.47479V14.9348C2.11523 15.713 2.74703 16.3448 3.52523 16.3448L5.64023 6.47479" stroke="#9CA3AF" stroke-width="1.41" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
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
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="field-value-icon">
                <path d="M5.64023 6.47479V3.65479M11.2802 6.47479V3.65479M4.93523 9.29479H11.9852M3.52523 16.3448H13.3952C14.1734 16.3448 14.8052 15.713 14.8052 14.9348V6.47479C14.8052 5.69658 14.1734 5.06479 13.3952 5.06479H3.52523C2.74703 5.06479 2.11523 5.69658 2.11523 6.47479V14.9348C2.11523 15.713 2.74703 16.3448 3.52523 16.3448L5.64023 6.47479" stroke="#9CA3AF" stroke-width="1.41" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
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
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="field-value-icon">
                <path d="M5.33333 7.52001C6.86933 7.52001 8.192 7.78882 9.14667 8.43202C10.1355 9.09868 10.6667 10.1259 10.6667 11.4667C10.6581 11.6023 10.5982 11.7296 10.4991 11.8226C10.4 11.9156 10.2692 11.9673 10.1333 11.9673C9.99744 11.9673 9.86666 11.9156 9.76758 11.8226C9.66851 11.7296 9.60858 11.6023 9.6 11.4667C9.6 10.4448 9.21813 9.76428 8.55147 9.31522C7.8496 8.84375 6.77333 8.58668 5.33333 8.58668C3.89333 8.58668 2.816 8.84375 2.1152 9.31628C1.44853 9.76535 1.06667 10.4459 1.06667 11.4677C1.05809 11.6034 0.998161 11.7306 0.899085 11.8236C0.800009 11.9166 0.669223 11.9684 0.533333 11.9684C0.397444 11.9684 0.266658 11.9166 0.167582 11.8236C0.0685056 11.7306 0.00858155 11.6034 0 11.4677C0 10.1259 0.530133 9.09868 1.51893 8.43202C2.4736 7.78882 3.79733 7.52001 5.33333 7.52001ZM10.64 7.52001C12.1749 7.52001 13.4987 7.78882 14.4533 8.43202C15.4421 9.09868 15.9733 10.1259 15.9733 11.4677C15.9733 11.6092 15.9171 11.7449 15.8171 11.8449C15.7171 11.9449 15.5815 12.0011 15.44 12.0011C15.2986 12.0011 15.1629 11.9449 15.0629 11.8449C14.9629 11.7449 14.9067 11.6092 14.9067 11.4677C14.9067 10.4459 14.5248 9.76535 13.8571 9.31628C13.3045 8.94402 12.5205 8.70828 11.5083 8.62295C11.2561 8.21107 10.9433 7.8396 10.5803 7.52108L10.64 7.52001ZM5.33333 1.55136e-05C6.2098 0.0221022 7.04295 0.385794 7.65505 1.01351C8.26714 1.64122 8.60973 2.48327 8.60973 3.36002C8.60973 4.23676 8.26714 5.07881 7.65505 5.70652C7.04295 6.33424 6.2098 6.69793 5.33333 6.72002C4.44221 6.72002 3.58758 6.36602 2.95745 5.73589C2.32733 5.10577 1.97333 4.25114 1.97333 3.36002C1.97333 2.46889 2.32733 1.61426 2.95745 0.984137C3.58758 0.354014 4.44221 1.55136e-05 5.33333 1.55136e-05ZM10.64 1.55136e-05C11.5311 1.55136e-05 12.3858 0.354014 13.0159 0.984137C13.646 1.61426 14 2.46889 14 3.36002C14 4.25114 13.646 5.10577 13.0159 5.73589C12.3858 6.36602 11.5311 6.72002 10.64 6.72002C10.0811 6.72002 9.55627 6.58135 9.09333 6.34028C9.31656 6.05958 9.50762 5.75474 9.66293 5.43148C10.0125 5.59684 10.3982 5.67113 10.7841 5.64744C11.1701 5.62375 11.5438 5.50286 11.8705 5.296C12.1972 5.08914 12.4663 4.80302 12.6527 4.46427C12.8392 4.12551 12.937 3.7451 12.937 3.35842C12.937 2.97173 12.8392 2.59132 12.6527 2.25257C12.4663 1.91381 12.1972 1.62769 11.8705 1.42083C11.5438 1.21397 11.1701 1.09308 10.7841 1.06939C10.3982 1.0457 10.0165 1.11999 9.66293 1.28535C9.50714 0.962779 9.31573 0.658663 9.09227 0.378682C9.56928 0.128357 10.1002 -0.00163448 10.6389 1.55136e-05M5.33333 1.06668C4.73721 1.08487 4.17159 1.33446 3.75636 1.76255C3.34112 2.19065 3.10889 2.76362 3.10889 3.36002C3.10889 3.95642 3.34112 4.52938 3.75636 4.95748C4.17159 5.38558 4.73721 5.63516 5.33333 5.65335C5.94156 5.65335 6.52488 5.41173 6.95497 4.98165C7.38505 4.55156 7.62667 3.96825 7.62667 3.36002C7.62667 2.75179 7.38505 2.16847 6.95497 1.73838C6.52488 1.3083 5.94156 1.06668 5.33333 1.06668Z" fill="#9CA3AF"/>
              </svg>
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
