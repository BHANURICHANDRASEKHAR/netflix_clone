import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { popular } from './data';
import Moredetails from './Moredetails';
import Likemovies from './Likemovies';
import Commingsoon from './Commingsoon';
import Footer from './Footer';

export default function Movie11() {
   var heroname1='';
   var desc1='';
    const pa=useParams();
    const {name1}=pa;
    console.log(name1)
    const [data1,setdata]=useState(popular);
    const [actualdata1,setdata1]=useState([])
    function seacrhfunction(data1){
   
        const searchlist=data1.filter((e)=>{
            const {name}=e;
             const actualname=name.match(name1); 
             return actualname; 
        });
           
            return(setdata1(searchlist));
        }
        
        
        useEffect(()=>{
           seacrhfunction(popular);
        },[name1]);
        
   
    
 
  return (
    <div className='actulamovie'>
    {
        actualdata1.map((e)=>{
            const {img,desc,name,heroname,backimg}=e;
            heroname1=heroname;
            desc1=desc;
            console.log(img);
            return(
                <div className='indiviualmovie' style={{backgroundImage:`url(${backimg})`}}>
                <div className='moviecontent'>
                <h2>{name}</h2>
                <h4><b>Hero Name:</b>{heroname || 'null'}</h4>
                <p style={{fontSize:'22px',}}><b>Description:</b>{desc}</p>
                </div>
                </div>
            )
        })
     
    }
    <Moredetails heroname={heroname1} desc={desc1}/>
    <Lower/>
   </div>
  )
}
const Lower=()=>{
    return(
        <>
        <Likemovies/>
        <Commingsoon/>
        <Footer/>
        </>
       
    )
}
