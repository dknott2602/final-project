import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faSpinner, faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you need

// Add the imported icons to the Font Awesome library
library.add(faBars, faTimes, faSpinner, faArrowLeft, faMagnifyingGlass);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
