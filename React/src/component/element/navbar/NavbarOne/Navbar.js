import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.scss";
import { FaBars,  FaTimes } from 'react-icons/fa';
import data from "../../../data/dataQuery.js"


function NavbarOne() {

     const [showToggleMenu, setShowToggleMenus] = useState(false);
     const linksContainerRef = useRef(null);
     const listRef = useRef(null);


     useEffect(()=> {
          const linkHeight = listRef.current.getBoundingClientRect().height;
          if(showToggleMenu){
               linksContainerRef.current.style.height = `${linkHeight}px`
          }else{
                 linksContainerRef.current.style.height = `0px`
          }
     },[showToggleMenu])


     return (
          <nav>
               <div className="container">
                    <div className="logo">
                         <img src={data.image.find((image) =>{
                          return image.type == 'svg'
                          }).path} alt="" />
                    </div>

                    <div className="links" ref={linksContainerRef}>
                         <ul className="list" ref={listRef}>
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

                    <button className="toggle" onClick={()=> setShowToggleMenus(!showToggleMenu)}>
                              {
                                   showToggleMenu ? <FaTimes /> : <FaBars />
                              }
                    </button>

               </div>
          </nav>
     )
}

export default NavbarOne
