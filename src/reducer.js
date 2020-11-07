export const initialState = {
  cart: [],
};

//Selector
export const AddTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.items],
      };
    default:
      return state;
  }
};
export default reducer;
