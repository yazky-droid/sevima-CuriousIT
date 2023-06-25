import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Artikel = () => {
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


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  console.log(articles)
    return (
    <div className="spill">
        <div className="articles">
        {articles.map((article)=> (
            <div className="article" key={article.id}>
                <div className="img">
                    <img src={article.img} alt="" />
                </div>
                <div className="content">
                    <Link className='link' to={`/article/${article.id}`}><h1>{article.title}</h1></Link>
                    <p>{getText(article.content)}</p>
                    <button><Link className='link' to={`/article/${article.id}`}>Read More</Link></button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Artikel