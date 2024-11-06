import './App.css';
import TextInput from './components/TextInput';
import { useState } from 'react';

function App() {

  const [nameValue, setNameValue] = useState('');
  function nameInputHandler(event){
    setNameValue(event.target.value);
  }

  const [emailValue, setEmailValue] = useState('');
  function emailInputHandler(event){
    setEmailValue(event.target.value);
  }

  const [phoneValue, setPhoneValue] = useState('');
  function phoneInputHandler(event){
    console.log(event)
    setPhoneValue(event.target.value);
  }

  return (
    <>
      <div className='left'>
        <TextInput name="Name" value={nameValue}  onInputChange={nameInputHandler} />
        <TextInput name="Email" type='email' value={emailValue} onInputChange={emailInputHandler}/>
        <TextInput name="Phone number" type='tel' value={phoneValue} onInputChange={phoneInputHandler} />
      </div>
      <div className='paper'>
        <h2>{nameValue}</h2>
        <p>{emailValue}</p>
        <p>{phoneValue}</p>
        <hr className="rounded" />

      </div>
    </>
  )
}

export default App
