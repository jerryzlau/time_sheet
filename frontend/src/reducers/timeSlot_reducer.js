import { RECEIVE_TIMESLOTS } from '../actions/timeSlot_actions';
import merge from 'loadash/merge';

const timeSlotReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TIMESLOTS:
      return merge({}, action.events);
    default: 
      return state;
  }
};

export default timeSlotReducer;