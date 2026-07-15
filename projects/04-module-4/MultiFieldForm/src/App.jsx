import React , {useState,useEffect} from 'react';
import './App.css'

function multiInputeForm(){

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isSubscribe,setSubscribe] = useState(false);

  const submmitHandle = (e) =>{
    console.log('name' , name);
    console.log('email',email);
    console.log('isSubscribed',isSubscribe);


    alert(`wellcome ${name}`);

    setName('');
    setEmail('');
    setPassword('');
    setSubscribe(false);

  }

  return(
  <div class='form-container'>
      <h3>User Registration</h3>
      <form onSubmit={submmitHandle}>
        <div class='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div class='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div class='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div class='form-group checkbox-group'>
          <input
            type='checkbox'
            id='subscribe'
            checked={isSubscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
          />
          <label htmlFor='subscribe'> Subscribe to newsletter</label>
        </div>

        <button type='submit' class='submit-button'>Register</button>
      </form>
    </div>
    
  );


}

export default multiInputeForm;