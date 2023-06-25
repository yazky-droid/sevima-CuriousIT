import React, { useState } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom';


const AddArtikel = () => {


  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState("");

  const navigate = useNavigate()

  const handleClick = async(e) => {
    e.preventDefault();
  
    try {
      await axios.post('http://localhost:3000/articles', {
            title,
            content: value,
            img,
            url
          });
          console.log("Berhasil brow")
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addPost">
      <div className="content">
        <input type="text" placeholder='Judul' name='title' onChange={(e)=>setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className='text-editor' theme="snow" onChange={(e) => setValue(e.target.value)}/>
        </div>
        <input type="text" placeholder='Link Img' onChange={(e)=>setImg(e.target.value)} />
        <input type="text" placeholder='Url / Link video YT' onChange={(e)=>setUrl(e.target.value)} />

        <div className="buttons">
          <button >Simpan sebagai draf</button>
          <button onClick={handleClick}>Publish</button>
        </div>
      </div>
    </div>
  )
}

export default AddArtikel