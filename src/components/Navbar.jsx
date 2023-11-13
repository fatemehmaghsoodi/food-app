import React from "react";
import logo from "../assets/images/logo.png";
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar__list">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Orders</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
        <div className="navbar__option">
          <span className="navbar__favorites">
            <FiShoppingCart />
            <span className="badge">5</span>
          </span>
          <span>
            <FiSearch />
          </span>
          <span>
            <FiUser />
          </span>
          <span id="navbar__menu-icon">
            <FiMenu />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
