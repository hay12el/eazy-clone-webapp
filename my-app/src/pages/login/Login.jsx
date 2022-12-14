import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../Redux/user";

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // chacks if the user is authenticated, if he is, navigates to homePage.
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/");
    }
  }, []);

  const [inputs, setInputs] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    if (e.key == "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.get(
        `http://localhost:${process.env.REACT_APP_URL}/users/login/`,
        { params: inputs }
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.user.userName);
      localStorage.setItem("isAdmin", true);
      const redux_promiss = () => {
        return new Promise(resolve => {
          dispatch(
            LOGIN({
              isAdmin: res.data.user.isAdmin,
              userName: res.data.user.userName,
              token: res.data.token,
            })
          );
          resolve('resolved');
        });
      }
      await redux_promiss();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div className="lContainer">
        <div className="inpC">
          <input
            type="email"
            className="inp"
            placeholder="מייל"
            id="email"
            onChange={handleChange}
            onKeyDown={handleClick}
          />
          <input
            type="password"
            className="inp"
            placeholder="סיסמא"
            id="password"
            onChange={handleChange}
            onKeyDown={handleClick}
          />
          <button type="submit" className="confirmBtn" onClick={handleSubmit}>
            התחבר
          </button>
        </div>
      </div>
    );
};

export default Login;
