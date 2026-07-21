import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PostsList from './PostList'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Data Fetching Example</h1>
      </header>
      <main>
        <PostsList />
      </main>
    </div>
  );
}
export default App;