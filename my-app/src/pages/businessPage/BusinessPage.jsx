import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Photos from "../../components/photos/Photos";
import "./businessPage.css";
import BIcons from "../../components/BIcons/BIcons";
import OpenHours from "../../components/openHours/OpenHours";
import { useState } from "react";
import axios from "axios";
import Recommendations from "../../components/Recommendations/Recommendations";
import UnderB from "../../components/underB/UnderB";

function BusinessPage() {
  const { id } = useParams();
  const [business, setBusiness] = useState({});
  const [loading, setLoading] = useState(true);

  const changePhone = (p) => {
    if (p[0] == "0") {
      return "+972" + p.slice(1);
    } else {
      return p;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:4000/business/?id=${id}`);
        setBusiness(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="BContainer">
        {loading ? (
          <p>loading</p>
        ) : (
          <div className="BBContainer">
            <div className="photos">
              <Photos photos={business.photos} />
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
                  <p id="miniAddress">
                    {business.city} , {business.street}
                  </p>
                </div>
              </div>
              <OpenHours hours={business.hours} />
              <p id="description">{business.description}</p>
              <div className="BIcons">
                <BIcons
                  name={"phone"}
                  link={`tel:${changePhone(business.phone)}`}
                />
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
        )}
      </div>
      <UnderB />
    </>
  );
}

export default BusinessPage;
