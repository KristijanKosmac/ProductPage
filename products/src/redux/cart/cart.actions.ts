import CartActionTypes from "./cart.types";

export const addItem = (item: any) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: any) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item: any) => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: item,
});
