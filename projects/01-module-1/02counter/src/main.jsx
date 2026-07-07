import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppHeader from './header.jsx'

// Mount App into #root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Mount AppHeader into #headerElement
createRoot(document.getElementById('headerElement')).render(
  <StrictMode>
    <AppHeader />
  </StrictMode>
)
