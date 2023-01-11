import librarylogo from './assets/Library.svg';
import './App.css';
import React, {useState}  from 'react';
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,

 } from "firebase/auth";

function App() {
  const [user,setUser] = React.useState({})
  const [show,setShow] = React.useState(true)



  function register() {
    console.log("register")
    createUserWithEmailAndPassword(auth, 'batman@email.com','password123')
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
    function login() {
      signInWithEmailAndPassword(auth, 'batman@email.com','password123')
      .then(({user}) => {
        console.log(user)
  
      })
      .catch((error) => {
        console.log(error)
      })
    }

    function logout() {
      signOut(auth);

    }
    function changeState() {
      setShow(!show);
    }

  
  return (
    <div className="App">
      <nav>
        <div className='nav__container'>
          <figure>
            <img src={librarylogo} className="logo" />
          </figure>
          <ul className='nav__links'>
            <li className='nav__list'>
              <button onClick={login}>Login</button>
              <button onClick={register}>Register</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;

