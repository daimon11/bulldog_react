import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import '@splidejs/react-splide/css';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

