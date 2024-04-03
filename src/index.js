import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./output.css"
import "animate.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RootWithDarkMode() {

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

root.render(<RootWithDarkMode />);
