import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='Navbar_div_1'>
        <h1>movie search project</h1>
        <div className='Navbar_div_2'>
            
            <Link to={'/'}>Home</Link>
            <Link to='/Fav'>fav</Link>
            <Link to={'/Popular'}>Popular</Link>
            
        </div>
    </nav>
  )
}

export default Navbar
