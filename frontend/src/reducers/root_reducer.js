import timeSlotReducer from './timeSlot_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  timeSlots: timeSlotReducer
});

export default RootReducer;