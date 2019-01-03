import {
  ADD_ITEM,
  REMOVE_ITEM,
  CREATE_ORDER,
  ADD_QUANTITY,
  REDUCE_QUANTITY
} from "./types";

export const createOrder = orderId => ({
  type: CREATE_ORDER,
  payload: orderId
});

export const addItemToOrder = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItemFromOrder = itemName => ({
  type: REMOVE_ITEM,
  payload: itemName
});

export const addItemQuantity = itemName => ({
  type: ADD_QUANTITY,
  payload: itemName
});

export const reduceItemQuantity = itemName => ({
  type: REDUCE_QUANTITY,
  payload: itemName
});
