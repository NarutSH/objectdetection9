import React from "react";
import { Link } from "react-router-dom";
import "../Scss/Menu.scss";

const Menu = () => {
  return (
    <div className="menu-container">
      <ul>
        <Link to="/" className="menu-item" replace>
          <div>
            <i className="image outline icon large " /> <span>IMAGE</span>
          </div>
        </Link>
        <Link to="/camera" className="menu-item" replace>
          <div>
            <i className="video icon large" /> <span>CAMERA</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
