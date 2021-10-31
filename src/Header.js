import React from "react";
import HeaderImage from "./header-image.png";
import "./Header.css";


export default function Header() {
    return (
        <div className="header text-center">
            <h1>Dictionary</h1>
          <img className="img-fluid" src={HeaderImage} alt="people searching"></img>
        </div>
    );




}