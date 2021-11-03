import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../comp css/Payment.css";

import { UserContext } from "../context/UserContext";
const Payment = ({ price }) => {
  const context = useContext(UserContext);
  const { cart } = useContext(UserContext);
  var amount = 0;
  parseInt(price);
  cart.forEach((item) => {
    parseInt((amount = amount + parseInt(item.price)));
  });
  if (context.user?.uid) {
    return (
      <div className="payment">
        <div className="payment-container">
          <h1>Purchase Successful !</h1>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Order will be delivered to:</h3>
            </div>
            <div className="payment-address">
              <p>
                <b>T{context.user?.email}</b>
              </p>
              <br />
              <p>abc lane</p>
              <p>xyz city,India</p>
              <br />
              <p>
                Order Id is <b> 404-01w524-590591</b>
              </p>
              <br />
              <p>
                <b>Total payable amount - Rs {amount}</b>{" "}
              </p>
            </div>
          </div>
          <div className="payment-section">
            <div className="payment-title">
              <h3>The Ordered items</h3>
            </div>
            <div className="payment-items">
              {cart.map((item) => (
                <div className="confirmed">
                  {item.title}
                  <br />
                  Rs {item.price}
                  <br />
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="continue-shop">
            <div className="payment-title">
              <div className="payment-btn">
                <button onClick={() => (cart.length = 0)} className="final-btn">
                  <Link to="/">Continue shopping ?</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="payment-details"></div>
        </div>
      </div>
    );
  }
  return <Redirect to="/signin" />;
};

export default Payment;
