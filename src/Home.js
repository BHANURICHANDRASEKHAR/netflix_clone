import React from 'react';
import './home.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Down from './Down';
import Footer from './Footer';
export default function Home() {
    AOS.init();
  return (
    <div>
   
    <App2/><hr/> <Down/>
    <Footer/>
    </div>
  )
}
const App2=()=>{
  return (
    <section className='home'>
    
         <Content/>
        
        </section>
  )
}
  const Content=()=>{
      return(
          <div className='content'>
              <div className='actual'>
              <h3 >Welcome Back!.....</h3>
            <h1 style={{color:'white'}}>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
              </div>
          </div>
      )
  }
