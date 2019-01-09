import { combineReducers } from 'redux';

import items from './items';
import total from './total';

export default combineReducers({
  items,
  total
});


