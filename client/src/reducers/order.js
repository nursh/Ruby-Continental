import { CREATE_ORDER } from "../actions/types";


export default (order = null, action) => {
  switch(action.type) {
    case CREATE_ORDER:
      return action.payload;
    default: 
      return order;
  }
}