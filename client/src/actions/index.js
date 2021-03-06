import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  CALC_TOTAL
} from "./types";

export const addItemToOrder = item => ({
  type: ADD_ITEM,
  payload: item
});

export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item
});

export const calcTotal = items => ({
  type: CALC_TOTAL,
  payload: items
});

export const removeItemFromOrder = itemName => ({
  type: REMOVE_ITEM,
  payload: itemName
});

