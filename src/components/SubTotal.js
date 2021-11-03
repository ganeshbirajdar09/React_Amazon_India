import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../comp css/SubTotal.css";
import { UserContext } from "../context/UserContext";
const SubTotal = ({ price }) => {
  const { cart } = useContext(UserContext);
  const history = useHistory();

  var amount = 0;
  parseInt(price);
  cart.forEach((item) => {
    parseInt((amount = amount + parseInt(item.price)));
  });

  return (
    <div className="subtotal">
      <h3>
        Subtotal ({cart.length} items):
        <strong>₹ {parseInt(amount)}</strong>
      </h3>
      <small className="gift">
        <input type="checkbox" name="" id="" />
        This order contains a gift
      </small>
      <button onClick={(e) => history.push("/payment")}>Buy Now</button>
    </div>
  );
};

export default SubTotal;
