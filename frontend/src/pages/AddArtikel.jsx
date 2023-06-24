import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useLocation } from 'react-router-dom';


const AddArtikel = () => {

  console.log(useLocation().state);
  const [title, setTitle] = useState()
  const [value, setValue] = useState()
console.log(value)
  return (
    <div className="addPost">
      <div className="content">
        <input type="text" placeholder='Judul' onChange={(e)=>setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default AddArtikel