import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from "../../../Data/DataQuery.js"
import "./SlideShow.scss";

function SlideShowOne() {

     const [index, setIndex] = useState(0);
     const {position,info,image,title} = data.dataQuery[index];

     const checkNumber = (number) => {
          if(number > data.dataQuery.length -1 ){
               return 0;
          }
          if(number < 0){
               return data.dataQuery.length - 1
          }
          return number;
     }

     const nextSlide = () => { 
         setIndex((index) => {
              let newIndex = index + 1;
              return checkNumber(newIndex)
         }) 
     }

     const prevSlide = () => {
          setIndex((index) => {
               let newIndex = index - 1;
               return checkNumber(newIndex)
          }) 
      }


      const randomSlide = () => {
           let randomNumber = Math.floor( Math.random() * data.dataQuery.length)
           if(randomNumber === index){
                randomNumber = index + 1
           }
           setIndex(checkNumber(randomNumber))
      }

     return (
          <div className="container">
          <div className="slideshow">
               <div className="image">
                    <img src={image} alt="" />
               </div>
               <h4 className="title_one">
                   {title}
               </h4>
               <p className="title_two">{position}</p>
               <div className="text">{info}</div>
               
               <div className='button_container'>
               <div className="button_left" onClick={prevSlide}><FaChevronLeft /></div>
                <div className="button_random"  onClick={randomSlide}>Random</div>
                <div className="button_right" onClick={nextSlide}><FaChevronRight /></div>
          </div>
          </div>
          </div>
     )
}

export default SlideShowOne
