import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../actions/types";
import update from 'immutability-helper';


export default (items = [], action) => {
  switch(action.type) {
    case ADD_ITEM: {
      if (action.payload.quantity === 0) return items;
      return [...items, action.payload];
    }
    case REMOVE_ITEM: {
      return items
        .filter(item => item.name !== action.payload);
    }
    case UPDATE_ITEM: {
      const { name, quantity } = action.payload;
      const itemIndex = items.findIndex(item => item.name === name);

      if (quantity === 0) return items.filter(item => item.name !== name);

      return update(items, {
        [itemIndex]: {
          quantity: {
            $set: quantity
          }
        }
      });
    }
    default: 
      return items;
  }
}
