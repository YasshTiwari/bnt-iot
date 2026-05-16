import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// GLOBAL TOUCH HOVER EFFECT

document.addEventListener('touchstart', (e) => {

  const element = e.target.closest(
    'button, .service-card, .gallery-card, .value-card, .vision-box, .nav-links a'
  )

  if (element) {
    element.classList.add('mobile-hover')
  }

})

document.addEventListener('touchend', (e) => {

  const element = e.target.closest(
    'button, .service-card, .gallery-card, .value-card, .vision-box, .nav-links a'
  )

  if (element) {

    setTimeout(() => {
      element.classList.remove('mobile-hover')
    }, 300)

  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)