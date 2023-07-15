import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='main'>
      <div className='left-part'>
      <div className='heading'>
          Send a message
        </div>
        <div className='form'>
            <input type='text' placeholder='Enter your name'></input>
            <input type='text' placeholder='Enter your phone number'></input>
            <input type='text' placeholder='Enter your email'></input>
            <input type='text' placeholder='What’s the message?'></input>
            <button>Send</button>
        </div>
      </div>
      <div className='right-part'>
        <div className='right-top'>
          <h4>CONTACT US</h4>
          <p id='phno'>+918763052472</p>
          <p>hello@example.com</p>
        </div>
        <div className='right-down'>
          <h4>ADDRESS</h4>
          <p id='markt'>Market Complex, Jyoti Vihar,</p>
          <p>Burla, Odisha 768019</p>
        </div>
        <div className='map-image'>
          <img src='https://i.stack.imgur.com/B6fEt.png' alt='map'></img>
        </div>
      </div>
    </div>
  )
}

export default Contact
