import * as timeSlotAPIUtil from '../util/timeSlots_util';

export const RECEIVE_TIMESLOTS = "RECEIVE_TIMESLOTS";
export const RECEIVE_TIMESLOT = "RECEIVE_TIMESLOT";
export const REMOVE_TIMESLOT = "REMOVE_TIMESLOT";

export const receiveTimeSlots = timeSlots => ({
  type: RECEIVE_TIMESLOTS,
  timeSlots
});

export const requestTimeSlots = () => dispatch => (
  timeSlotAPIUtil.fetchTimeSlots()
    .then(timeSlots => dispatch(receiveTimeSlots(timeSlots)))
);