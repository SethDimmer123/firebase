import librarylogo from './assets/Library.svg';
import './App.css';
import React, {useState,useEffect}  from 'react';
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
 } from "firebase/auth";

function App() {
  const [user,setUser] = React.useState({})
  const [loading,setLoading] = React.useState(true);

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setLoading(false)
      if (user) {
        setUser(user)
        console.log(user.email[0].toUpperCase())
      } else {
        setUser(null)
      }
      console.log("Auth State Changed!")
    })
    console.log(user)
  }, [])


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
      signOut(auth)

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
            {user ? (
                <button className='logout__button' onClick={logout}>S</button>
              ) : (
                <>
                  <button onClick={login}>Login</button>
                  <button onClick={register}>Register</button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;

