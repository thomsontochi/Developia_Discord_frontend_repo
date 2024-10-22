import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// import css files for theme
import './assets/css/bootstrap.min.css'
import './assets/css/tiny-slider.css'
import './assets/css/style.css' // Make sure this is the last CSS import
import './index.css'

// Import JavaScript files
// import './assets/js/bootstrap.bundle.min.js'
// import './assets/js/tiny-slider.js'
// import './assets/js/custom.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
