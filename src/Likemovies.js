import React from 'react'
import {Link } from 'react-router-dom'
import { like } from './likemovie';
console.log(like)
export default function Likemovies() {
  return (
    <div className='container'>
    <h2  style={{color:'wheat',overflow:'hidden'}}>More Like This</h2>
    <div className='row p-0' >
    {
        like.map((ed,index)=>{
            const {img,name}=ed;  
            return(
              <div className='card'  key={index} style={{width:'20rem',margin:'1px',background:'transparent'}}>
             
             <img src={img} className='card-img-top'/>
               <h4 style={{color:'white',maxWidth:'fitContent',overflow:'hidden',textAlign:'cent'}} >{name}</h4>
               </div> 
               
           )
        })
    }</div></div>
  )
}
