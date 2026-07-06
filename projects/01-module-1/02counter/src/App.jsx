import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setcounter] = useState(0)

  const addValue = () => {
    setcounter(counter+1)
    console.log("counter clicked !",counter)
  }
  const removevalue = () => {
    if(counter === 0){
      setcounter(counter*0)
    }else{
      setcounter(counter-1)
    }
  }
  return (
    <>
      <h1>react counter app</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}
      >add value to {counter}</button>
      <br></br>
      <button onClick={removevalue}>remove value </button>
    </>
  )
}

export default App
