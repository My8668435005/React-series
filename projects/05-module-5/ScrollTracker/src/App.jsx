import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ScrollTracker from './ScrollTracker.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>useEffect Event Listener Example</h1>
      </header>
      <main>
        <ScrollTracker />
      </main>
    </div>
  );
}

export default App
