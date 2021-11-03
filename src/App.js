import React, { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import "./App.css";

//components
import Navbar from "./components/Navbar";
import SecondaryNav from "./components/SecondaryNav";
import Home from "./pages/Home";
import UserReducer from "./context/UserReducer";
import Billing from "./pages/Billing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

//firebase
import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";

//Pages
import Payment from "./pages/Payment";
import PageNotFound from "./pages/PageNotFound";

//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [cart, dispatch] = useReducer(UserReducer, []);

  //state for user's presence
  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ cart, dispatch, user, setUser }}>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <SecondaryNav />
              <Home />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route exact path="/checkout">
              <Navbar />
              <SecondaryNav />
              <Billing />
            </Route>
            <Route exact path="/payment">
              <Navbar />
              <Payment />
            </Route>
            <Route path="/signup" component={Signup} />
            <Route to="*" component={PageNotFound} />
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
