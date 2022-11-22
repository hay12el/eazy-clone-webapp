import React from "react";
import { useState } from "react";
import "./addingB.css";
import cities from "../../cities.json";
import { useRef } from "react";

function AddingB(props) {

  return (
    <div className="AddingContainer" style={{ display: props.visi }}>
      <div className="AddTitle">
        <p
          style={{
            fontSize: "26px",
            margin: "10px",
            color: "white",
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
            <input type="email" id="email" pattern=".+@globex\.com" required />
          </div>
          <div className="double">
            <p>טלפון העסק:</p>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="double">
            <p>סוג העסק:</p>
            <select name="type" id="type">
              <option value="volvo">מספרה</option>
              <option value="saab">שיזוף</option>
              <option value="mercedes">מניקור</option>
              <option value="audi">תסרוקות</option>
            </select>
          </div>
        </div>
        <div>
          <p>כתובת העסק:</p>
          <div className="double">
            <p>עיר:</p>
 
            <select name="city" id="city">
              {
                cities.cities.map(x => <option key={x} value={`${x}`}>{x}</option>)
              }
            </select>
          </div>
          <div className="double">
            <p>רחוב:</p>
            <input type="text" id="street" required />
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
