import { CALC_TOTAL } from "../actions/types";


export default (total = 0, action) => {
  switch(action.type) {
    case CALC_TOTAL:
      return action.payload
        .reduce((sum, item) => sum += item.price * item.quantity, 0);
    default: 
      return total;
  }
}