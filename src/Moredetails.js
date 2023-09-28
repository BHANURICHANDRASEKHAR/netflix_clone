import React from 'react'
import AOS from 'aos'
export default function Moredetails(pro) {
  AOS.init();
  return (
    <div class="container m-5 p-5" data-aos='fade-down' data-aos-duration='2000'  data-easing='ease-in-out' data-aos-delay='10000'>
    <h2 className='overflow-hidden' style={{color:'wheat'}}>More Details</h2>
    
      <div class="row m-3 p-3">
        <div class="col-sm overflow-hidden">
        <h4 className='overflow-hidden'>Watch offline</h4>
        <p>Available download</p>
       
        </div>
        <div class="col-sm ">
        <h4 className='overflow-hidden'>Genres</h4>
        <p>Action And Love</p>
        </div>
        <div class="col-sm ">
        
    <h4 className='overflow-hidden'>Watch offline</h4>
    <p>Available download</p>
    </div>
    <div class="col-sm "> 
    <h4 className='overflow-hidden'>Subtitles</h4>
    <p>English</p>
        </div>
        
      </div>
      <div className='row m-3 p-3'>
      <div class="col-sm "> 
      <h4 className='overflow-hidden'>cast</h4>
      <p style={{textTransform:'capitalize'}}>{pro.heroname}</p>
          </div>
          <div class="col-sm "> 
      <h4 className='overflow-hidden'>About</h4>
      <p style={{width:'400px'}}>{pro.desc}</p>
          </div>
      </div>
    </div>
  )
}
