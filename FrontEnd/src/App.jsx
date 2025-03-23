import React from 'react'
import './App.css'
import Lenis from 'lenis'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase"

const auth = getAuth(app);


import Landing from './components/landing'
import Ranking from './components/RankingPage'
import EngagementChart from './components/EngagementChart'
import Profile from './components/UserProfile'
import Admin from './components/AdminPanel'
import Credibility from './components/Credibility'
import Template from './components/Template';

import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const signUp = () =>{
    createUserWithEmailAndPassword(auth, "arif1234@gmail.com", "arif1234").then((value) => {console.log(value)})
  }

  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

requestAnimationFrame(raf);

  return (
    <>
      <Template />
    </>
  )
}

export default App
