module.exports = function(app){
  var timeSlotController = require('../controllers/timeSlotController');

  // index, create 
  app.route('/timeslots')
    .get(timeSlotController.timeslot_index)
    .post(timeSlotController.create_time_slot);

  // show, update, delete
  app.route('/timeslots/:timeSlotId')
    .get(timeSlotController.find_time_slot)
    .put(timeSlotController.update_time_slot)
    .delete(timeSlotController.delete_time_slot);
};