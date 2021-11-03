import React, { useContext } from "react";
import "../comp css/BillingProduct.css";
import { REMOVE_FROM_CART } from "../context/action.types";
import { UserContext } from "../context/UserContext";

const BillingProduct = ({ id, title, image, rating, price }) => {
  const { cart, dispatch } = useContext(UserContext);

  const deleteProduct = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };
  return (
    <div className="finalProducts">
      <img className="finalProduct-image" src={image} alt="Image" />
      <div className="finalProduct-info">
        <p className="finalProduct-title">{title}</p>
        <p className="finalProduct-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="finalProduct-rating">
          {Array(rating)
            .fill()
            .map((star, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="deleteProduct" onClick={() => deleteProduct()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BillingProduct;
