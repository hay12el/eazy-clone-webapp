import React from "react";
import "./bIcons.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
function BIcons(props) {
  const [icon, setIcon] = useState(<></>);
  const [name, setName] =useState('');

  useEffect(() => {
    const iconSelect = (icon) => {
      switch (icon) {
        case "phone":
          setIcon(<FaPhone size={24} />);
          setName('להתקשר')
          break;
        case "mail":
          setIcon(<FaEnvelope size={24} />);
          setName('מייל')
          break;
        case "location":
          setIcon(<FaMapMarkerAlt size={24} />);
          setName('ניווט')
          break;
        case "facebook":
          setIcon(<FaFacebook size={24} />);
          setName('פייסבוק')
          break;
        case "instagram":
          setIcon(<FaInstagram size={28} />);
          setName('אינסטגרם')
          break;
        case "whatsapp":
          setIcon(<FaWhatsapp size={24} />);
          setName('וואצאפ')
          break;
        default:
          setIcon(<></>);
      }
    };
    iconSelect(props.name);
  }, []);

  return (
    <div className="iconContainer">
      <a href={props.link} className="ICONT">
        <div className="ICON">{icon}</div>
      </a>
      <p>{name}</p>
    </div>
  );
}

export default BIcons;
