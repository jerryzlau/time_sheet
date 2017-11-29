var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimeSlotSchema = new Schema ({
  date: {
    type: Date,
    default: Date.now
  },
  checkIn: {
    type: Date,
    default: Date.now
  },
  checkOut: {
    type: Date
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model('TimeSlots', TimeSlotSchema);