import "./Accordion.scss";
import React,{useState} from "react";
import dataQuery from "../../data/dataQuery.js"
import AccordionItem from "./AccordionItem.js"



const Accordion = () => {

  const [dataSample] = useState(dataQuery); 
  return(
	<div className="container">
		 {
			dataSample.map((data, index) => {
            return  <AccordionItem key={index} {...data} />
          })
        }
	</div>
  ) 
};



export default Accordion;
