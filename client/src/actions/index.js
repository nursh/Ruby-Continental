import {
  ADD_ITEM,
  REMOVE_ITEM,
  CREATE_ORDER,
  UPDATE_ITEM,
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

export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item
})

export const removeItemFromOrder = itemName => ({
  type: REMOVE_ITEM,
  payload: itemName
});

