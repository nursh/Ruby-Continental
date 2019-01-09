import { combineReducers } from 'redux';

import order from './order';
import items from './items';
import total from './total';

export default combineReducers({
  order,
  items,
  total
});


