import React from 'react';
import { X, Heart, Trash2 } from 'lucide-react';

export default function FavoriteDrawer({
  favDrawerOpen,
  setFavDrawerOpen,
  favoritedIds,
  stays,
  toggleFavorite,
  handleOpenBooking
}) {
  if (!favDrawerOpen) return null;

  return (
    <div className="favs-drawer-overlay active" onClick={() => setFavDrawerOpen(false)}>
      <div className="favs-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h3>My Saved Deals</h3>
          <button className="close-drawer-btn" onClick={() => setFavDrawerOpen(false)}>
            <X style={{ width: '18px', height: '18px' }} />
          </button>
        </div>
        <div className="drawer-content">
          {favoritedIds.size === 0 ? (
            <div className="empty-favs" style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
              <Heart style={{ width: '40px', height: '40px', marginBottom: '12px', color: 'var(--text-light)' }} />
              <p>No saved stay deals yet. Tap the heart icon on any card to save it here!</p>
            </div>
          ) : (
            stays.filter(stay => favoritedIds.has(stay.id)).map(stay => (
              <div key={stay.id} className="fav-item-row" onClick={() => { setFavDrawerOpen(false); handleOpenBooking(stay); }} style={{ cursor: 'pointer' }}>
                <img src={stay.image} className="fav-item-img" alt={stay.name} />
                <div className="fav-item-details">
                  <h4 className="fav-item-title">{stay.name} - {stay.type}</h4>
                  <span className="fav-item-price">₹{stay.price.toLocaleString('en-IN')}</span>
                </div>
                <button
                  className="remove-fav-row"
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(stay.id, e); }}
                  style={{ marginLeft: 'auto', color: 'var(--text-light)', cursor: 'pointer', border: 'none', background: 'none' }}
                >
                  <Trash2 style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
