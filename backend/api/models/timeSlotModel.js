var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimeSlotSchema = new Schema({
  checkIn: {
    type: String,
    default: new Date().toISOString()
  },
  checkOut: {
    type: Date
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model('TimeSlots', TimeSlotSchema);