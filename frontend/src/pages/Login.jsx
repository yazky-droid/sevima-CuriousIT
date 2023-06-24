import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/login", inputs);
      if(inputs.username == 'admin') localStorage.setItem('isAdmin', true);
      localStorage.setItem('loggedIn', true);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
        <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account yet?<Link to="/register">Register</Link> </span>
        </form>
    </div>
  )
}

export default Login