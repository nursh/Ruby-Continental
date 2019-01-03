import { ADD_ITEM, REMOVE_ITEM, CREATE_ORDER, ADD_QUANTITY, REDUCE_QUANTITY } from "./actionTypes";


export const createOrder = (orderId) => ({
  type: CREATE_ORDER,
  payload: orderId
});

export const addItemToOrder = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItemFromOrder = (item) => ({
  type: REMOVE_ITEM,
  payload: item
});

export const addItemQuantity = (item) => ({
  type: ADD_QUANTITY,
  payload: item
});

export const reduceItemQuantity = (item) => ({
  type: REDUCE_QUANTITY,
  payload: item
});