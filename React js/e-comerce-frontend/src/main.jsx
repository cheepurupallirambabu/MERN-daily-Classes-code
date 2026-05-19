import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key.
// NOTE: For better security, it's recommended to store this key in an environment variable.
emailjs.init("JqggipCSvaJ1yaZHX");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
