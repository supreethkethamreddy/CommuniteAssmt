import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
  const navigate = useNavigate();
  return (
    <>
        <nav className="navbar">
            <div>About Us</div>
            <div>Services</div>
            <div  onClick={()=>navigate('/cms')}>Admin Panel</div>
        </nav>
    </>
  )
}

export default Navbar