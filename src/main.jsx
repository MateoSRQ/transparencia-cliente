import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.module.css'
import "@fontsource/source-sans-pro";
import "@fontsource/bebas-neue";
import {BrowserRouter as Router}  from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
            <App />
      </Router>
  </React.StrictMode>
)
