import React from "react";
import "./underB.css";
import Recommendations from "../Recommendations/Recommendations";
import {
  CgSmileSad,
  CgSmileMouthOpen,
  CgSmileNeutral,
  CgSmile,
} from "react-icons/cg";

function UnderB() {

  const hundleClick = (e) => {
    console.log(e.target);
  }

  return (
    <div className="underCont">
      <div className="rCon">
        <p>מה דעתך על העסק</p>
        <div className="rates">
          <CgSmileMouthOpen size={45} color={"#00A1D6"} id={"ic"} onClick={hundleClick}/>
          <CgSmile size={45} color={"#00A1D6"} id={"ic"} />
          <CgSmileNeutral size={45} color={"#00A1D6"} id={"ic"} />
          <CgSmileSad size={45} color={"#00A1D6"} id={"ic"} />
        </div>
      </div>
      <div className="recoDic">
        <Recommendations />
      </div>
    </div>
  );
}

export default UnderB;
