var mongoose = require('mongoose');
var TimeSlot = mongoose.model('TimeSlots');

// get index 
exports.timeslot_index = (req, res) => {
  TimeSlot.find({}, (err, timeSlot) => {
    if(err){
      res.state(500).send('Error: Cannot fetch timeslot');
    }else{
      timeSlot = timeSlot.sort((a,b) => {
        return (new Date(a.date) - new Date(b.date)) && 
          (a.checkIn.slice(0,2) - b.checkIn.slice(0,2)) && 
          (a.checkIn.slice(3) - a.checkIn.slice(3));
      });
      console.log(timeSlot);
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

// seed database 
exports.seed_time_sheet = (req, res) => {
  // create time slots 
  const seeds = [{
  "commit": "095ee7d7f1fa288329463c09f0e9caac32a5a602",
  "author": "Jerry Lau <jerryzlau@gmail.com>",
  "date": "Thu Dec 01 10:35:52 2017 -0800",
  "message": "Get-reviews-from-hiring-manager"
  },
  {
  "commit": "095ee7d7f1fa288329463c09f0e9caac32a5a102",
  "author": "Jerry Lau <jerryzlau@gmail.com>",
  "date": "Thu Dec 01 10:51:52 2017 -0800",
  "message": "updated-title-and-favicon"
  },
  {
  "commit": "739c18e0f5b0d70d599f67a038915541e70bad5a",
  "author": "Jerry Lau <jerryzlau@gmail.com>",
  "date": "Thu Nov 30 21:00:44 2017 -0800",
  "message": "added-notes-pop-out-on-hover"
  },
  {
  "commit": "8e9a1795f150cb3a4e54c54064a2c48b8208400a",
  "author": "Jerry Lau <jerryzlau@gmail.com>",
  "date": "Thu Nov 30 20:21:35 2017 -0800",
  "message": "wrote-script-to-jsonify-git-log-as-seed"
  }];

  // use timeSlot to insert/save 
  // start with the first one
  let checkIn = '16:12';
  seeds.reverse().forEach((seed, idx) => {
    let checkOut;
    if(idx !== 0){
      checkIn = seeds[idx - 1].date.slice(11, 16);
    }
    const date = new Date(seed.date).toLocaleDateString();
    if (seed.commit === "095ee7d7f1fa288329463c09f0e9caac32a5a602") {
      checkOut = "";
    } else {
      checkOut = seed.date.slice(11, 16);
    }
    const comment = seed.message.split('-').join(' ');
    const deliver = {
      checkIn,
      date,
      comment,
      checkOut
    };

    let seedEntry = new TimeSlot(deliver);
    seedEntry.save();
  });

  // seeded!
  res.send('Database seeded!');
};