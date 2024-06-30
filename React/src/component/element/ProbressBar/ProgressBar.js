import React, { useState,useEffect } from 'react'
import "./ProgressBar.scss";

function ProgressBar() {
     const [scrollTop, setScrollTop] = useState(0);

     const onScroll = () => {
          const winScroll = document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          setScrollTop(scrolled)
          
     }

    useEffect(()=> {
         window.addEventListener('scroll', onScroll)
    },[])

     return (
          <div>
          <div className="wrapper">
               <div className="progressbar">
                    <div className="progressbar_precent" style={{ width: `${scrollTop}%` }}></div>
               </div>
          </div>
          <br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br>   
          <br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br><br></br> <br></br> <br></br> 
          </div>
     )
}

export default ProgressBar
