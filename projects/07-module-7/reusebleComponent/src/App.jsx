import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Alert from './Alert'

function App() {
 return(
   <div>
    <h1>my app </h1>
    <Alert message = "this is a success message !" />
    
  </div>
 )
}

export default App
