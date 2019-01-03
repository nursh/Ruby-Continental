import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, REDUCE_QUANTITY } from "../actions/types";
import update from 'immutability-helper';


export default (items = [], action) => {
  switch(action.type) {
    case ADD_ITEM: {
      return [...items, action.payload];
    }
    case REMOVE_ITEM: {
      return items
        .filter(item => item.name !== action.payload);
    }
    case ADD_QUANTITY: {
      const itemIndex = items.findIndex(item => item.name === action.payload);
      return update(items, {
        [itemIndex]: {
          quantity: {
            $apply: (x) => x += 1
          }
        }
      });
    }
    case REDUCE_QUANTITY: {
      const itemIndex = items.findIndex(item => item.name === action.payload);
      const newItems = update(items, {
        [itemIndex]: {
          quantity: {
            $apply: (x) => {
              x -= 1;
              return x < 1 ? 0 : x;
            } 
          }
        }
      });
      return newItems
      .filter(item => item.quantity > 0);
    }
    default: 
      return items;
  }
}
