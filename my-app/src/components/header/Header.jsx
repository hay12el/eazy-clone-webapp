import React from "react";
import "./Header.css";
import { FaSistrix } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SetRes } from "../../Redux/results";
import { useEffect, useRef } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [city_data, setCity_data] = useState([]);
  const inpRef = useRef();
  const [is, setIs] = useState('hidden');

  const click1 = (e) => {
    if (e.key === "Enter") {
      
      is === 'hidden' ? setIs('visible') : setIs('hidden');
    }
  }
  const click = async () => {
    const res = await axios.get(
      `http://localhost:4000/business/getBbyName?name=${inpRef.current.value}&city=תל אביב`
    );
    dispatch(SetRes(res.data.businesses));
    console.log(res.data.businesses);
  };

  const hundleEnter = async (e) => {
    if (e.key === "Enter") {
      is === 'hidden' ? setIs('visible') : setIs('hidden');
      const res = await axios.get(
        `http://localhost:4000/business/getBbyName?name=${e.target.value}&city=תל אביב`
      );
      dispatch(SetRes(res.data.businesses));
    }
  };
  return (
    <div className="hContainer">
      <div className="text">כל מה שסביבך</div>
      

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

          <div className="lBtn"> תל אביב יפו</div>
          {/* <div className="lBtn">
            <input list="cities-data" id="city-choice" name="city-choice" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
