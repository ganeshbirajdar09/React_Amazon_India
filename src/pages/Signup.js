import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../comp css/Signin.css";
import loginlogo from "../pngs/signinlogo.png";
import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";

const Signup = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNewUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    handleNewUser();
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
        <h1>Create Account</h1>
        <form onSubmit={handleSignup}>
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
          <button type="submit" className="signin-btn">
            Create Account
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
        <p>
          Already have an account? &nbsp;
          <Link className="redirect-signin" to="/signin">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
