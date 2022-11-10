import React from "react";
import { useState } from "react";
import "./addingB.css";
// import cities from "../cities.json";

function AddingB(props) {
    
  return (
    <div className="AddingContainer" style={{visibility: props.visi}}>
      <div className="AddTitle">
        <p
          style={{
            fontSize: "26px",
            margin: '10px',
            color: 'white'
          }}
        >
          הוספת עסק חדש
        </p>
      </div>
      <form action="" className="AddingForm">
        <div className="rightInp">
          <div className="double">
            <p>שם העסק:</p>
            <input type="text" id="bName" required />
          </div>
          <div className="double">
            <p>מייל העסק:</p>
            <input
              type="email"
              id="email"
              pattern=".+@globex\.com"
              size="30"
              required
            />
          </div>
          <div className="double">
            <p>טלפון העסק:</p>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="double">
            <p>סוג העסק:</p>
            <input type="text" id="type" />
          </div>
        </div>
        <div>
          <p>כתובת העסק:</p>
          <div className="double">
            <p>עיר:</p>
            {/* <input type="text" id="city" /> */}
            <select name="cars" id="city">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="double">
            <p>רחוב</p>
            <input type="text" id="street" />
          </div>
        </div>
      </form>
      <div className="aConfirm">
        <button className="btn" id="btn">
          יאללה תוסיף
        </button>
      </div>
    </div>
  );
}

export default AddingB;