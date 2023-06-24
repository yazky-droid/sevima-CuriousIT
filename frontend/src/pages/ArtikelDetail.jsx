import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'


const ArtikelDetail = () => {
  return (
    <div className="detailArtikel">
      <div className="content">
        <img src="https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2017/06/Kamu-Penggemar-Apel-Ini-Dia-Cara-Aman-Membeli-Buah-Apel-Segar.jpg" alt="" />
        <div className="user">
          <img src="https://i0.wp.com/kamusnetizen.com/wp-content/uploads/2022/04/channels4_profile-1.jpg?w=900&ssl=1" alt="" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link className='link' to={`/write?edit=2`}>
            Edit
          </Link>
          <Link className='link'>
            Hapus
          </Link>
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet judul</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          <br/>
          <br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br/>
          <br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default ArtikelDetail