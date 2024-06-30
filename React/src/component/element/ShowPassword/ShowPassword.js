 import "./ShowPassword.scss";
import React,{useState} from "react";



const ShowPassword = () => {
  const  [type,setType] = useState("password");
  const  [TypeIcon,setTypeIcon] = useState("Show");

  const handleMouseDown = () =>{
	if(type === 'password'){

		setTypeIcon('Dont Show');
	  setType('text');
	}else{
	  setType('password')
	  setTypeIcon('Show');
	}
  
  }
  const handleMouseUp = () =>{
	setType('password')
	setTypeIcon('Show');
  }

  return(
    <div  className="container">

<div className="input_7">
	<div className="texbox_container">
	  <div className="texbox">
		<input
		placeholder ="password"
		  required="required"
		  type={type}
		/>
		<div  className="span_holder">
		  <span onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="icon">{TypeIcon}</span>
		</div>
	  </div>
	</div>
  </div>

  </div>
  ) 
};



export default ShowPassword;
