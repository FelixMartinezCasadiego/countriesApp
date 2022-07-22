import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountriesApp } from './CountriesApp';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <Router>
      <CountriesApp />
    </Router>
    
  </React.StrictMode>
  
)
