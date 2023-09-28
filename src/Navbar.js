import React from 'react';
import './home.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
    <nav className='fl' style={{background:'black',padding:'2px',width:'100%',borderRadius:'0px'}}>
    <h1>netflix clone</h1>
    <ul >
    <li><NavLink to="/" className='link'>Home</NavLink>
    </li>
    <li><NavLink to="/about" className='link'>About</NavLink>
    </li>
    <li><NavLink to="/contact" className='link'>contact</NavLink>
    </li>
    <li><NavLink to="/Movies" className='link'>Movies</NavLink>
    </li>
    <li><NavLink to="/signin" className='link'>Signin</NavLink>

    </li></ul>
    </nav>
    </div>
  )
}
