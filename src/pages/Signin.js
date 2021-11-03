import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../comp css/Signin.css";
import loginlogo from "../pngs/signinlogo.png";
import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";

const Signin = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin">
      <Link to="/">
        <img className="signin-logo" src={loginlogo} alt="" />
      </Link>

      <div className="signin-container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button onClick={handleSubmit} type="submit" className="signin-btn">
            Continue
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p>Need help?</p>
        <div className="new">
          <h5>New to Amazon?</h5>
        </div>
        <Link to="/signup">
          <button className="signup-btn">Create your Amazon Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
