import { RECEIVE_TIMESLOTS } from '../actions/timeSlot_actions';

const timeSlotReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TIMESLOTS:
      return Object.assign({}, action.timeSlots);
    default: 
      return state;
  }
};

export default timeSlotReducer;