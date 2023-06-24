import React from 'react'
import Accordion from '../components/Accordion';

const About = () => {
  const accordionData = [
    {
      title: 'Pesan:',
      content: `Selamat datang di platform kami! Kami menyediakan beragam informasi belajar hal baru yang menyenangkan untuk meningkatkan pengetahuan dan keterampilan Anda. Temukan fakta menarik, tips praktis, dan wawasan inspiratif melalui konten-konten interaktif yang dikemas secara menarik. Bersiaplah untuk memperluas wawasan Anda dengan cara yang menghibur dan memuaskan di platform kami!
      `
    },
    {
      title: 'Visi:',
      content: `Visi kami adalah menjadi platform utama yang memberikan akses mudah dan menyenangkan untuk belajar hal baru.`
    },
    {
      title: 'Misi:',
      content: `Misi kami adalah menyediakan konten berkualitas tinggi yang menginspirasi, mendidik, dan memberdayakan pengguna kami untuk terus tumbuh dan berkembang dalam berbagai bidang kehidupan.`
    }
  ];

  return (
    <div className="about">
      <div className="left">
        <h1>About CuriousIT</h1>
        <p className='desc-about'>Platform untuk orang-orang yang memiliki rasa ingin tahu yang tinggi untuk belajar suatu hal baru dengan menyenangkan dan awesome.</p>

        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      </div>
      <div className="right">
        <img src="/virtual-discuss.png" alt="" />
        
      </div>
    </div>
  )
}

export default About