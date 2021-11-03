import { ADD_TO_CART, REMOVE_FROM_CART } from "./action.types";

const UserReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
};
export default UserReducer;
