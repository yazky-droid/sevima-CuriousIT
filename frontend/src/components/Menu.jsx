import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = () => {

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/articles`);
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  return (
    <div className="menu">
        {articles.map((article)=>(
            <div className="post" key={article.id}>
                <img src={article.img} alt="" />
                <h2>{article.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu