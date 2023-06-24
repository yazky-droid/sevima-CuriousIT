import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';


const Home = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const keyApi = import.meta.env.VITE_API_KEY;
  console.log(keyApi)
  const model = "gpt-3.5-turbo";
  const fetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: model,
        messages:[{"role": "user", "content": input}],
        // max_tokens: 50,
        // n: 1,
        // stop: ".",
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

  // const openai = new OpenAIApi(
  //   new Configuration({
  //     apiKey: keyApi,
  //   })
  // )

  // const fetchData = async (input) => {
  //   const res = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [{role: "user", content: input}],
  //   })
  //   console.log(res.data);
  //   }
  // console.log(import.meta.env.VITE_API_KEY)

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
      <div className="content">
        <div className="text">

        <h1>Halo, lagi penasaran tentang apa hari ini?</h1>
        <p>Tunggu apa lagi? Puaskan rasa ingin tahu di CuriousIT</p>
        </div>
        <div className="qna">
          <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="5"  />
          <button onClick={handleClick}>Completed Sentence</button>
          {answer && <p>Completed Sentence: {answer}</p>}
        </div>
      </div>
    </div>
  )
}

export default Home