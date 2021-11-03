import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

//pngs
import logo from "../pngs/amazonlogo.png";
import flag from "../pngs/india.png";
import locoIcon from "../pngs/location-icon.png";
import data from "./data";

import "../comp css/Navbar.css";

//icons from react-icons
import { GrSearch } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

const Navbar = ({ title }) => {
  const context = useContext(UserContext);
  const { cart, dispatch } = useContext(UserContext);
  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };
  console.warn(filter);
  let dataSearch = data.productData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <nav className="header">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="oops" />
      </Link>

      <Link to="/" className="location">
        <span className="location-icon-span">
          <img id="location-icon" src={locoIcon} alt="" />{" "}
        </span>
        <div className="item-link">
          <span className="item-top">
            {context.user?.email
              ? `Hello ${(context.user?.email).split("@gmail.com")}`
              : "Hello,Sign in"}
          </span>
          <span className="item-bot">Select your address</span>
        </div>
      </Link>

      <div className="header-search">
        <input
          value={filter}
          onChange={searchText.bind(this)}
          type="text"
          className="header__search"
        />
        <GrSearch className="search-icon" />
      </div>

      <div className="nav-items">
        <div className="header-nav">
          <Link to="/" className="nav-links">
            <div className="item-flag">
              <img src={flag} alt="" id="flag" />
              <GoTriangleDown id="flag-dropdown-icon" />
            </div>
          </Link>

          <Link to="/signin" className="nav-links">
            <div className="item-link">
              <span className="item-top">
                {context.user?.email ? (
                  <Link
                    to="/signin"
                    className="Logout-user"
                    onClick={() => context.setUser(null)}
                  >
                    Logout ?
                  </Link>
                ) : (
                  "Hello,Sign in"
                )}
              </span>
              <span className="item-bot">Account & Lists</span>
            </div>
          </Link>

          <Link to="/" className="nav-links">
            <div className="item-link">
              <span className="item-top">Returns</span>
              <span className="item-bot">& Orders</span>
            </div>
          </Link>

          <Link to="/checkout" className="nav-links">
            <div className="item-link-cart">
              <FiShoppingCart id="basket" />
              <span className="item-bot item-count">{cart?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
