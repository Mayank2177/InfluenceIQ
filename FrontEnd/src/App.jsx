import React from 'react'
import './App.css'
import Lenis from 'lenis'

import Landing from './components/landing'
import Ranking from './components/RankingPage'
import EngagementChart from './components/EngagementChart'
import Profile from './components/UserProfile'
import Admin from './components/AdminPanel'
import Credibility from './components/Credibility'

function App() {

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
      <Landing />
    </>
  )
}

export default App
