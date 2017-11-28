/*eslint-env jquery*/

// fetch time slot index
export const fetchTimeSlots = () => (
  $.ajax({
    method: 'GET',
    url: '/api/timeslots'
  })
);

// fetch time slot 
export const fetchTimeSlot = timeSlotId => (
  $.ajax({
    method: 'GET',
    url: `/api/timeslots/${timeSlotId}`
  })
);

// create time slot 
export const createTimeSlot = timeSlot => (
  $.ajax({
    method: 'POST',
    url: '/api/timeslots',
    data: timeSlot
  })
);

// update time slot 
export const updateTimeSlot = timeSlot => (
  $.ajax({
    method: 'PUT',
    url: `/api/timeslots/${timeSlot.id}`,
    data: timeSlot
  })
);

// delete time slot 
export const deleteTimeSlot = timeSlotId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/timeslots/${timeSlotId}`
  })
);