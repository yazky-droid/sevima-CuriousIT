import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import LandingPage from '../components/LandingPage';
import OpenAI from '../components/OpenAI';


const Home = () => {
  const [isGuest, setIsGuest] = useState(false)


  return (
    <div className="home">
      {!isGuest && <OpenAI />}
      {isGuest && <LandingPage/> }
    </div>
  )
}

export default Home