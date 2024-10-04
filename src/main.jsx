import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';
import ReactGA from "react-ga4";

ReactGA.initialize("G-GW3BC3XSZ5");

ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname,
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
