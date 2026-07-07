import React, { useState } from 'react';

// 1: Back Chevron
const BackIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 23L12 16L19 9" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
 
// 2: Share Icon
const ShareIcon = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.646 4.125 12.788C3.775 12.93 3.4 13.0007 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.071 4.125 7.213C4.475 7.355 4.78333 7.55067 5.05 7.8L12.075 3.7C12.0417 3.58333 12.021 3.471 12.013 3.363C12.005 3.255 12.0007 3.134 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.929 13.875 5.787C13.525 5.645 13.2167 5.44933 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97933 9.52933 5.988 9.638C5.99667 9.74667 6.00067 9.86733 6 10C5.99933 10.1327 5.99533 10.2537 5.988 10.363C5.98067 10.4723 5.95967 10.5847 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3543 13.875 14.213C14.225 14.0717 14.6 14.0007 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.521 17.9043 15.713 17.713C15.905 17.5217 16.0007 17.284 16 17C15.9993 16.716 15.9033 16.4787 15.712 16.288C15.5207 16.0973 15.2833 16.0013 15 16C14.7167 15.9987 14.4793 16.0947 14.288 16.288C14.0967 16.4813 14.0007 16.7187 14 17C13.9993 17.2813 14.0953 17.519 14.288 17.713C14.4807 17.907 14.718 18.0027 15 18ZM3 11C3.28333 11 3.521 10.904 3.713 10.712C3.905 10.52 4.00067 10.2827 4 10C3.99933 9.71733 3.90333 9.48 3.712 9.288C3.52067 9.096 3.28333 9 3 9C2.71667 9 2.47933 9.096 2.288 9.288C2.09667 9.48 2.00067 9.71733 2 10C1.99933 10.2827 2.09533 10.5203 2.288 10.713C2.48067 10.9057 2.718 11.0013 3 11ZM15.713 3.712C15.9043 3.52133 16 3.284 16 3C16 2.716 15.904 2.47867 15.712 2.288C15.52 2.09733 15.2827 2.00133 15 2C14.7173 1.99867 14.48 2.09467 14.288 2.288C14.096 2.48133 14 2.71867 14 3C14 3.28133 14.096 3.519 14.288 3.713C14.48 3.907 14.7173 4.00267 15 4C15.2827 3.99733 15.5203 3.90133 15.713 3.712Z" fill="#4B5563"/>
  </svg>
);

// 3: Heart Icon
const HeartIcon = ({ filled }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "#E31C5F" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M4.31804 6.31804C3.47411 7.16195 3 8.30656 3 9.50004C3 10.6935 3.47411 11.8381 4.31804 12.682L12 20.364L19.682 12.682C21.4382 10.9258 21.4382 8.07423 19.682 6.31804C17.9258 4.56185 15.0742 4.56185 13.318 6.31804L12 7.63604L10.682 6.31804C9.83812 5.47411 8.69352 5 7.50004 5C6.30656 5 5.16195 5.47411 4.31804 6.31804V6.31804" stroke={filled ? "#E31C5F" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 4: Hotel Label Icon
const HotelLabelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.4945 1.6051C7.22115 1.33183 6.77805 1.33183 6.5047 1.6051L1.6047 6.5051C1.33942 6.77976 1.34321 7.21636 1.61323 7.48637C1.88324 7.75638 2.31984 7.76018 2.5945 7.4949L2.7996 7.2898V11.9C2.7996 12.2866 3.113 12.6 3.4996 12.6H4.8996C5.2862 12.6 5.5996 12.2866 5.5996 11.9V10.5C5.5996 10.1134 5.913 9.8 6.2996 9.8H7.6996C8.0862 9.8 8.3996 10.1134 8.3996 10.5V11.9C8.3996 12.2866 8.713 12.6 9.0996 12.6H10.4996C10.8862 12.6 11.1996 12.2866 11.1996 11.9V7.2898L11.4047 7.4949C11.6794 7.76018 12.116 7.75638 12.386 7.48637C12.656 7.21636 12.6598 6.77976 12.3945 6.5051L7.4945 1.6051Z" fill="#1E293B"/>
  </svg>
);

// 5: Verified Badge Icon
const VerifiedIcon = () => (
  <svg width="47" height="8" viewBox="0 0 47 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4.35059L0.571289 3.76465L2.43164 5.59082L6.28906 1.75293L6.87988 2.33398L2.43164 6.77246L0 4.35059ZM13.307 7.61719L10.6734 0.341797H11.8767L13.29 4.38927C13.3949 4.70229 13.5152 5.08528 13.6508 5.53824C13.7865 5.9912 13.9393 6.52451 14.1092 7.13819H13.8819C14.0507 6.51117 14.2013 5.97451 14.3339 5.52823C14.4664 5.08194 14.5832 4.70229 14.6843 4.38927L16.0585 0.341797H17.2645L14.669 7.61719H13.307ZM20.0479 7.73086C19.5105 7.73086 19.0471 7.6147 18.6576 7.38237C18.2681 7.15005 17.9684 6.82393 17.7584 6.404C17.5485 5.98408 17.4436 5.49154 17.4436 4.92637C17.4436 4.36589 17.5467 3.87287 17.7529 3.44731C17.9591 3.02176 18.2509 2.68913 18.6283 2.44941C19.0056 2.2097 19.4479 2.08984 19.955 2.08984C20.267 2.08984 20.5684 2.14079 20.8594 2.24268C21.1503 2.34456 21.4113 2.50475 21.6422 2.72324C21.8732 2.94173 22.0561 3.22484 22.1911 3.57256C22.3261 3.92028 22.3936 4.34027 22.3936 4.83252V5.21367H18.041V4.41172H21.8399L21.3384 4.67637C21.3384 4.3429 21.2865 4.04844 21.1827 3.79297C21.0789 3.5375 20.9248 3.33786 20.7204 3.19404C20.516 3.05022 20.2621 2.97832 19.9585 2.97832C19.6549 2.97832 19.3956 3.05156 19.1806 3.19804C18.9655 3.34453 18.8014 3.5375 18.6883 3.77695C18.5751 4.01641 18.5185 4.27751 18.5185 4.56025V5.10527C18.5185 5.47962 18.5828 5.79645 18.7114 6.05576C18.8399 6.31507 19.0202 6.51101 19.2523 6.64356C19.4844 6.77611 19.7532 6.84239 20.0589 6.84239C20.2591 6.84239 20.4411 6.81366 20.6048 6.75621C20.7686 6.69875 20.9096 6.61234 21.0277 6.49698C21.1459 6.38161 21.2365 6.23877 21.2996 6.06846L22.3074 6.30635C22.2216 6.58916 22.0752 6.83752 21.8681 7.05142C21.661 7.26532 21.4035 7.43203 21.0957 7.55156C20.7879 7.67109 20.4386 7.73086 20.0479 7.73086ZM23.5689 7.61719V2.1582H24.6084V3.03496H24.667C24.7673 2.73835 24.9431 2.50534 25.1942 2.33594C25.4454 2.16654 25.7305 2.08184 26.0496 2.08184C26.1182 2.08184 26.1969 2.08434 26.2855 2.08935C26.3741 2.09437 26.4468 2.10055 26.5036 2.10791V3.1332C26.4647 3.12141 26.3898 3.10886 26.2789 3.09555C26.1679 3.08224 26.0554 3.07558 25.9411 3.07558C25.693 3.07558 25.4704 3.12805 25.2734 3.233C25.0763 3.33795 24.922 3.48242 24.8104 3.6664C24.6988 3.85039 24.643 4.06256 24.643 4.30293V7.61719H23.5689ZM27.5143 7.61719V2.1582H28.5883V7.61719H27.5143ZM28.0544 1.32529C27.8702 1.32529 27.7118 1.26274 27.579 1.13765C27.4463 1.01255 27.3799 0.862436 27.3799 0.687302C27.3799 0.508593 27.4463 0.35752 27.579 0.234084C27.7118 0.110647 27.8702 0.0489283 28.0544 0.0489283C28.2411 0.0489283 28.4008 0.110615 28.5337 0.23399C28.6665 0.357364 28.7329 0.508453 28.7329 0.687256C28.7329 0.862483 28.6665 1.01263 28.5337 1.13769C28.4008 1.26276 28.2411 1.32529 28.0544 1.32529ZM32.739 2.1582V3.03144H29.4092V2.1582H32.739ZM30.4465 7.61719V1.53349C30.4465 1.19371 30.5216 0.910414 30.6717 0.683592C30.8219 0.45677 31.0208 0.286132 31.2684 0.171679C31.516 0.0572264 31.7836 0 32.0713 0C32.2872 0 32.4725 0.0175293 32.6271 0.052588C32.7817 0.0876466 32.8956 0.119531 32.9689 0.148242L32.7178 1.01796C32.6675 1.0011 32.604 0.983492 32.5272 0.965132C32.4505 0.946773 32.3547 0.937593 32.2397 0.937593C31.9854 0.937593 31.8016 1.00135 31.6885 1.12885C31.5753 1.25636 31.5187 1.43994 31.5187 1.67959V7.61719H30.4465ZM33.857 7.61719V2.1582H34.931V7.61719H33.857ZM34.3972 1.32529C34.213 1.32529 34.0545 1.26274 33.9218 1.13765C33.789 1.01255 33.7227 0.862436 33.7227 0.687302C33.7227 0.508593 33.789 0.35752 33.9218 0.234084C34.0545 0.110647 34.213 0.0489283 34.3972 0.0489283C34.5838 0.0489283 34.7436 0.110615 34.8764 0.23399C35.0093 0.357364 35.0757 0.508453 35.0757 0.687256C35.0757 0.862483 35.0093 1.01263 34.8764 1.13769C34.7436 1.26276 34.5838 1.32529 34.3972 1.32529ZM38.7295 7.73086C38.1922 7.73086 37.7288 7.6147 37.3393 7.38237C36.9497 7.15005 36.65 6.82393 36.4401 6.404C36.2302 5.98408 36.1252 5.49154 36.1252 4.92637C36.1252 4.36589 36.2283 3.87287 36.4345 3.44731C36.6407 3.02176 36.9325 2.68913 37.3099 2.44941C37.6873 2.2097 38.1295 2.08984 38.6366 2.08984C38.9486 2.08984 39.2501 2.14079 39.541 2.24268C39.832 2.34456 40.0929 2.50475 40.3239 2.72324C40.5548 2.94173 40.7378 3.22484 40.8728 3.57256C41.0077 3.92028 41.0752 4.34027 41.0752 4.83252V5.21367H36.7227V4.41172H40.5216L40.02 4.67637C40.02 4.3429 39.9681 4.04844 39.8643 3.79297C39.7605 3.5375 39.6064 3.33786 39.4021 3.19404C39.1977 3.05022 38.9437 2.97832 38.6401 2.97832C38.3366 2.97832 38.0772 3.05156 37.8622 3.19804C37.6472 3.34453 37.4831 3.5375 37.3699 3.77695C37.2568 4.01641 37.2002 4.27751 37.2002 4.56025V5.10527C37.2002 5.47962 37.2645 5.79645 37.393 6.05576C37.5216 6.31507 37.7019 6.51101 37.9339 6.64356C38.166 6.77611 38.4349 6.84239 38.7405 6.84239C38.9407 6.84239 39.1227 6.81366 39.2865 6.75621C39.4502 6.69875 39.5912 6.61234 39.7094 6.49698C39.8275 6.38161 39.9182 6.23877 39.9813 6.06846L40.9891 6.30635C40.9033 6.58916 40.7568 6.83752 40.5497 7.05142C40.3426 7.26532 40.0852 7.43203 39.7773 7.55156C39.4695 7.67109 39.1202 7.73086 38.7295 7.73086ZM44.2798 7.72559C43.839 7.72559 43.4464 7.61252 43.1019 7.38638C42.7574 7.16024 42.4875 6.83646 42.2922 6.41504C42.0969 5.99362 41.9992 5.4888 41.9992 4.90059C41.9992 4.30918 42.0984 3.80358 42.2968 3.38379C42.4952 2.964 42.7665 2.64339 43.1107 2.42197C43.4549 2.20055 43.8448 2.08984 44.2803 2.08984C44.6199 2.08984 44.8934 2.14624 45.1008 2.25903C45.3083 2.37183 45.4705 2.50301 45.5875 2.65259C45.7045 2.80217 45.7932 2.93369 45.8535 3.04717H45.9148V0.341797H46.9889V7.61719H45.9424V6.76279H45.8535C45.792 6.87894 45.7013 7.01211 45.5813 7.1623C45.4613 7.3125 45.2974 7.44393 45.0895 7.55659C44.8816 7.66925 44.6117 7.72559 44.2798 7.72559ZM44.518 6.81026C44.8225 6.81026 45.0799 6.72933 45.2901 6.56749C45.5004 6.40564 45.6599 6.18064 45.7686 5.89248C45.8773 5.60433 45.9316 5.27103 45.9316 4.89258C45.9316 4.51295 45.878 4.18226 45.7706 3.90049C45.6633 3.61871 45.5044 3.39905 45.2941 3.2415C45.0839 3.08395 44.8251 3.00517 44.518 3.00517C44.2028 3.00517 43.9397 3.08795 43.7287 3.25351C43.5176 3.41907 43.3594 3.64407 43.2539 3.92851C43.1485 4.21295 43.0958 4.53431 43.0958 4.89258C43.0958 5.25293 43.1492 5.578 43.256 5.86778C43.3627 6.15756 43.5223 6.38708 43.7347 6.55635C43.947 6.72562 44.2081 6.81026 44.518 6.81026Z" fill="#16A34A"/>
  </svg>
);

// 6: Star Icon
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7852 5.76562L10.916 9.33398L12.7441 15.0469L7.91016 11.5312L3.07617 14.959L4.86914 9.33398L0 5.76562H6.04688L7.91016 0L9.75586 5.76562H15.7852Z" fill="#EAB308"/>
  </svg>
);

// 7: Map Pin Icon
const MapPinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.03011 2.42992C4.6693 0.790734 7.33092 0.790734 8.97011 2.42992C10.6093 4.06911 10.6093 6.73073 8.97011 8.36992L6.00011 11.3399L3.03011 8.36992C2.24236 7.58226 1.7998 6.51391 1.7998 5.39992C1.7998 4.28594 2.24236 3.21759 3.03011 2.42992ZM6.00011 6.59992C6.66241 6.59992 7.20011 6.06222 7.20011 5.39992C7.20011 4.73762 6.66241 4.19992 6.00011 4.19992C5.33781 4.19992 4.80011 4.73762 4.80011 5.39992C4.80011 6.06222 5.33781 6.59992 6.00011 6.59992Z" fill="#9CA3AF"/>
  </svg>
);

// 8: Instant Confirm Icon
const InstantConfirmIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66699 6.66667V2L2.66699 9.33333H7.33366V14L13.3337 6.66667H8.66699V6.66667" stroke="#2563EB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 9: No Cancellation Icon
const NoCancellationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6525_561)">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.05036 3.05011C4.36318 1.73729 6.14375 0.999756 8.00036 0.999756C9.85697 0.999756 11.6375 1.73729 12.9504 3.05011C14.2632 4.36293 15.0007 6.1435 15.0007 8.00011C15.0007 9.85672 14.2632 11.6373 12.9504 12.9501C11.6375 14.2629 9.85697 15.0005 8.00036 15.0005C6.14375 15.0005 4.36318 14.2629 3.05036 12.9501C1.73754 11.6373 1 9.85672 1 8.00011C1 6.1435 1.73754 4.36293 3.05036 3.05011ZM4.67736 3.61611L12.3844 11.3231C13.1873 10.264 13.5797 8.94999 13.4889 7.62401C13.3981 6.29803 12.8303 5.04975 11.8905 4.10995C10.9507 3.17015 9.70244 2.60237 8.37646 2.51159C7.05049 2.42081 5.73647 2.81316 4.67736 3.61611ZM11.3234 12.3841L3.61636 4.67711C2.81341 5.73623 2.42105 7.05024 2.51183 8.37622C2.60262 9.7022 3.17039 10.9505 4.11019 11.8903C5.05 12.8301 6.29827 13.3979 7.62425 13.4886C8.95023 13.5794 10.2642 13.1871 11.3234 12.3841Z" fill="#09BB40"/>
    </g>
    <defs>
      <clipPath id="clip0_6525_561">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

// 10: Swimming Pool
const PoolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5M17.5 10C17.5 5.85786 14.1421 2.5 10 2.5M17.5 10H2.5M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10M10 17.5C11.3808 17.5 12.5 14.1417 12.5 10C12.5 5.85833 11.3808 2.5 10 2.5M10 17.5C8.61917 17.5 7.5 14.1417 7.5 10C7.5 5.85833 8.61917 2.5 10 2.5M2.5 10C2.5 5.85786 5.85786 2.5 10 2.5" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 11: Free Wi-Fi
const WifiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6525_589)">
      <path d="M6.75961 13.67C8.5495 11.8802 11.4514 11.8802 13.2413 13.67M10.0004 16.6667H10.0088M4.10878 10.7742C7.36211 7.52 12.6388 7.52 15.8929 10.7742M1.16211 7.8275C6.04294 2.94666 13.9579 2.94666 18.8396 7.8275" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_6525_589">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

// 12: Restaurant Slider Icon
const RestaurantIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99967 5.00004V3.33337M9.99967 5.00004C9.07982 5.00004 8.33301 5.74685 8.33301 6.66671C8.33301 7.58657 9.07982 8.33337 9.99967 8.33337M9.99967 5.00004C10.9195 5.00004 11.6663 5.74685 11.6663 6.66671C11.6663 7.58657 10.9195 8.33337 9.99967 8.33337M4.99967 15C5.91953 15 6.66634 14.2532 6.66634 13.3334C6.66634 12.4135 5.91953 11.6667 4.99967 11.6667M4.99967 15C4.07982 15 3.33301 14.2532 3.33301 13.3334C3.33301 12.4135 4.07982 11.6667 4.99967 11.6667M4.99967 15V16.6667M4.99967 11.6667V3.33337M9.99967 8.33337V16.6667M14.9997 15C15.9195 15 16.6663 14.2532 16.6663 13.3334C16.6663 12.4135 15.9195 11.6667 14.9997 11.6667M14.9997 15C14.0798 15 13.333 14.2532 13.333 13.3334C13.333 12.4135 14.0798 11.6667 14.9997 11.6667M14.9997 15V16.6667M14.9997 11.6667V3.33337" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 13: Parking Icon (Delivery truck outline)
const ParkingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8333 13.3333V4.99996C10.8333 4.53972 10.4602 4.16663 10 4.16663H3.33333C2.8731 4.16663 2.5 4.53972 2.5 4.99996V13.3333C2.5 13.7935 2.8731 14.1666 3.33333 14.1666H4.16667M10.8333 13.3333C10.8333 13.7935 10.4602 14.1666 10 14.1666H7.5M10.8333 13.3333V6.66663C10.8333 6.20639 11.2064 5.83329 11.6667 5.83329H13.8217C14.0427 5.83334 14.2546 5.92117 14.4108 6.07746L17.2558 8.92246C17.4121 9.0787 17.5 9.29063 17.5 9.51163V13.3333C17.5 13.7935 17.1269 14.1666 16.6667 14.1666H15.8333M10.8333 13.3333V6.66663C10.8333 6.20639 11.2064 5.83329 11.6667 5.83329H13.8217C14.0427 5.83334 14.2546 5.92117 14.4108 6.07746L17.2558 8.92246C17.4121 9.0787 17.5 9.29063 17.5 9.51163V13.3333C17.5 13.7935 17.1269 14.1666 16.6667 14.1666H15.8333M10.8333 13.3333C10.8333 13.7935 11.2064 14.1666 11.6667 14.1666H12.5M4.16667 14.1666C4.16667 15.0865 4.91347 15.8333 5.83333 15.8333C6.75319 15.8333 7.5 15.0865 7.5 14.1666M4.16667 14.1666C4.16667 13.2468 4.91347 12.5 5.83333 12.5C6.75319 12.5 7.5 13.2468 7.5 14.1666M12.5 14.1666C12.5 15.0865 13.2468 15.8333 14.1667 15.8333C15.0865 15.8333 15.8333 15.0865 15.8333 14.1666M12.5 14.1666C12.5 13.2468 13.2468 12.5 14.1667 12.5C15.0865 12.5 15.8333 13.2468 15.8333 14.1666" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 14: Calendar Icon (Check-in/out)
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5L6.66667 5.83333" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 15: Pets Icon (Link/bone/handcuffs shape)
const PetsIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.16634 6.02754H13.0863C13.437 6.02752 13.7501 5.808 13.8697 5.47837L14.863 2.49754C14.9411 2.26808 14.9155 2.01598 14.7927 1.80697C14.67 1.59796 14.4623 1.45275 14.2238 1.40921L10.1947 0.833374C9.87042 0.838867 9.5788 1.03198 9.44717 1.32837L8.46717 4.26837C8.38793 4.5159 8.42871 4.78622 8.57745 4.99936C8.72618 5.21249 8.96584 5.34402 9.22551 5.35504C9.33384 5.35504 9.44217 5.34421 9.54884 5.32254C9.77289 5.2814 10.0002 5.26076 10.228 5.26087M9.16634 6.02754C9.16634 8.32719 7.29932 10.1942 4.99967 10.1942C2.70003 10.1942 0.833008 8.32719 0.833008 6.02754C0.833008 3.72789 2.70003 1.86087 4.99967 1.86087C7.29932 1.86087 9.16634 3.72789 9.16634 6.02754V6.02754" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Image/Gallery icon for the "1/24" badge overlay
const ImageIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

// Pink chevron arrow icon used for link directions
const PinkArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E31C5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const SimilarCardHeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function StayDetails({ stay, onBack, onBookNow, isFavorite, onToggleFavorite }) {
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);

  // Hardcoded similar stays data based exactly on Figma images
  const similarStays = [
    {
      id: 'similar-1',
      title: "Lakeside Haven",
      type: "PRIVATE VILLA",
      badge: "SPECIAL OFF",
      badgeColor: "#B91C1C", // Red
      rating: "4.9",
      reviews: "850",
      distance: "5.1 km away",
      price: 12500,
      originalPrice: 18000,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
    },
    {
      id: 'similar-2',
      title: "Metro Luxe Suites",
      type: "HOTEL",
      badge: "TOP RATED",
      badgeColor: "#4F46E5", // Purple
      rating: "4.9",
      reviews: "2.1k",
      distance: "1.2 km away",
      price: 5800,
      originalPrice: 9500,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
    }
  ];

  // Specific about text that matches the screenshot exactly
  const aboutTextShort = "Meritas Picaddle Resort is a premium getaway nestled in the scenic hills of Lonavala. Surrounded by lush greenery and serene lakes, it offers the perfect blend of luxury, comfort and";
  const aboutTextFull = "Meritas Picaddle Resort is a premium getaway nestled in the scenic hills of Lonavala. Surrounded by lush greenery and serene lakes, it offers the perfect blend of luxury, comfort and peace. With top-notch dining experiences, gorgeous views, world-class pools, and outstanding hospitality, it provides an unforgettable escape from the city hustle.";

  return (
    <div className="stay-details-page-wrapper">
      {/* 1. Header Navigation Bar */}
      <header className="stay-details-header">
        <div className="header-back-action" onClick={onBack} role="button">
          <BackIcon />
          <span className="back-text">Back to Deals</span>
        </div>
        <div className="header-right-actions">
          <button className="header-action-btn details-share-btn" title="Share">
            <ShareIcon />
          </button>
          <button 
            className="header-action-btn details-fav-btn" 
            onClick={onToggleFavorite}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <HeartIcon filled={isFavorite} />
          </button>
        </div>
      </header>

      {/* 2. Main Image Section */}
      <section className="stay-details-hero-image-box">
        <img 
          src={stay.image || "https://images.unsplash.com/photo-1549294413-26f195200c16?w=1000&auto=format&fit=crop&q=80"} 
          alt={stay.name} 
          className="stay-details-hero-img" 
        />
        <span className="hero-discount-badge">UP TO 60% OFF</span>
        <div className="image-counter-badge">
          <ImageIcon />
          <span>1/24</span>
        </div>
      </section>

      {/* 3. Core Property Info */}
      <section className="stay-details-core-info">
        <div className="category-row">
          <HotelLabelIcon />
          <span className="category-label-text">{stay.type ? stay.type.toUpperCase() : "HOTEL"}</span>
        </div>
        
        <div className="title-rating-container">
          <h1 className="property-title">{stay.name}</h1>
          <div className="property-rating-side-col">
            <div className="rating-stars-inline">
              <StarIcon />
              <span className="rating-bold-score">4.4</span>
              <span className="rating-max">/5</span>
            </div>
            <span className="rating-label-desc">Very Good (126 reviews)</span>
          </div>
        </div>

        <div className="verified-badge-row">
          <span className="verified-badge">
            <VerifiedIcon />
          </span>
        </div>

        <div className="location-link-row">
          <MapPinIcon />
          <span className="location-text">{stay.location || "Lonavala, Pune, Maharashtra"}</span>
          <span className="view-on-map-link">View on Map</span>
        </div>
      </section>

      {/* 4. Instant Confirmation / Cancellation highlights */}
      <section className="stay-details-highlights-box">
        <div className="highlight-item">
          <div className="highlight-icon-circle blue-glow">
            <InstantConfirmIcon />
          </div>
          <div className="highlight-texts">
            <span className="highlight-title">Instant Confirmation</span>
            <span className="highlight-sub">Book instantly, stay today</span>
          </div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon-circle green-glow">
            <NoCancellationIcon />
          </div>
          <div className="highlight-texts">
            <span className="highlight-title">No Cancellation</span>
            <span className="highlight-sub">Up to 4 hours before check-in</span>
          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section className="stay-details-about-section">
        <h2 className="section-title-bold">About this property</h2>
        <p className="about-property-paragraph">
          {readMoreExpanded ? aboutTextFull : aboutTextShort}
        </p>
        <button 
          className="read-more-toggle-btn" 
          onClick={() => setReadMoreExpanded(!readMoreExpanded)}
        >
          <span>Read {readMoreExpanded ? "Less" : "More"}</span>
          <svg 
            width="10" 
            height="6" 
            viewBox="0 0 10 6" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              marginLeft: '6px', 
              transform: readMoreExpanded ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <path d="M1 1L5 5L9 1" stroke="#E31C5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </section>

      {/* 6. Amenities Section */}
      <section className="stay-details-amenities-section">
        <h2 className="section-title-bold">Amenities</h2>
        <div className="amenities-row-grid">
          <div className="amenity-grid-item">
            <div className="amenity-icon-box">
              <PoolIcon />
            </div>
            <span className="amenity-label">Swimming Pool</span>
          </div>
          <div className="amenity-grid-item">
            <div className="amenity-icon-box">
              <WifiIcon />
            </div>
            <span className="amenity-label">Free Wi-Fi</span>
          </div>
          <div className="amenity-grid-item">
            <div className="amenity-icon-box">
              <RestaurantIcon />
            </div>
            <span className="amenity-label">Restaurant</span>
          </div>
          <div className="amenity-grid-item">
            <div className="amenity-icon-box">
              <ParkingIcon />
            </div>
            <span className="amenity-label">Parking</span>
          </div>
        </div>
        <button className="view-all-amenities-btn">
          View All 20+ Amenities
        </button>
      </section>

      {/* 7. Property Policies */}
      <section className="stay-details-policies-section">
        <h2 className="section-title-bold">Property Policies</h2>
        <div className="policies-columns-container">
          <div className="policy-box half-width">
            <div className="policy-icon-wrapper">
              <CalendarIcon />
            </div>
            <div className="policy-text-group">
              <span className="policy-label">CHECK-IN</span>
              <span className="policy-value">12:00 PM onwards</span>
            </div>
          </div>
          <div className="policy-box half-width">
            <div className="policy-icon-wrapper">
              <CalendarIcon />
            </div>
            <div className="policy-text-group">
              <span className="policy-label">CHECK-OUT</span>
              <span className="policy-value">11:00 AM</span>
            </div>
          </div>
        </div>
        <div className="policy-box full-width">
          <div className="policy-icon-wrapper">
            <PetsIcon />
          </div>
          <div className="policy-text-group">
            <span className="policy-label">PETS</span>
            <span className="policy-value">Not Allowed</span>
          </div>
        </div>
      </section>

      {/* 8. Guest Reviews */}
      <section className="stay-details-reviews-section">
        <div className="reviews-header-line">
          <h2 className="section-title-bold">Guest Reviews</h2>
          <div className="view-all-reviews-link">
            <span>View All Reviews</span>
            <PinkArrowRight />
          </div>
        </div>

        <div className="reviews-rating-overview-grid">
          <div className="rating-summary-left">
            <span className="big-rating-score">4.4<span className="out-of-five">/5</span></span>
            <span className="rating-desc-text">Very Good</span>
            <div className="stars-row-five">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <span className="reviews-count-muted">126 reviews</span>
          </div>
          <div className="rating-bars-right">
            <div className="progress-bar-row">
              <span className="bar-label">Excellent</span>
              <div className="progress-bar-track">
                <div className="progress-bar-fill excellent-fill"></div>
              </div>
              <span className="bar-percentage">59%</span>
            </div>
            <div className="progress-bar-row">
              <span className="bar-label">Very Good</span>
              <div className="progress-bar-track">
                <div className="progress-bar-fill very-good-fill"></div>
              </div>
              <span className="bar-percentage">27%</span>
            </div>
            <div className="progress-bar-row">
              <span className="bar-label">Good</span>
              <div className="progress-bar-track">
                <div className="progress-bar-fill good-fill"></div>
              </div>
              <span className="bar-percentage">9%</span>
            </div>
          </div>
        </div>

        {/* Individual Review Card */}
        <div className="individual-review-card">
          <div className="review-title-row">
            <span className="review-score-badge">5/5</span>
            <span className="review-card-title">Excellent Stay!</span>
          </div>
          <p className="review-body-text">
            "Beautiful property, amazing ambience and superb food. The staff was very courteous and the check-in was smooth."
          </p>
          <div className="review-author-row">
            <span className="author-name">Rahul Sharma</span>
            <span className="review-time-ago">2 days ago</span>
          </div>
        </div>
      </section>

      {/* 9. Similar stays you might like */}
      <section className="similar-stays-section">
        <div className="similar-header-line">
          <h2 className="section-title-bold">Similar stays you might like</h2>
          <span className="view-all-similar-link">View All</span>
        </div>
        <div className="similar-cards-slider">
          {similarStays.map(item => (
            <div key={item.id} className="similar-stay-card">
              <div className="similar-card-img-wrapper">
                <img src={item.image} alt={item.title} className="similar-card-img" />
                <span className="similar-card-badge" style={{ backgroundColor: item.badgeColor }}>
                  {item.badge}
                </span>
                <div className="similar-card-heart-circle">
                  <SimilarCardHeartIcon />
                </div>
              </div>
              <div className="similar-card-content">
                <span className="similar-card-category">{item.type}</span>
                <h3 className="similar-card-title">{item.title}</h3>
                <div className="similar-card-rating">
                  <span className="star-char">★</span>
                  <span className="rating-val">{item.rating}</span>
                  <span className="reviews-val">({item.reviews})</span>
                </div>
                <span className="similar-card-distance">{item.distance}</span>
                <div className="similar-card-price-row">
                  <span className="similar-price">₹{item.price.toLocaleString('en-IN')}</span>
                  <span className="similar-original-price">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Sticky Bottom Booking Bar */}
      <footer className="sticky-booking-bar">
        <div className="booking-bar-left">
          <div className="booking-price-row">
            <span className="actual-price-highlight">₹2,499</span>
            <span className="original-price-strikethrough">₹6,000</span>
            <span className="booking-discount-pill">58% OFF</span>
          </div>
          <span className="taxes-subtext">Per Night (incl. taxes)</span>
        </div>
        <button className="booking-bar-cta-btn" onClick={onBookNow}>
          Book Now
        </button>
      </footer>
    </div>
  );
}
