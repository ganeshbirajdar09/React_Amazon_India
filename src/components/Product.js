import React,{useContext} from "react";
import "../comp css/Product.css";
import { ADD_TO_CART } from "../context/action.types";
import { v4 } from "uuid";
import { UserContext } from "../context/UserContext";

const Product = ({ id, title, rating, price, image }) => {
  const {cart,dispatch} = useContext(UserContext)
  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        title,
        price,
        id: v4(),
        rating,
        image
      }
    })
  }

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map(star => (
              <p >⭐</p>
            ))}
        </div>
      </div>


      <img src={image} alt="" />
      <button onClick={addToCart} >Add to Cart</button>
    </div>
  )
};
export default Product;
