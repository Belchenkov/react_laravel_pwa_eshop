import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/custom.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
