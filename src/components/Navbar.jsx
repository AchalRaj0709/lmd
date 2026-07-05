import React from 'react';
import {
  Home as HomeIcon,
  Building,
  Utensils,
  MapPin,
  Search,
  Heart,
  Bell,
  CircleUserRound
} from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  headerSearchQuery,
  setHeaderSearchQuery,
  favoritedIdsCount,
  setFavDrawerOpen,
  triggerToast,
  handleCategorySelect
}) {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Header Left Group */}
        <div className="header-left-group">
          <div className="logo-box">
            <a href="#" className="logo-link">
              <div className="logo-stacked">
                <span className="logo-last">Last</span>
                <span className="logo-minutes">Minutes</span>
                <span className="logo-deal">Deal</span>
              </div>
            </a>
          </div>
          <div className="logo-divider"></div>

          <nav className="nav-menu">
            <button 
              className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => { setActiveTab('home'); handleCategorySelect('all'); }}
            >
              <span className="icon-wrapper">
                <HomeIcon className="nav-icon" />
              </span>
              <span>Home</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'stay' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('stay');
                document.querySelector('.deals-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="icon-wrapper">
                <Building className="nav-icon" />
              </span>
              <span>Stay</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'buffet' ? 'active' : ''}`} 
              onClick={() => {
                setActiveTab('buffet');
                triggerToast("Buffet deals coming soon!", "info");
              }}
            >
              <span className="icon-wrapper">
                <Utensils className="nav-icon" />
              </span>
              <span>Buffet</span>
            </button>
          </nav>
        </div>

        {/* Header Right Group */}
        <div className="header-right-group">
          <div className="location-pill-standalone">
            <MapPin className="pill-icon" />
            <span>Pune & Lonavala</span>
          </div>

          <div className="search-pill-standalone">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search properties or locations" 
              value={headerSearchQuery}
              onChange={(e) => setHeaderSearchQuery(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="header-actions">
            <button 
              className="action-btn" 
              onClick={() => setFavDrawerOpen(true)}
              title="Favorites"
            >
              <Heart className="action-icon" />
              {favoritedIdsCount > 0 && (
                <span className="badge-count">{favoritedIdsCount}</span>
              )}
            </button>
            <button
              className="action-btn animate-bell"
              onClick={() => triggerToast("You have 1 new deal alert: up to 60% off in Lonavala tonight!", "info")}
              title="Notifications"
            >
              <Bell size={22} className="cursor-pointer text-gray-400" />
            </button>
            <div title="My Profile" onClick={() => triggerToast("Profile dashboard coming soon!", "info")} style={{ display: 'flex', alignItems: 'center' }}>
              <CircleUserRound size={40} className="cursor-pointer text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
