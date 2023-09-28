import React from 'react'
import AOS from 'aos'
export default function Commingsoon() {
    AOS.init();
  return (
    <div  class="container m-5 p-5" data-aos='fade-down' data-aos-duration='2000'  data-easing='ease-in' data-aos-delay='10000'>
    <h2 className='overflow-hidden' style={{color:'wheat'}}>Coming Soon</h2>
    
      <div class="row m-3 p-3">
        <div class="col-sm overflow-hidden">
        <h4 className='overflow-hidden'>Berlin</h4>
        <p>Back to his golden age before the events of "Money Heist," Berlin and a masterful gang gather in Paris to plan one of his most ambitious robberies ever.</p>
       
        </div>
        <div class="col-sm ">
        <h4 className='overflow-hidden'>Avatar The Last Airbender</h4>
        <p>Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.</p>
        </div>
        <div class="col-sm ">
        
    <h4 className='overflow-hidden'>Pokémon Concierge</h4>
    <p>Welcome to Pokémon Resort, a peaceful getaway for Pokémon to relax and have fun. Which adorable guest will the new concierge Haru befriend and help first?</p>
    </div>
    <div class="col-sm "> 
    <h4 className='overflow-hidden'>Power Rangers Cosmic </h4>
    <p>when Lord Zedd returns more powerful than ever, Team Cosmic Fury takes to the cosmos to battle the emperor of evil — and save the universe as we know it.</p>
        </div>
        
      </div>

      </div>
  )
}
