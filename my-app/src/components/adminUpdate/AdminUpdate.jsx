import React from "react";
import { useState, useEffect } from "react";
import "./adminUpdate.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MiniUpdate from "../miniUpdate/MiniUpdate";
import { useNavigate } from "react-router-dom";
import {LOGOUT} from '../../Redux/user';

function AdminUpdate(props) {
  const user = useSelector((state) => state.user);
  const [businesses, setBusinesses] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await axios.get(
          `http://localhost:${process.env.REACT_APP_URL}/business/adminBusinesses/`,
          {
            headers:{
              token: user.token,
            }
          }
          );
          if (!res.data) {
            console.log("no res");
          } else {
            setBusinesses(res.data);
          }
        }catch(err) {
          if(err.response.status === 401){
            dispatch(LOGOUT());
            navigate('/');
          };
        }
    };
    getData();
  }, []);

  return (
    <div className="UpdateContainer" style={{ display: props.visi }}>
      {businesses.map((b, index) => (
        <MiniUpdate key={index} business={b} />
      ))}
    </div>
  );
}

export default AdminUpdate;
