import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => (
  <div>
    <div className="header ">
      <Link className="logo-container" to="/">
        <img className="logo" src={require("../Home/gm.png")} alt="" />
      </Link>
      <div className="options">
        <Link className="option" to="/search">
          Search
        </Link>
        <Link className="option" to="/popular">
          Popular Repos
        </Link>
        <Link className="option" to="/battle">
          Battle!
        </Link>
      </div>
    </div>
  </div>
);
export default Header;
