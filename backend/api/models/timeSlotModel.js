var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log(new Date().toISOString());

var TimeSlotSchema = new Schema({
  date: {
    type: String
  },
  checkIn: {
    type: String
  },
  checkOut: {
    type: String,
    default: "..."
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model('TimeSlots', TimeSlotSchema);