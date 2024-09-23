import React from 'react'
import './index.css'

function index() {
  return (
        <nav className="navbar">
        <div class="logo">Wefo</div>
        <ul className='menu'>
            <li a href='#about'>About</li>
            <li a href='#services'>Services</li>
            <li a href='contact'>Contact Us</li>
            <li a href='#gallery'>Gallery</li>
        </ul>
        <button className="button">Get Started</button>
        </nav>
           

      
  )
}

export default index
