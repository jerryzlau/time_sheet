var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimeSheetSchema = new Schema ({
  createdOn: {
    type: Date,
    default: Date.now
  },
  checkIn: {
    type: Date
  },
  checkOut: {
    type: Date
  },
  comment: {
    type: String,
    default: "Today is a great day!"
  }
});

module.exports = mongoose.model('TimeSheetSchema', TimeSheetSchema);