import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()
    const isAdmin = localStorage.getItem('isAdmin');
    const isLoggedIn = localStorage.getItem('loggedIn');
    console.log(isAdmin);
    const handleClick = (e) => {
        e.preventDefault()

        localStorage.clear()
        window.location.reload()
        navigate("/");
    }

  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <Link className='link' to="/">Curious<span>IT</span></Link>
            </div>
            <div className="links">
                <Link className='link' to="/articles"><h6>SPILLTHETEA</h6></Link>
                <Link className='link' to="/about"><h6>ABOUT</h6></Link>
                <Link className='link' to="/contact"><h6>CONTACT</h6></Link>
                {isLoggedIn && <span onClick={handleClick}>Logout</span>}
                {isAdmin && <span className='write'>
                    <Link className='link' to="/post">Post</Link>
                </span>}
            </div>
        </div>
    </div>
  )
}

export default Navbar