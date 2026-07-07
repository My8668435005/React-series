import { useState } from 'react'
import './App.css'

function App() {

  
  const [Counter,setCounter] = useState(0)
  const incrementCount = () =>{
    setCounter(Counter+1)
  }

  const decreamentCount = ()=>{
    if(Counter === 0){
      setCounter(Counter*0)
    }else{
      setCounter(Counter-1)
    }
  }
  return (
    <div id='Appcomponent'>
    
    <h2>count : {Counter}</h2>


    <div className="buttonRow">

      <button onClick={incrementCount}>
        add count
      </button>

      <button onClick={decreamentCount}>
        remove count
      </button>

    </div>
    

    </div>
  )
}

export default App
