import React from "react";
import { useState } from "react";
import "./openHours.css";
import { FaClock } from "react-icons/fa";
import { useEffect } from "react";

function OpenHours(props) {
  const [hour, setHour] = useState([
    "8:00",
    "18:00",
    "8:00",
    "18:00",
    "8:00",
    "18:00",
  ]);
  const [show, setShow] = useState("hidden");
  // const [theHours, setTheHours] = useState([]);

  const hundleClick = () => {
    show === "hidden" ? setShow("visible") : setShow("hidden");
  };


  useEffect(() => {
    // let x = [];
    // for (let i = 0; i < hour.length; i += 2) {
    //  x.push(`${hour[i]} - ${hour[i + 1]}`);
    //   // `${hour[i]} - ${hour[i + 1]}`
    // }
    // setTheHours(theHours => [...theHours, x]);
    // console.log(theHours);

  }, []);

  return (
    <div className="OpenContainer">
      <div className="button" onClick={() => hundleClick()}>
        <FaClock color="RGB(1, 161, 214)" />
        <p>שעות פתיחה</p>
      </div>
      <div className="hoursCont" style={{ visibility: show }}>
        {hour
          ? hour.map((element) => {
              return <p>{element}</p>;
            })
          : null}
      </div>
    </div>
  );
}

export default OpenHours;
