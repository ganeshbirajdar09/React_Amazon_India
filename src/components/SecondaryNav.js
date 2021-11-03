import React from "react";
import { Link } from "react-router-dom";
import primeicon from "../pngs/prime.png";
import "../comp css/SecondaryNav.css";
import { BsTextCenter } from "react-icons/bs";
const SecondaryNav = () => {
  return (
    <nav className="secondary-header">
      <BsTextCenter className="secondary-dropdown" />
      <div className="secondary-collapse">ALL</div>

      <div className="secondary-items">
        <Link to="/">
          <div className="secondary-nav-item">Best Sellers</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Amazon Pay</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Mobiles</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Fashion</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Electronics</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Prime</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">New Releases</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Customer Services</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Computers</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Home & Kitchen</div>
        </Link>
        <Link to="/">
          <div className="secondary-nav-item">Toys & Games</div>
        </Link>
      </div>
      <div className="Prime">
        <img className="prime" src={primeicon} alt="" />
      </div>
    </nav>
  );
};

export default SecondaryNav;
