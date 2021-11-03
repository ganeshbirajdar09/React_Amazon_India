import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../comp css/Billing.css";

//components
import Basket from "../pngs/Basket.png";
import BillingProduct from "../components/BillingProduct";
import SubTotal from "../components/SubTotal";

const Billing = () => {
  const { cart, dispatch } = useContext(UserContext);
  return (
    <div className="billing">
      <div className="billing-cart">
        {cart?.length === 0 ? (
          <div className="billing-msg">
            <div className="msg">
              <img className="basket-png" src={Basket} alt="" />
              <div className="deals">
                <h2>Your Amazon Basket is empty</h2>
                <Link className="today" to="/">
                  <h5>Shop today's deals</h5>{" "}
                </Link>
                <div className="btns">
                  <button className="signin-now">
                    <Link to="/signin">Sign in to your account</Link>
                  </button>
                  <button className="signup-now">
                    <Link to="/signup">Sign up now</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="empty"></div>
            <div className="warning-1">
              The price and availability of items at Amazon.in are subject to
              change. The shopping cart is a temporary place to store a list of
              your items and reflects each item's most recent price.
            </div>
            <div className="warning-2">
              {" "}
              Do you have a promotional code? We'll ask you to enter your claim
              code when it's time to pay.
            </div>
          </div>
        ) : (
          <div className="billing-container">
            <h2>Shopping Cart</h2>
            {cart?.map((item) => (
              <BillingProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="billing-subtotal">
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Billing;
