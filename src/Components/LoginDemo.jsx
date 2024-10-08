import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config'

const provider = new GoogleAuthProvider();

const auth = getAuth();

const LoginDemo = () => {

  const handleLogin = () => {
    
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("login successfully");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
    });
  
  }
  return (
    <div className='m-5 p-5'>
      <button className='bg-primary px-4 text-white' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginDemo