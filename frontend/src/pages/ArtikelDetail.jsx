import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import YoutubeEmbed from "../components/YoutubeEmbed";
import axios from 'axios';



const ArtikelDetail = () => {

  const [article, setArticle] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const articleId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/articles/${articleId}`);
        setArticle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [articleId]);


  const handleDelete = async ()=>{
    try {
      await axios.delete(`/articles/${articleId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <>
    <div className="detailArtikel">
      <div className="content">
        <img src={article.img} alt="" />
        <div className="info-user">

        <div className="user">
          <img src="https://i0.wp.com/kamusnetizen.com/wp-content/uploads/2022/04/channels4_profile-1.jpg?w=900&ssl=1" alt="" />
        <div className="info">
          <span>Bg John</span>
          <p>Posted 2 days ago</p>
        </div>
        </div>
        <div className="edit">
          <Link className='link' to={`/write?edit=2`}>
            Edit
          </Link>
          <Link className='link' onClick={handleDelete}>
            Hapus
          </Link>
        </div>
        </div>
        <h1>{article.title}</h1>
        <p>
          {getText(article.content)}
        </p>
        <h1>Video Penjelasan / Tutorial</h1>
        <YoutubeEmbed embedId={article.url_yt} />
      </div>

      <h1>Other post you may like</h1>
        <Menu/>

    </div>
    </>
  )
}

export default ArtikelDetail