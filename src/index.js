import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
// import '@splidejs/react-splide/css/core';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

