var mongoose = require('mongoose');
var TimeSlots = mongoose.model('TimeSlots');

// get index 
exports.timeslot_index = (req, res) => {
  TimeSlots.find({}, (err, timeSlot) => {
    if(err){
      res.state(500).send('Error: Cannot fetch timeslot');
    }else{
      res.status(200).send(timeSlot);
    }
  });
};

// create 
exports.create_time_slot = (req, res) => {
  var timeSlot = new TimeSlots(req.body);
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
  TimeSlots.findOne({_id: req.params.timeSlotId}, (err, timeSlot) => {
    if(err){
      res.status(500).send('Error: Cannot fetch time slot');
    }else{
      res.status(200).send(timeSlot);
    }
  });
};

// update 
exports.update_time_slot = (req, res) => {
  TimeSlots.findOneAndUpdate({_id: req.params.timeSlotId}, 
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
  TimeSlots.findOneAndRemove({_id: req.params.timeSlotId}, (err, timeSlot) => {
    if(err){
      res.status(500).send('Error: Cannot delete time slot');
    }else{
      res.status(200).json({message: 'Time slot successfully deleted'});
    }
  });
};