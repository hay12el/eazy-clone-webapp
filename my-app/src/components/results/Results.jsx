import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./results.css";

function Results() {
  const result = useSelector((state) => state.result.res);
  const navigate = useNavigate();

  const hundleClick = (id) => {
    console.log(id);
    navigate(`/business/${id}`);
  };

  return (
    <div className="resContainer" style={result.length != 0 ? {}:{visibility: 'hidden'}}>
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
    </div>
  );
}

export default Results;
