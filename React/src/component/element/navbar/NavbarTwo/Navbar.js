import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.scss";
import { FaBars,  FaTimes } from 'react-icons/fa';
import data from "../../../Data/DataQuery.js"


function Navbar() {

     const [showToggleMenu, setShowToggleMenus] = useState(false);
     const containerHeight = useRef(null);
     const linksContainerRef = useRef(null);

     useEffect(()=> {
          const menuHeight = containerHeight.current.getBoundingClientRect().height;
          if(showToggleMenu){
               linksContainerRef.current.style.height = `calc(100vh - ${menuHeight}px)`
          }else{
               linksContainerRef.current.style.height = `0px`
          }
     },[showToggleMenu])


     return (
          <nav>
               <div className="container" ref={containerHeight}>

               <button className="toggle" onClick={()=> setShowToggleMenus(!showToggleMenu)}>
                              {
                                   showToggleMenu ? <FaTimes /> : <FaBars />
                              }
                    </button>
                    

               <div className="social">
                         {
                              data.social.map((social,index) => {
                                   const {id,url,icon} = social;
                                   return (
                                        <li key={index}>
                                             <a href={url}>{icon}</a>
                                        </li>
                                   )
                              })
                         }
                    </div>


                    <div className="links" ref={linksContainerRef}>
                         <ul className="list" >
                         {
                              data.dataQuery.map((link,index) => {
                                   return (
                                        <li key={index}>
                                             <a href={index}>{link.title}</a>
                                        </li>
                                   )
                              })
                         }
                         </ul>
                    </div>

                    <div className="logo">
                         <img src={data.image.find((image) =>{
                          return image.type == 'svg'
                          }).path} alt="" />
                    </div>


                

                  

               </div>
          </nav>
     )
}

export default Navbar
