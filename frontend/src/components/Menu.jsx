import React from 'react'

const Menu = () => {

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
    <div className="menu">
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu