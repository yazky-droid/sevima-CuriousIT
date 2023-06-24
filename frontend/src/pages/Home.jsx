import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import LandingPage from '../components/LandingPage';


const Home = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loggedIn, setLoggedIn] = useState(true)

  const model = "gpt-3.5-turbo";
  const fetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: model,
        messages:[{"role": "user", "content": input}],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    );
      console.log(response.data)
      
    return response.data.choices[0].message.content;
  };

  async function handleClick() {
    try {
      const answer = await fetchData(input);
      setAnswer(answer);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="home">
      {/* <div className="content">
        <div className="text">

        <h1>Halo, lagi penasaran tentang apa hari ini?</h1>
        <p>Tunggu apa lagi? Puaskan rasa ingin tahu di CuriousIT</p>
        </div>
        <div className="qna">
          <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="5"  />
          <button onClick={handleClick}>Completed Sentence</button>
          {answer && <p>Completed Sentence: {answer}</p>}
        </div>
      </div> */}
      <LandingPage/>
    </div>
  )
}

export default Home