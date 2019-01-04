import { combineReducers } from 'redux';

import order from './order';
import items from './items';

export default combineReducers({
  order,
  items
});


