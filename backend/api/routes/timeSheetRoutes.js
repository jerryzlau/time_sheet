module.exports = function(app){
  var timeSheetController = require('../controllers/timeSheetController');

  // index, create 
  app.route('/timesheet')
    .get(timeSheetController.timesheet_index)
    .post(timeSheetController.create_time_slot);

  // show, update, delete
  app.route('/timesheet/:timesheetId')
    .get(timeSheetController.find_time_slot)
    .put(timeSheetController.update_time_slot)
    .delete(timeSheetController.delete_time_slot);
};