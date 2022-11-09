import React from "react";
import { useState, useEffect } from "react";
import "./signin.css";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { useContext } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const {userName, dispatch} = useContext(AuthContext);

   // chacks if the user is authenticated, if he is, navigates to homePage. 
  useEffect(()=> {
    if(userName !== 'undefined' && userName != null){
      navigate('/');
    }
  }, []);
  

  const [details, setDetails] = useState({
    userName: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const [errors, setErrors] = useState({
    userName: null,
    email: null,
    phone: null,
    password: null,
    confirmPassword: null
  })

  const handleCange = (e) => {
    setErrors((prev) => ({
      ...prev,
      [e.target.id]: null,
    }));

    setDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const phoneRegExp = /((05)[0-9]*)$/;
  const validationSchema = yup.object().shape({
    userName: yup.string().required("הכנס/י שם").min(3, "לא מספיק אותיות בשם!").matches(/(\s)/, "הכנס שם מלא"),
    email: yup.string().email("אימייל לא חוקי").required("Required"),
    password: yup
      .string()
      .min(6, "סיסמא חייבת להכיל 6 תוים לפחות")
      .required("הכנס סיסמא"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "אימות סיסמא אינו תואם")
      .required("הכנס אימות סיסמא"),
    phone: yup
      .string()
      .required("הכנס מספר פלאפון")
      .min(10, "מספר טלפון קצר מידי")
      .max(10, "מספר טלפון ארוך מידי")
      .matches(phoneRegExp, "מספר הטלפון שגוי"),
  });

  const handleSubmit = async (e) => {

    setErrors({
      userName: null,
      email: null,
      phone: null,
      password: null,
      confirmPassword: null
    });

    await validationSchema
      .validate(details, { abortEarly: false })
      .then(async () => {
        try{
          await axios.get(`http://localhost:${process.env.REACT_APP_URL}/cars/`).then(()=>{
          navigate('/');
        })}
        catch(err){
          console.log(err);
        }
      })
      .catch((err) => {
        err.inner.forEach((e) => {  
          setErrors(prev => ({
            ...prev,
            [e.path]: e.message
          }));
        });
      });
  };

  return (
    <div className="sContainer">
      <div className="inpContainer">
        <input
          type="text"
          name="name"
          className="inp"
          placeholder="שם מלא"
          id="userName"
          dir="rtl"
          onChange={handleCange}
        />
        {errors.userName !== null
        && 
        <p>{errors.userName}</p>}
        <input
          type="email"
          name="email"
          className="inp"
          placeholder="אימייל"
          id="email"
          onChange={handleCange}
        />
        {errors.email !== null
        && 
        <p>{errors.email}</p>}
        <input
          type="tel"
          name="phone"
          className="inp"
          placeholder="מס' טלפון"
          id="phone"
          onChange={handleCange}
        />
        {errors.phone !== null
        && 
        <p>{errors.phone}</p>}
        <input
          type="password"
          name="password"
          className="inp"
          placeholder="סיסמא"
          id="password"
          dir="rtl"
          onChange={handleCange}
        />
        {errors.password !== null
        && 
        <p>{errors.password}</p>}
        <input
          type="password"
          name="confirmPassword"
          className="inp"
          dir="rtl"
          id="confirmPassword"
          placeholder="אישור סיסמא"
          onChange={handleCange}
        />
        {errors.confirmPassword !== null
        && 
        <p>{errors.confirmPassword}</p>}
        <button className="confirmBtn" type="submit" onClick={handleSubmit}>
          הירשם
        </button>
      </div>
    </div>
  );
};

export default Signin;
