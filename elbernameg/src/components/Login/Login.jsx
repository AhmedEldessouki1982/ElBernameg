import React from 'react';
import './Login.scss';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='login__container'>
      <span className='login__header'>
        sign in to your account
      </span>

      <form>
        <input type="text" name='userName' placeholder='User Name'/>
        <input type="password" name='password' placeholder='Password' />
        <button>sign in</button>
        
        <span>
          <Link className='Link' to = "/register">Register ?</Link>
        </span>
        
      </form>
    </div>
  )
}

