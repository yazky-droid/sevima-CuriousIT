import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className="landingPage">
        <div className="text">
            <i>
                <h1>Curiousity is key to learning.</h1>
                <span>Encouraging students to embrace their curiosity is an important part of education.</span>
                
            </i>
                <p>Ternyata rasa ingin tahu alias rasa penasaran kita terhadap sesuatu misalnya terhadap ilmu pengetahuan, itu punya dampak besar dalam proses kegiatan belajar mengajar kita.
                <br/>Dan disinilah <strong>CuriousIT</strong> hadir untuk menjelajahi hal yang ingin kita tahu bersama dengan kawan-kawan.</p>
                <button><Link className='link' to='/login'>Mulai Eksplorasi!</Link></button>
        </div>
        <div className="image">
            <img src="/learning-bro.png" alt="" />
        </div>
    </div>
  )
}

export default LandingPage