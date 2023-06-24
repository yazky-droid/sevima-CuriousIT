import React from 'react'
import {Link} from 'react-router-dom'

const Artikel = () => {

    const posts = [
        {
          id: 1,
          title: "ini judul",
          desc: "deskripsi nih bang lorem ipsum dolor sit amet",
          img: "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2017/06/Kamu-Penggemar-Apel-Ini-Dia-Cara-Aman-Membeli-Buah-Apel-Segar.jpg",
        },
        {
          id: 2,
          title: "ini judul 2",
          desc: "deskripsi nih bang lorem ipsum dolor sit amet",
          img: "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2017/06/Kamu-Penggemar-Apel-Ini-Dia-Cara-Aman-Membeli-Buah-Apel-Segar.jpg",
        },
        {
          id: 3,
          title: "ini judul 3",
          desc: "deskripsi nih bang lorem ipsum dolor sit amet",
          img: "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2017/06/Kamu-Penggemar-Apel-Ini-Dia-Cara-Aman-Membeli-Buah-Apel-Segar.jpg",
        },
        {
          id: 4,
          title: "ini judul 4",
          desc: "deskripsi nih bang lorem ipsum dolor sit amet",
          img: "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2017/06/Kamu-Penggemar-Apel-Ini-Dia-Cara-Aman-Membeli-Buah-Apel-Segar.jpg",
        },
    
      ];

    return (
    <div className="spill">
        <div className="articles">
        {posts.map((post)=> (
            <div className="article" key={post.id}>
                <div className="img">
                    <img src={post.img} alt="" />
                </div>
                <div className="content">
                    <Link className='link' to={`/article/${post.id}`}><h1>{post.title}</h1></Link>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Artikel