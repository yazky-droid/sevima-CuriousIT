import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const ref = useRef();
  const[success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_1zvta56', 'template_26u5lkr', ref.current, 'l-RziRe5VzRd5yvkD')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
  }
  
  return (
    <div className="contact">
      <div className="email">
        <form className='formEmail' ref={ref} onSubmit={handleSubmit}> 
          <h1>Kotak Aspirasi</h1>
          <input placeholder="Nama" type="text" name='name' />
          <input placeholder="Email" type="email" name='email' />
          <textarea placeholder='Tuliskan pesanmu disini' name="message" rows="10"></textarea>
          <button>Kirim</button>
          {success &&
          "Pesan telah dikirim. Kami akan segera membaca dan membalasnya :)"
          }
        </form>
      </div>
      <div className="socials">
          <h1 className="contact-section-header"><i>Let's grow together...</i></h1>
          <p className="italic">Mari berkoneksi di sosial media:</p>
          <ul>
            <li><a className='link' href=""> Facebook</a></li>
            <li><a className='link' href="" id="profile-link" target="_blank"> GitHub</a></li>
            <li><a className='link' href=""> Twitter</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Contact