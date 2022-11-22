import React, { useState } from "react";
import "./ChooseIcon.css";
import { GiFingernail, GiHairStrands } from "react-icons/gi";
import { ImScissors } from "react-icons/im";
import { FaUmbrellaBeach } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SetRes } from "../../Redux/results";

const ChooseIcon = (props) => {
    const [I, setI] = useState(<></>);
    const dispatch = useDispatch()

    const hundleClick = async (e) => {
          const res = await axios.get(
            `http://localhost:4000/business/BusiByCategoty/?type=${props.text}&city=תל אביב`
          );
          dispatch(SetRes(res.data));
    };
    
    useEffect(() => {
        const icon = (iconType) => {
            switch(iconType){
                case "מניקור":
                    return <GiFingernail color="white" size={24}/>
                case "תסרוקות":
                    return <GiHairStrands color="white" size={24}/>
                case "מספרה":
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
    <div className="cContainer" onClick={hundleClick}>
      <div className="circle">{I}</div>
      <div className="cText">{props.text}</div>
    </div>
  );
};

export default ChooseIcon;
