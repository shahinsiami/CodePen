// import "./Accordion.scss";
import React,{useState} from "react";
import { PiCaretDownFill } from "react-icons/pi";





const AccordionItem = ({title,info}) => {

  const [showInfo, setShowInfo] = useState(false);
  const showInfoFunction = ()=>{
	console.log(showInfo)
	setShowInfo(!showInfo)
  }
  return(
		<div className="accordion_container">
		<div className="accordian_titile_holder">
		<div className="accordian_titile">{title}</div>
		</div>
		<div className="accordian_icon_holder" onClick={showInfoFunction}>
		<div className={showInfo ? "accordian_icon_holder_up" : "accordian_icon_holder_down"}>
		<PiCaretDownFill />
		
		</div>
		</div>
		<div className="accordian_text_holder" style={showInfo ? {height: '100%' } : { height: '0px'}}>
		<div className="accordian_text"  style={showInfo ? { height: '100%'} : { height: '0px'}} >
		{info}
		</div>
		</div>
		</div> 
		
  ) 
};


export default AccordionItem;
