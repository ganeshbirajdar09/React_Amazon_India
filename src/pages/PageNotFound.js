import React from "react";
import errorLogo from "../pngs/signinlogo.png";
import { Link } from "react-router-dom";
import "../comp css/PageNotFound.css"

const PageNotFound = () => {
  return (
    <div>
        <div className="error-img"> 
      <img src={errorLogo} alt="" /></div>
      <div className="error-msg">
        <h3>Looking for something?</h3>
        <h4>
          We're sorry. The Web address you entered is not a functioning page on
          our site.
        </h4>

        <div className="redirect-home">
            <h3>Go to Amazon.in's <Link to="/">Home</Link> Page</h3>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
