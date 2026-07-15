import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleSwitch from './ToggleSwitch.jsx'
import CartItem from './CartItem.jsx';

createRoot(document.getElementById('root')).render(
    <div className='App'>
      <h1>React Hooks Demo</h1>
      <App />
      <hr />
      <ToggleSwitch />
      <hr />
      <h2>Shopping Cart Simulation</h2>
      <CartItem productName='Wireless Mouse' initialQuantity={2} price={25.99} />
      <CartItem productName='Mechanical Keyboard' initialQuantity={1} price={79.50} />
      <CartItem productName='USB-C Hub' initialQuantity={3} price={35.00} />
    </div>

  
)
