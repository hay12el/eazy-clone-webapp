import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./results.css";
import icon from "../../utils/undraw_web_search_re_efla.svg";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function Results() {
  const result = useSelector((state) => state.result.res);
  const navigate = useNavigate();
  const [imgF, setImgF] = useState(false);

  const hundleClick = (id) => {
    console.log(id);
    navigate(`/business/${id}`);
  };

  return (
    <div className="resContainer">
      {result
        ? result.map((element) => (
            // <div key={element._id} onClick={() => hundleClick(element._id)}
            // className="res">
            //   <p>{element.BName}</p>
            // </div>
            <div
              className="RminiInfo"
              key={element._id}
              onClick={() => hundleClick(element._id)}
            >
              <div className="RBICONCONT">
                <img src={element.logo} id="RBIcon" alt="BIcon" />
              </div>
              <div className="RminiInfoLeft">
                <p id="RBName">{element.BName}</p>
                <p id="RminiDesc">{element.type}</p>
                <p id="RminiAddress">
                  {element.city} , {element.street}
                </p>
              </div>
            </div>
          ))
        : null}
      {/* <CSSTransition
        in={imgF}
        timeout={500}
        unmountOnExit
        classNames={"imgAnimation"}
      >
        <div onClick={() => setImgF(!imgF)}>
          <img src={icon} alt="fdsf" id="iconSvg" />
        </div>
      </CSSTransition> */}
    </div>
  );
}

export default Results;
