import React from "react";
import { useContext } from "react";
import { useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import "./adminPanel.css";
import AddingB from "../../components/AddnigB/AddingB";

function AdminPanel() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const [isHide, setIsHide] = useState('hidden');
    const hide = () => {
        isHide ==='hidden' ? setIsHide('visible') : setIsHide('hidden');
    }

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/");
    }
  }, []);
  return (
    <div className="adminContainer">
      <div className="Atext">
        <p style={{fontSize: '26px'}}>
          <b>היי {user.userName},</b>
        </p>
        <p>מקווים שהעסקים פורחים 😊</p>
        <p>פה תוכל לנהל את העסקים שלך</p>
      </div>
      <div className="aButtons">
        <button className="btn" id="btn" onClick={hide}>
          הוספת עסק
        </button>
        <button className="btn" id="btn">
          עריכת עסק
        </button>
      </div>
      <AddingB visi={isHide}/>
    </div>
  );
}

export default AdminPanel;
