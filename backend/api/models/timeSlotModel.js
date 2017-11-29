var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimeSlotSchema = new Schema ({
  checkIn: {
    type: Date,
    default: Date.now
  },
  checkOut: {
    type: Date
  },
  comment: {
    type: String,
    default: "Today is a great day!"
  }
});

module.exports = mongoose.model('TimeSlots', TimeSlotSchema);