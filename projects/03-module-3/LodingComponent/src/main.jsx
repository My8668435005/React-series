import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataDisplay from './DataDisplay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Data Loading Simulation</h1>
    <DataDisplay />
  </StrictMode>,
)
