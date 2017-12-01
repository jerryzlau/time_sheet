var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimeSlotSchema = new Schema({
  date: {
    type: String
  },
  checkIn: {
    type: String
  },
  checkOut: {
    type: String
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model('TimeSlots', TimeSlotSchema);