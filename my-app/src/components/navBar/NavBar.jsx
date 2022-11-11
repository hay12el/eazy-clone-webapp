import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../Redux/user";

import "./navbar.css";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(LOGOUT());
    navigate("/");
  };

  const handleClick = (e) => {
    navigate(`/${e.target.id}`);
  };

  return (
    <div className="container">
      <div className="navContainer">
        {/* <span className="logo" onClick={() => navigate("/")}>logo</span> */}
        <img
          className="logo"
          src="https://barfon.co.il/wp-content/uploads/2022/02/%D7%9C%D7%95%D7%92%D7%95-%D7%90%D7%99%D7%96%D7%99.png"
          onClick={() => navigate("/")}
        />
        <div className="buttons">
          {user.userName !== "undefined" && user.userName != null ? (
            <>
              <button className="btn" onClick={()=> navigate('/adminPanel')}>
                ניהול חשבון
              </button>
              <button className="btn" onClick={handleLogout}>
                התנתק
              </button>
            </>
          ) : (
            <>
              <button className="btn" id="signin" onClick={handleClick}>
                הרשם
              </button>
              <button className="btn" id="login" onClick={handleClick}>
                כניסה לבעלי עסקים
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
