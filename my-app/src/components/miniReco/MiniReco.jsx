import React from "react";
import { useNavigate } from "react-router-dom";

function MiniReco({ element }) {
  const navigate = useNavigate();
  const hundleClick = (id) => {
    navigate(`/business/${id}`);
  };
  return (
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
  );
}

export default MiniReco;
