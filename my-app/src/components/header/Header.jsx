import React from "react";
import "./Header.css";
import { FaSistrix } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SetRes } from "../../Redux/results";
import { useRef } from "react";
import cities from "../../cities.json";

const Header = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const inpRef = useRef();
  const [is, setIs] = useState("hidden");

  const hundleChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const hundleEnter = async (e) => {
    if (e.key === "Enter") {
      is === "hidden" ? setIs("visible") : setIs("hidden");
      const res = await axios.get(
        `http://localhost:4000/business/getBbyName?name=${e.target.value}&city=${city}`
      );
      dispatch(SetRes(res.data.businesses));
    }
  };
  return (
    <div className="hContainer">
      <div className="text">
        כל מה שסביבך
      </div>

      <div className="pass">
        <div className="inpContainter">
          <div className="icon">
            <FaSistrix size={25} color={"#00A1D6"} />
          </div>
          <div className="hInp">
            <input
              type="search"
              name="search"
              id="search"
              onKeyDown={hundleEnter}
              ref={inpRef}
            />
          </div>
        </div>
        <div className="underInp">
          <div onClick={() => console.log("ok")} className="lBtn">
            שינוי למיקום נוכחי
          </div>
          <select
            name="city"
            id="city"
            className="lBtn"
            onChange={hundleChange}
            style={{
              direction: "rtl",
              backgroundColor: "inherit",
              color: "white",
              border: "none",
            }}
          >
            {cities.cities.map((x) => (
              <option key={x} value={x} style={{ color: "black" }}>
                {x}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
