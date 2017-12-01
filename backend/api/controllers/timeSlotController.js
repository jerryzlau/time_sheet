var mongoose = require('mongoose');
var TimeSlot = mongoose.model('TimeSlots');

// get index 
exports.timeslot_index = (req, res) => {
  TimeSlot.find({}, (err, timeSlot) => {
    if(err){
      res.state(500).send('Error: Cannot fetch timeslot');
    }else{
      res.status(200).send(timeSlot);
    }
  });
};

// create 
exports.create_time_slot = (req, res) => {
  var timeSlot = new TimeSlot();
  timeSlot.comment = req.body.comment;
  
  // store the hour and minutes as strings
  let hour = new Date().getHours().toString();
  let min = new Date().getMinutes().toString();

  // pad leading zeros 
  if(hour.length === 1) hour = '0' + hour;
  if(min.length === 1) min = '0' + min;
  timeSlot.checkIn = `${hour}:${min}`;
  timeSlot.date = new Date().toLocaleDateString();

  timeSlot.save((err, newTimeSlot) => {
    if(err){
      res.status(500).send('Error: Cannot create time slot');
    }else{
      res.status(200).send(newTimeSlot);
    }
  });
};

// show 
exports.find_time_slot = (req, res) => {
  TimeSlot.findOne({_id: req.params.timeSlotId}, (err, timeSlot) => {
    if(err){
      res.status(500).send('Error: Cannot fetch time slot');
    }else{
      res.status(200).send(timeSlot);
    }
  });
};

// update 
exports.update_time_slot = (req, res) => {
  TimeSlot.findOneAndUpdate({_id: req.params.timeSlotId}, 
    req.body, {new: true}, (err, newTimeSlot) => {
    if(err){
      res.status(500).send('Error: Cannot update time slot');
    }else{
      res.status(200).send(newTimeSlot);
    }
  });
};

// delete 
exports.delete_time_slot = (req, res) => {
  TimeSlot.findOneAndRemove({_id: req.params.timeSlotId}, (err, timeSlot) => {
    if(err){
      res.status(500).send('Error: Cannot delete time slot');
    }else{
      res.status(200).send(timeSlot);
    }
  });

};