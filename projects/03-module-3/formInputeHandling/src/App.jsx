import { useState } from 'react'
import './App.css'



function App() {

  //defining state variable for handling state change
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  let submit = false
  const handleSubmit = () => {
    alert("wellcome "+name)
    submit = true

  }

  return (
    <>
    <div id='formdiv'>
      <form>
      
      name:<input type='text' placeholder='enter your name' value={name} onChange={handleNameChange}/>

      Email:<input type='text' placeholder='enter your email' value={email} onChange={handleEmailChange}/>

      Submit:<input type='submit' onClick={handleSubmit}/>

    </form>
    </div>

    </>
  )
}

export default App
