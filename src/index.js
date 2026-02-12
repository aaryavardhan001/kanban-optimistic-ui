import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This connects the Tailwind CSS we just set up

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);