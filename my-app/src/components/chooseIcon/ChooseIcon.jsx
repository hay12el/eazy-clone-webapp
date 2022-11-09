import React, { useState } from "react";
import "./ChooseIcon.css";
import { GiFingernail, GiHairStrands } from "react-icons/gi";
import { ImScissors } from "react-icons/im";
import { FaUmbrellaBeach } from "react-icons/fa";
import { useEffect } from "react";




const ChooseIcon = (props) => {
    const [I, setI] = useState(<></>);
    
    useEffect(() => {
        const icon = (iconType) => {
            switch(iconType){
                case "מניקור":
                    return <GiFingernail color="white" size={24}/>
                case "תסרוקות":
                    return <GiHairStrands color="white" size={24}/>
                case "תספורות":
                    return <ImScissors color="white" size={24}/>
                case "שיזוף":
                    return <FaUmbrellaBeach color="white" size={24}/>

                default:
                    return <div style={{color: 'white'}}> icon </div>
            }
        }
       setI(icon(props.text));
    }, [])
  return (
    <div className="cContainer">
      <div className="circle">{I}</div>
      <div className="cText">{props.text}</div>
    </div>
  );
};

export default ChooseIcon;
