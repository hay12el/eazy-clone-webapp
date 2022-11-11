import React from "react";
import { useState, useEffect } from "react";
import "./adminUpdate.css";
import axios from "axios";
import { useSelector } from "react-redux";
import MiniUpdate from "../miniUpdate/MiniUpdate";

function AdminUpdate(props) {
  const user = useSelector((state) => state.user);
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:${process.env.REACT_APP_URL}/business/adminBusinesses/`,
        { params:{adminId: "631a2a424d717b7c88c0227b"} }
      );
      if (!res.data) {
        console.log("no res");
      } else {
        setBusinesses(res.data);
      }
    };
    getData();
  }, []);

  return (
    <div className="UpdateContainer" style={{ display: props.visi }}>
      {businesses.map(b => <MiniUpdate business={b}/>)}
    </div>
  );
}

export default AdminUpdate;
