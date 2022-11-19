import React from 'react';
import './Register.scss';


export default function Register() {
  return (
    <div className='Register__container'>
      <span className='Register__header'>
        sign up for new account
      </span>

      <form>
        <input type="text" name='email' placeholder='email'/>
        <input type="text" name='name' placeholder='name' />
        <input type="password" name='password' placeholder='password' />
        <button>submit</button>
      </form>
    </div>
  )
}

