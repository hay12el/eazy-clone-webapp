import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import "./adminPanel.css";
import AddingB from "../../components/AddnigB/AddingB";
import AdminUpdate from "../../components/adminUpdate/AdminUpdate";

function AdminPanel() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const [isHideNew, setIsHideNew] = useState("none");
  const [isHideUp, setIsHideUp] = useState("none");

  const hideNew = () => {
    isHideNew === "none" ? setIsHideNew("flex") : setIsHideNew("none");
    isHideUp === "none" ? setIsHideUp("none") : setIsHideUp("none");
  };
  const hideUp = () => {
    isHideUp === "none" ? setIsHideUp("flex") : setIsHideUp("none");
    isHideNew === "none" ? setIsHideNew("none") : setIsHideNew("none");
  };

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/");
    }
  }, []);
  return (
    <div className="adminContainer">
      <div className="Atext">
        <p style={{ fontSize: "26px" }}>
          <b>היי {user.userName},</b>
        </p>
        <p>מקווים שהעסקים פורחים 😊</p>
        <p>פה תוכל לנהל את העסקים שלך</p>
      </div>
      <div className="aButtons">
        <button className="btn" id="btn" onClick={hideNew}>
          הוספת עסק
        </button>
        <button className="btn" id="btn" onClick={hideUp}>
          עריכת עסק
        </button>
      </div>
      <AddingB visi={isHideNew} />
      <AdminUpdate visi={isHideUp} />
    </div>
  );
}

export default AdminPanel;
