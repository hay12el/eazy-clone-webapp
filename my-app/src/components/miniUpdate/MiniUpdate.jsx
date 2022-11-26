import React from "react";
import "./miniUpdate.css";
import Photos from "../../components/photos/Photos";
import BIcons from "../../components/BIcons/BIcons";
import OpenHours from "../../components/openHours/OpenHours";

function MiniUpdate(props) {
  const business = props.business;
  const changePhone = (p) => {
    if (p[0] == "0") {
      return "+972" + p.slice(1);
    } else {
      return p;
    }
  };
  return (
    <div className="BBContainer" style={{border: '2px solid #00A1D6', margin: '10px 0px 10px 0px', borderRadius: '5px', padding: '15px'}}>
      <div className="photos">
        {/* <Photos photos={business.photos} /> */}
      </div>
      <div className="info">
        <div className="miniInfo">
          <div className="BICONCONT">
            <img src={business.logo} id="BIcon" alt="BIcon" />
            {/* <div id="BIcon"></div> */}
            <div className="rate">
              <p id="rate">{business.rate}</p>
            </div>
          </div>
          <div className="miniInfoLeft">
            <p id="BName">{business.BName}</p>
            <p id="miniDesc">{business.type}</p>
            <p id="miniAddress" contentEditable="true">
              {business.city} , {business.street}
            </p>
          </div>
        </div>
        <OpenHours hours={business.hours} />
        <p id="description" contentEditable="true">{business.description}</p>
        <div className="BIcons">
          <BIcons name={"phone"} link={`tel:${changePhone(business.phone)}`} />
          <BIcons name={"mail"} link={`mailto: ${business.email}`} />
          <BIcons
            name={"location"}
            link={`https://waze.com/ul?q=${business.city}%20${business.street}`}
          />
          <BIcons name={"facebook"} />
          <BIcons name={"instagram"} />
          <BIcons
            name={"whatsapp"}
            link={`https://wa.me/${changePhone(business.phone)}`}
          />
        </div>
      </div>
    </div>
  );
}

export default MiniUpdate;
