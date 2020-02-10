import React from "react";
import "./Nav.css";
import logo from "../../img/logo.png";
export default function Nav() {
  return (
    <div className="header">
      <div className="topBar">
        <div className="topBarCenter">
          <img className="logo" src={logo} />
        </div>
      </div>
    </div>
  );
}
