import React from 'react';
import { ChevronRight, ChevronDown, Info, ShieldCheck, Zap, Headphones, Tag, Building } from 'lucide-react';
import StayCard from './StayCard';

export default function StayGrid({
  activeFilter,
  handleCategorySelect,
  roomsSoldToday,
  filteredStays,
  visibleStaysLimit,
  showLoadMore,
  setShowAllDeals,
  favoritedIds,
  toggleFavorite,
  handleOpenBooking,
  triggerToast
}) {
  return (
    <>
      {/* Live Deals Stays Main Grid */}
      <main className="deals-section">
        <div className="deals-header-row">
          <div className="deals-title-area">
            <h2 className="section-title">
              <span className="flame-icon">🔥</span> Live Stay Deals Near You
            </h2>
            <p className="section-subtitle">Book now. Check-in today.</p>
          </div>
          <button
            className="view-all-link"
            onClick={() => { setShowAllDeals(true); triggerToast("Showing all stay listings!", "info"); }}
          >
            <span>View All Deals</span>
            <ChevronRight className="arrow-icon" />
          </button>
        </div>


        {/* Listings Grid */}
        <div className="deals-grid">
          {filteredStays.length === 0 ? (
            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              <Info style={{ width: '48px', height: '48px', margin: '0 auto 12px auto', strokeWidth: '1.5' }} />
              <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>No Live Deals Found</h3>
              <p>Try clearing filters or search queries to find Pune & Lonavala properties.</p>
            </div>
          ) : (
            filteredStays.slice(0, visibleStaysLimit).map(stay => (
              <StayCard
                key={stay.id}
                stay={stay}
                isFav={favoritedIds.has(stay.id)}
                toggleFavorite={toggleFavorite}
                handleOpenBooking={handleOpenBooking}
              />
            ))
          )}
        </div>

        {/* Load More Button */}
        {showLoadMore && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={() => setShowAllDeals(true)}>
              <span>Load More Deals</span>
              <ChevronDown className="btn-arrow-icon" />
            </button>
          </div>
        )}
      </main>

      {/* Features Bar */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon-box shield-purple">
              <ShieldCheck />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Verified Properties</h3>
              <p className="feature-desc">Handpicked stays you can trust</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box lightning-gold">
              <Zap />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Instant Confirmation</h3>
              <p className="feature-desc">Book in seconds & get confirmed</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box headset-teal">
              <Headphones />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">24/7 Customer Support</h3>
              <p className="feature-desc">We're here anytime you need us</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box tag-pink">
              <Tag />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Best Last-Minute Deals</h3>
              <p className="feature-desc">Save up to 70% on stays today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Activity Ticker */}
      <section className="live-activity-section">
        <div className="live-activity-container">
          {/* Column 1: Live Activity */}
          <div className="live-col activity-label-col">
            <span className="live-flame">🔥</span>
            <span className="live-title-text">Live Activity</span>
          </div>

          <div className="live-divider"></div>

          {/* Column 2: Mountain/Villa Booking */}
          <div className="live-col activity-item-col">
            <span className="activity-emoji">🏔️</span>
            <div className="activity-text">
              <span className="activity-desc">Someone booked a villa in</span>
              <span className="activity-meta">Lonavala 3 mins ago</span>
            </div>
          </div>

          <div className="live-divider"></div>

          {/* Column 3: Couple Booking */}
          <div className="live-col activity-item-col">
            <span className="activity-emoji">💑</span>
            <div className="activity-text">
              <span className="activity-desc">Couple booked a room in</span>
              <span className="activity-meta">Pune 5 mins ago</span>
            </div>
          </div>

          <div className="live-divider"></div>

          {/* Column 4: Family Booking */}
          <div className="live-col activity-item-col">
            <span className="activity-emoji">👪</span>
            <div className="activity-text">
              <span className="activity-desc">Family booked a stay in</span>
              <span className="activity-meta">Lonavala 8 mins ago</span>
            </div>
          </div>

          <div className="live-divider"></div>

          {/* Column 5: Rooms Sold Today */}
          <div className="live-col activity-sold-col">
            <Building className="sold-hotel-icon" />
            <div className="sold-text">
              <span className="sold-count-highlight">{roomsSoldToday} Rooms</span>
              <span className="sold-count-sub">sold today</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
