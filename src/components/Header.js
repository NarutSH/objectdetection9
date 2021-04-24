import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="side-menu">
      <div className="side-menu_logo">
        <i className="centercode icon huge" />
        <h1>
          OBJECT <br />
          DETECTION
        </h1>
      </div>
      <ul>
        <Link to="/" className="side-menu_item" replace>
          <div>
            <i className="image outline icon large " /> <span>IMAGE</span>
          </div>
        </Link>
        <Link to="/camera" className="side-menu_item" replace>
          <div>
            <i className="video icon large" /> <span>CAMERA</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
