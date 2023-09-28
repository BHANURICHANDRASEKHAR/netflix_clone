import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Home from './Home'
import  Nav from './Navbar'
import Movie from './Movies'
import Movie11 from './Movie11'
import Likemovies from './Likemovies'
import TenMovie from './TenMovie'
export default function App() {
  return (
      <div >
      <Nav/>
      <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Movies' element={<Movie/>}>
      
      </Route>
      <Route path='/Movies/:name1' element={<Movie11 />}></Route>
 
      </Routes></div>
  )
}
// const Nav=()=>{
//    return(
//     <div>
//     <nav>
//     <ul >
//     <li><NavLink to="/">Home</NavLink>
//     </li>
//     <li><NavLink to="/about">About</NavLink>
//     </li>
//     <li><NavLink to="/contact">contact</NavLink>
//     </li></ul>
//     </nav>
//     </div>
//    )
// }
