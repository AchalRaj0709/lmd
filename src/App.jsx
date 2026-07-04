import React, { useState, useEffect, useRef } from 'react';
import { 
  Home as HomeIcon, 
  Building, 
  Utensils, 
  MapPin, 
  Search, 
  Heart, 
  Bell, 
  User, 
  Calendar, 
  Users, 
  ChevronDown, 
  ChevronRight, 
  Zap, 
  Headphones, 
  Tag, 
  ShieldCheck, 
  Hotel, 
  Send, 
  X, 
  Trash2,
  Tent,
  CheckCircle2,
  Info,
  Phone
} from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// Stays Data Array with the user-provided SVG placeholder image
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
  const [activeTab, setActiveTab] = useState('stay');
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
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedStay, setSelectedStay] = useState(null);
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
    setBookingModalOpen(true);
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

  return (
    <>
      {/* Header Navigation */}
      <header className="main-header">
        <div className="header-container">
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
              {favoritedIds.size > 0 && (
                <span className="badge-count">{favoritedIds.size}</span>
              )}
            </button>
            <button 
              className="action-btn animate-bell"
              onClick={() => triggerToast("You have 1 new deal alert: up to 60% off in Lonavala tonight!", "info")}
              title="Notifications"
            >
              <Bell className="action-icon" />
              <span className="badge-dot"></span>
            </button>
            <div className="user-avatar" title="My Profile" onClick={() => triggerToast("Profile dashboard coming soon!", "info")}>
              <User className="avatar-icon" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">
            Live Last-Minute Stay Deals <br />in <span class="highlight-text">Pune & Lonavala</span>
          </h1>
          <p class="hero-subtitle">Hotels • Villas • Camping | Book Today, Stay Today</p>
        </div>

        {/* Floating Search Widget */}
        <div class="search-widget-container">
          <div class="search-widget" onClick={(e) => e.stopPropagation()}>
            
            {/* Destination Dropdown */}
            <div 
              className={`widget-field ${openDropdown === 'destination' ? 'active' : ''}`}
              onClick={() => setOpenDropdown(prev => prev === 'destination' ? null : 'destination')}
            >
              <div class="field-icon-box">
                <MapPin className="field-icon" />
              </div>
              <div class="field-content">
                <span class="field-label">Where are you going?</span>
                <span class="field-value">{widgetParams.destination}</span>
              </div>
              <ChevronDown className="chevron-icon" />
              
              {openDropdown === 'destination' && (
                <div class="widget-dropdown">
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
              <div class="field-icon-box">
                <Calendar className="field-icon" />
              </div>
              <div class="field-content">
                <span class="field-label">Check-in</span>
                <span class="field-value">{widgetParams.checkin}</span>
              </div>
              <ChevronDown className="chevron-icon" />
              
              {openDropdown === 'checkin' && (
                <div class="widget-dropdown">
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
              <div class="field-icon-box">
                <Calendar className="field-icon" />
              </div>
              <div class="field-content">
                <span class="field-label">Check-out</span>
                <span class="field-value">{widgetParams.checkout}</span>
              </div>
              <ChevronDown className="chevron-icon" />
              
              {openDropdown === 'checkout' && (
                <div class="widget-dropdown">
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
              <div class="field-icon-box">
                <Users className="field-icon" />
              </div>
              <div class="field-content">
                <span class="field-label">Guests & Rooms</span>
                <span class="field-value">{widgetParams.guests}</span>
              </div>
              <ChevronDown className="chevron-icon" />
              
              {openDropdown === 'guests' && (
                <div class="widget-dropdown guests-dropdown-box">
                  <div class="guests-counter-row">
                    <span>Adults</span>
                    <div class="counter-ctrls">
                      <button 
                        class="counter-btn"
                        onClick={(e) => { e.stopPropagation(); if (adultCount > 1) setAdultCount(c => c - 1); }}
                      >-</button>
                      <span class="counter-val">{adultCount}</span>
                      <button 
                        class="counter-btn"
                        onClick={(e) => { e.stopPropagation(); setAdultCount(c => c + 1); }}
                      >+</button>
                    </div>
                  </div>
                  <div class="guests-counter-row">
                    <span>Rooms</span>
                    <div class="counter-ctrls">
                      <button 
                        class="counter-btn"
                        onClick={(e) => { e.stopPropagation(); if (roomCount > 1) setRoomCount(c => c - 1); }}
                      >-</button>
                      <span class="counter-val">{roomCount}</span>
                      <button 
                        class="counter-btn"
                        onClick={(e) => { e.stopPropagation(); setRoomCount(c => c + 1); }}
                      >+</button>
                    </div>
                  </div>
                  <button 
                    class="apply-guests-btn"
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
            <button class="search-deals-btn" onClick={handleWidgetSearch}>
              <span>Search Deals</span>
            </button>
          </div>
        </div>
      </section>

      {/* Live Deals Stays Main Grid */}
      <main class="deals-section">
        <div class="deals-header-row">
          <div class="deals-title-area">
            <h2 class="section-title">
              <span class="flame-icon">🔥</span> Live Stay Deals Near You
            </h2>
            <p class="section-subtitle">Book now. Check-in today.</p>
          </div>
          <button 
            className="view-all-link"
            onClick={() => { setShowAllDeals(true); triggerToast("Showing all stay listings!", "info"); }}
          >
            <span>View All Deals</span>
            <ChevronRight className="arrow-icon" />
          </button>
        </div>

        {/* Filter categories tabs */}
        <div class="deals-filter-bar">
          {[
            { filter: 'all', label: 'All Stays' },
            { filter: 'Hotel', label: 'Hotels' },
            { filter: 'Villa', label: 'Villas' },
            { filter: 'Camping', label: 'Camping' }
          ].map(tab => (
            <button 
              key={tab.filter}
              className={`filter-tab ${activeFilter === tab.filter ? 'active' : ''}`}
              onClick={() => handleCategorySelect(tab.filter)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div class="deals-grid">
          {filteredStays.length === 0 ? (
            <div class="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              <Info style={{ width: '48px', height: '48px', margin: '0 auto 12px auto', strokeWidth: '1.5' }} />
              <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>No Live Deals Found</h3>
              <p>Try clearing filters or search queries to find Pune & Lonavala properties.</p>
            </div>
          ) : (
            filteredStays.slice(0, visibleStaysLimit).map(stay => {
              const isFav = favoritedIds.has(stay.id);
              let CatIconComponent = Building;
              if (stay.type === 'Villa') CatIconComponent = HomeIcon;
              if (stay.type === 'Camping') CatIconComponent = Tent;

              return (
                <div key={stay.id} class="stay-card">
                  <div class="card-img-wrapper">
                    <span class="discount-badge">{stay.discount}</span>
                    <button 
                      className={`fav-btn ${isFav ? 'active' : ''}`}
                      onClick={(e) => toggleFavorite(stay.id, e)}
                      title={isFav ? 'Remove from Saved' : 'Save Deal'}
                    >
                      <Heart className={`heart-icon ${isFav ? 'bell-icon-pulse' : ''}`} style={{ fill: isFav ? 'var(--primary)' : 'none' }} />
                    </button>
                    <span className={`category-pill ${stay.type.toLowerCase()}`}>
                      <CatIconComponent className="cat-icon" />
                      <span>{stay.type}</span>
                    </span>
                    <img src={stay.image} alt={stay.name} class="card-img" loading="lazy" />
                  </div>
                  
                  <div class="card-content">
                    <h3 class="card-title">{stay.name}</h3>
                    <div class="card-location">
                      <MapPin className="card-loc-icon" />
                      <span>{stay.location}</span>
                    </div>
                    <div class="card-rating-row">
                      <Zap className="rating-star" style={{ fill: '#f59e0b', color: '#f59e0b' }} />
                      <span class="rating-score">{stay.rating}</span>
                      <span class="rating-count">({stay.reviews})</span>
                    </div>
                    <div class="card-amenities-list">
                      {stay.amenities.map(amenity => (
                        <span key={amenity} class="amenity-badge">{amenity}</span>
                      ))}
                    </div>
                    <div class="card-footer">
                      <div class="price-layout">
                        <span class="price-deal">₹{stay.price.toLocaleString('en-IN')}</span>
                        <span class="price-original">₹{stay.originalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <button class="book-btn" onClick={() => handleOpenBooking(stay)}>Book Now</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Load More Button */}
        {showLoadMore && (
          <div class="load-more-container">
            <button class="load-more-btn" onClick={() => setShowAllDeals(true)}>
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

      {/* Main Footer */}
      <footer className="main-footer">
        <div className="footer-top-grid">
          <div className="footer-col brand-col">
            <h2 className="footer-logo">
              Last <br />
              Minutes <br />
              Deal<span className="logo-dot">.</span>
            </h2>
            <p className="footer-brand-text">
              Premium curated journeys for the spontaneous traveler. Discover hidden gems and luxury deals in real-time.
            </p>
            <div className="promo-card">
              <div className="promo-icon-box">
                <Hotel className="promo-icon" />
              </div>
              <div className="promo-content">
                <h4 className="promo-title">Save More Tonight</h4>
                <p className="promo-desc">Great stays. Bigger savings. Only on Last Minutes Deal.</p>
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
            <p className="newsletter-text">Get recent news and updates on best last-minute deals.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" name="newsletterEmail" placeholder="Enter your email address" required />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <Send style={{ width: '16px', height: '16px' }} />
              </button>
            </form>
            <span className="newsletter-note">
              <ShieldCheck className="note-icon" /> No spam. Unsubscribe anytime.
            </span>
            
            {/* Landscape Silhouette Art */}
            <div className="silhouette-wrapper">
              <svg className="footer-silhouette" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,90 Q50,85 100,90 T200,90 T300,90 L300,100 L0,100 Z" fill="rgba(255,255,255,0.06)"/>
                <rect x="180" y="30" width="60" height="60" rx="3" fill="rgba(255,255,255,0.07)"/>
                <rect x="185" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="197" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="209" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="221" y="36" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                
                <rect x="185" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="197" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="209" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="221" y="48" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                
                <rect x="185" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="197" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="209" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="221" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>

                <rect x="185" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="197" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="209" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>
                <rect x="221" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)"/>

                <path d="M255,90 Q252,70 258,50" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5"/>
                <path d="M258,50 Q248,45 240,52 Q250,40 258,50 Q268,45 275,55 Q262,43 258,50" fill="rgba(255,255,255,0.15)"/>
                
                <path d="M272,90 Q270,75 274,60" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                <path d="M274,60 Q264,55 256,62 Q266,50 274,60 Q284,55 291,65 Q278,53 274,60" fill="rgba(255,255,255,0.15)"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="social-connect">
            <span>Connect With Us</span>
            <div className="social-icons">
              <a href="#" className="social-icon-btn"><Facebook /></a>
              <a href="#" className="social-icon-btn"><Instagram /></a>
              <a href="#" className="social-icon-btn"><Twitter /></a>
            </div>
          </div>
          
          <div className="payment-accept">
            <span>We Accept</span>
            <div className="payment-logos">
              <span className="pay-logo visa">VISA</span>
              <span className="pay-logo mastercard">mastercard</span>
              <span className="pay-logo amex">AMEX</span>
              <span className="pay-logo upi">UPI</span>
              <span className="pay-logo netbanking">NET BANKING</span>
            </div>
          </div>

          <div className="footer-safety-badge">
            <div className="safety-icon-box">
              <ShieldCheck className="safety-icon" />
            </div>
            <div className="safety-content">
              <span className="safety-title">Your data is safe with us.</span>
              <span className="safety-subtitle">100% Secure Payments</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Dialog Modal */}
      {bookingModalOpen && selectedStay && (
        <div className="booking-modal-overlay active">
          <div class="booking-modal">
            <button class="close-modal-btn" onClick={() => setBookingModalOpen(false)}>
              <X style={{ width: '18px', height: '18px' }} />
            </button>
            <div class="modal-body-wrapper">
              {!bookingConfirmed ? (
                <>
                  <h3 class="modal-title">Complete Last-Minute Booking</h3>
                  <p class="modal-subtitle">Secure your stay at <strong>{selectedStay.name}</strong> ({selectedStay.type})</p>
                  
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

                  <form class="booking-form" onSubmit={handleConfirmBooking}>
                    <div class="form-group">
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter guest full name" 
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        required 
                      />
                    </div>
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        class="form-control" 
                        placeholder="Enter 10-digit number" 
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        pattern="[0-9]{10}"
                        required 
                      />
                    </div>
                    <div class="form-group">
                      <label>Check-in Date</label>
                      <input 
                        type="date" 
                        class="form-control" 
                        value={checkinDate}
                        onChange={(e) => setCheckinDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required 
                      />
                    </div>
                    
                    <button type="submit" class="confirm-booking-btn">Confirm Instant Booking</button>
                  </form>
                </>
              ) : (
                <div class="success-checkmark-box">
                  <div class="checkmark-circle">
                    <CheckCircle2 style={{ width: '40px', height: '40px', strokeWidth: '3px' }} />
                  </div>
                  <h3 class="modal-title">Booking Confirmed!</h3>
                  <p class="modal-subtitle" style={{ marginTop: '8px' }}>
                    Thank you <strong>{guestName}</strong>! Your stay at <strong>{selectedStay.name}</strong> has been successfully booked for <strong>{checkinDate}</strong>.
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
                    An instant confirmation SMS has been sent to your number.
                  </p>
                  <button 
                    class="confirm-booking-btn" 
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
      )}

      {/* Saved Items Drawer */}
      {favDrawerOpen && (
        <div className="favs-drawer-overlay active" onClick={() => setFavDrawerOpen(false)}>
          <div class="favs-drawer" onClick={(e) => e.stopPropagation()}>
            <div class="drawer-header">
              <h3>My Saved Deals</h3>
              <button class="close-drawer-btn" onClick={() => setFavDrawerOpen(false)}>
                <X style={{ width: '18px', height: '18px' }} />
              </button>
            </div>
            <div class="drawer-content">
              {favoritedIds.size === 0 ? (
                <div class="empty-favs" style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
                  <Heart style={{ width: '40px', height: '40px', marginBottom: '12px', color: 'var(--text-light)' }} />
                  <p>No saved stay deals yet. Tap the heart icon on any card to save it here!</p>
                </div>
              ) : (
                INITIAL_STAYS_DATA.filter(stay => favoritedIds.has(stay.id)).map(stay => (
                  <div key={stay.id} class="fav-item-row">
                    <img src={stay.image} class="fav-item-img" alt={stay.name} />
                    <div class="fav-item-details">
                      <h4 class="fav-item-title">{stay.name} - {stay.type}</h4>
                      <span class="fav-item-price">₹{stay.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button 
                      class="remove-fav-row" 
                      onClick={(e) => toggleFavorite(stay.id, e)}
                      style={{ marginLeft: 'auto', color: 'var(--text-light)', cursor: 'pointer' }}
                    >
                      <Trash2 style={{ width: '16px', height: '16px' }} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Toast Alert Notifications Container */}
      <div class="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast-${toast.type} show`}>
            {toast.type === 'success' ? (
              <CheckCircle2 style={{ width: '16px', height: '16px' }} />
            ) : (
              <Info style={{ width: '16px', height: '16px' }} />
            )}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
