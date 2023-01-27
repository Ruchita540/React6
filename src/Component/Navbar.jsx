import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <li><Link to="/Home" style={{textDecoration:'none' }}>Home</Link></li>
        <li><Link to="/Students" style={{textDecoration:'none' }}>Students</Link></li>
        <li><Link to="/Contact" style={{textDecoration:'none' }}>ContactUs</Link></li>
 
    </div>
  )
}

export default Navbar