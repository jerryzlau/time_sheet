var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var mongoose = require('mongoose');
var TimeSlot = require('./api/models/timeSlotModel');
var bodyParser = require('body-parser');
var path = require('path');
var seedTimeSheet = require('./api/seeds');
var TimeSheet = mongoose.model("TimeSlots");

// mongoose url connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TimeSlotdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/timeSlotRoutes');
// register routes
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

// seeding the database 
TimeSheet.find({}, (err, timeSlot) => {
  if (err) {
    console.log(err);
  } else {
    if(timeSlot.length === 0){
      seedTimeSheet.seed_time_sheet();
    }
  }
});

// Listen on port 5000
app.listen(port, () => {
  console.log('Listening on PORT:', port, '...');
});