var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var TimeSlot = require('./api/models/timeSlotModel');
var bodyParser = require('body-parser');

// mongoose url connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TimeSlotdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/timeSlotRoutes');
// register routes
routes(app);

app.get('/', (req, res) => {
  res.send('This is the root');
});

// Listen on port 5000
app.listen(port, () => {
  console.log('Listening on PORT:', port, '...');
});