import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// Import JavaScript files
// import './assets/js/bootstrap.bundle.min.js'
// import './assets/js/tiny-slider.js'
// import './assets/js/custom.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
