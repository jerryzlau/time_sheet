var mongoose = require("mongoose");
var TimeSlot = mongoose.model("TimeSlots");

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
  console.log('Database seeded!');
};
