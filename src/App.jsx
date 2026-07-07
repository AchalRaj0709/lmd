import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchWidget from './components/SearchWidget';
import StayGrid from './components/StayGrid';
import FavoriteDrawer from './components/FavoriteDrawer';
import BookingPage from './components/BookingPage';
import PaymentSuccessPage from './components/PaymentSuccessPage';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import StayDetails from './components/StayDetails';

// Stays Data Array
const INITIAL_STAYS_DATA = [
  {
    id: 1,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 7,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 9,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 11,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 12,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 13,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 14,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 15,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 16,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 17,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 18,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 19,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 20,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 21,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 22,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 23,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 24,
    name: "Sunroof Hotel",
    type: "Hotel",
    location: "Hinjewadi, Pune",
    rating: 4.4,
    reviews: 120,
    price: 2199,
    originalPrice: 4500,
    discount: "UP TO 50% OFF",
    amenities: ["Wi-Fi", "Pool", "2 Guests"],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtdWx0aXN0b3JleSUyMGhvdGVsJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8fDA%3D"
  }
];

export default function App() {
  // App states
  const [staysData, setStaysData] = useState(INITIAL_STAYS_DATA);
  const [favoritedIds, setFavoritedIds] = useState(() => {
    return new Set(JSON.parse(localStorage.getItem('favStays')) || []);
  });
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('home');
  const [showAllDeals, setShowAllDeals] = useState(false);
  const [roomsSoldToday, setRoomsSoldToday] = useState(12);
  const [headerSearchQuery, setHeaderSearchQuery] = useState('');

  // Widget Selection States
  const [widgetParams, setWidgetParams] = useState({
    destination: 'Pune & Lonavala',
    checkin: 'Today',
    checkout: 'Today',
    guests: '2 Guests, 1 Room'
  });

  // Dropdown States
  const [openDropdown, setOpenDropdown] = useState(null); // 'destination', 'checkin', 'checkout', 'guests', or null
  const [adultCount, setAdultCount] = useState(2);
  const [roomCount, setRoomCount] = useState(1);

  // Modals & Drawers States
  const [favDrawerOpen, setFavDrawerOpen] = useState(false);
  const [isBookingView, setIsBookingView] = useState(false);
  const [isSuccessView, setIsSuccessView] = useState(false);
  const [selectedStay, setSelectedStay] = useState(null);
  const [selectedStayForDetails, setSelectedStayForDetails] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [checkinDate, setCheckinDate] = useState(() => new Date().toISOString().split('T')[0]);

  // Notifications States
  const [toasts, setToasts] = useState([]);

  // Close widgets on click outside
  useEffect(() => {
    const handleDocumentClick = () => {
      setOpenDropdown(null);
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem('favStays', JSON.stringify(Array.from(favoritedIds)));
  }, [favoritedIds]);

  // Toast notifier helper
  const triggerToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto dismiss
    setTimeout(() => {
      setToasts((prev) => prev.filter(t => t.id !== id));
    }, 3800);
  };

  // Toggle Favorite
  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation();
    const nextSet = new Set(favoritedIds);
    if (nextSet.has(id)) {
      nextSet.delete(id);
      triggerToast("Removed from saved deals", "info");
    } else {
      nextSet.add(id);
      triggerToast("Added to saved deals!", "success");
    }
    setFavoritedIds(nextSet);
  };

  // Perform search from Floating Search Widget
  const handleWidgetSearch = () => {
    triggerToast(`Searching deals for ${widgetParams.guests} in ${widgetParams.destination}...`, "info");

    let dest = widgetParams.destination.toLowerCase();
    let filtered = INITIAL_STAYS_DATA;
    if (dest.includes("pune only")) {
      filtered = INITIAL_STAYS_DATA.filter(s => s.location.toLowerCase().includes("pune") && !s.location.toLowerCase().includes("lonavala"));
    } else if (dest.includes("lonavala only")) {
      filtered = INITIAL_STAYS_DATA.filter(s => s.location.toLowerCase().includes("lonavala"));
    } else if (dest.includes("mumbai")) {
      filtered = [];
    }

    setStaysData(filtered);
    setShowAllDeals(true); // show all search results
  };

  // Categories quick filter tab select
  const handleCategorySelect = (category) => {
    setActiveFilter(category);
    // If not "all", show the cards
    setStaysData(INITIAL_STAYS_DATA);
  };

  // Open Booking dialog
  const handleOpenBooking = (stay) => {
    setSelectedStay(stay);
    setBookingConfirmed(false);
    setGuestName('');
    setGuestPhone('');
    setCheckinDate(new Date().toISOString().split('T')[0]);
    setIsBookingView(true);
  };

  // Submit booking Form
  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setRoomsSoldToday(prev => prev + 1);

    triggerToast("Booking Successful!", "success");
  };

  // Submit newsletter form
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements.newsletterEmail;
    triggerToast(`Thank you! Subscription confirmed for ${emailInput.value}.`, "success");
    emailInput.value = '';
  };

  // Get active rendering stay deals
  const getFilteredStays = () => {
    let result = staysData;

    // Quick categories tabs filter
    if (activeFilter !== 'all') {
      result = result.filter(stay => stay.type === activeFilter);
    }

    // Header search query filter
    if (headerSearchQuery) {
      const query = headerSearchQuery.toLowerCase();
      result = result.filter(stay =>
        stay.name.toLowerCase().includes(query) ||
        stay.location.toLowerCase().includes(query) ||
        stay.type.toLowerCase().includes(query)
      );
    }

    return result;
  };

  const filteredStays = getFilteredStays();
  const visibleStaysLimit = showAllDeals ? filteredStays.length : Math.min(filteredStays.length, 18);
  const showLoadMore = filteredStays.length > 18 && !showAllDeals;

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

  if (isSuccessView && selectedStay) {
    return (
      <PaymentSuccessPage
        stay={selectedStay}
        checkinDate={checkinDate}
        checkoutDate={widgetParams.checkout === 'Today' ? new Date().toISOString().split('T')[0] : widgetParams.checkout}
        adultCount={adultCount}
        roomCount={roomCount}
        onGoHome={() => {
          setIsSuccessView(false);
          setSelectedStay(null);
          setSelectedStayForDetails(null);
        }}
      />
    );
  }

  if (isBookingView && selectedStay) {
    return (
      <>
        <BookingPage
          stay={selectedStay}
          onBack={() => {
            setIsBookingView(false);
          }}
          onConfirmBooking={(primaryGuestName) => {
            setRoomsSoldToday(prev => prev + 1);
            setIsBookingView(false);
            setIsSuccessView(true);
          }}
          adultCount={adultCount}
          roomCount={roomCount}
          checkinDate={checkinDate}
          checkoutDate={widgetParams.checkout === 'Today' ? new Date().toISOString().split('T')[0] : widgetParams.checkout}
        />
        <ToastContainer toasts={toasts} />
      </>
    );
  }

  if (selectedStayForDetails) {
    return (
      <>
        <StayDetails 
          stay={selectedStayForDetails}
          onBack={() => setSelectedStayForDetails(null)}
          onBookNow={() => handleOpenBooking(selectedStayForDetails)}
          isFavorite={favoritedIds.has(selectedStayForDetails.id)}
          onToggleFavorite={(e) => toggleFavorite(selectedStayForDetails.id, e)}
        />

        <ToastContainer 
          toasts={toasts}
        />
      </>
    );
  }

  return (
    <>
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        headerSearchQuery={headerSearchQuery}
        setHeaderSearchQuery={setHeaderSearchQuery}
        favoritedIdsCount={favoritedIds.size}
        setFavDrawerOpen={setFavDrawerOpen}
        triggerToast={triggerToast}
        handleCategorySelect={handleCategorySelect}
      />

      <Hero activeTab={activeTab}>
        <SearchWidget 
          widgetParams={widgetParams}
          setWidgetParams={setWidgetParams}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          adultCount={adultCount}
          setAdultCount={setAdultCount}
          roomCount={roomCount}
          setRoomCount={setRoomCount}
          handleWidgetSearch={handleWidgetSearch}
        />
      </Hero>

      <StayGrid 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeFilter={activeFilter}
        handleCategorySelect={handleCategorySelect}
        roomsSoldToday={roomsSoldToday}
        filteredStays={filteredStays}
        visibleStaysLimit={visibleStaysLimit}
        showLoadMore={showLoadMore}
        setShowAllDeals={setShowAllDeals}
        favoritedIds={favoritedIds}
        toggleFavorite={toggleFavorite}
        handleOpenBooking={handleOpenBooking}
        triggerToast={triggerToast}
        onSelectStay={(stay) => {
          setSelectedStayForDetails(stay);
          window.scrollTo(0, 0);
        }}
      />

      <Footer 
        handleNewsletterSubmit={handleNewsletterSubmit}
      />

      {/* BookingModal removed and replaced with BookingPage full-screen flow */}

      <FavoriteDrawer 
        favDrawerOpen={favDrawerOpen}
        setFavDrawerOpen={setFavDrawerOpen}
        favoritedIds={favoritedIds}
        stays={INITIAL_STAYS_DATA}
        toggleFavorite={toggleFavorite}
        handleOpenBooking={handleOpenBooking}
      />

      <ToastContainer 
        toasts={toasts}
      />
    </>
  );
}
