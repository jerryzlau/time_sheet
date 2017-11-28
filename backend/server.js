var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var TimeSlot = require('./api/models/timeSlotModel');
var bodyParser = require('body-parser');



app.listen(port, () => {
  console.log('Listening on PORT:', port, '...');
});