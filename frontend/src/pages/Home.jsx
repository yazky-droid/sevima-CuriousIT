import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import LandingPage from '../components/LandingPage';
import OpenAI from '../components/OpenAI';


const Home = () => {
  const isLoggedIn = localStorage.getItem('loggedIn');


  return (
    <div className="home">
      {isLoggedIn && <OpenAI />}
      {!isLoggedIn && <LandingPage/> }
    </div>
  )
}

export default Home