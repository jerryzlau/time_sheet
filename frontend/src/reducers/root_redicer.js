import timeSlotReducer from './timeSlot_reducer';
import { combineReducer } from 'redux';

const RootReducer = combineReducer({
  timeSlots: timeSlotReducer
});