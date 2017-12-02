var mongoose = require("mongoose");
var TimeSlot = mongoose.model("TimeSlots");

// seed database
exports.seed_time_sheet = (req, res) => {
  // create time slots
  const seeds = [
    {
      commit: "095ee7d7f1fa288329463c09f0e9caac32a5a602",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Dec 1 10:35:52 2017 -0800",
      message: "Get-reviews-from-hiring-manager"
    },
    {
      commit: "095ee7d7f1fa288329463c09f0e9caac32a5a602",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Dec 1 10:51:52 2017 -0800",
      message: "updated-title-and-favicon"
    },
    {
      commit: "9da9c7ae44a25979e12b9d5285ca75b4f0289eba",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Dec 1 10:47:36 2017 -0800",
      message: "update-readme.md"
    },
    {
      commit: "739c18e0f5b0d70d599f67a038915541e70bad5a",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 21:00:44 2017 -0800",
      message: "added-notes-pop-out-on-hover"
    },
    {
      commit: "8e9a1795f150cb3a4e54c54064a2c48b8208400a",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 20:21:35 2017 -0800",
      message: "wrote-script-to-jsonify-git-log-as-seed"
    },
    {
      commit: "ea29d1555936074f74ca27e041112850054e8151",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 17:50:56 2017 -0800",
      message: "created-check-out-button-at-current-time"
    },
    {
      commit: "5fca08e9b509e85ae1f5965a3a637087ad0acc94",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 12:07:12 2017 -0800",
      message: "remove-frontend-default-readme"
    },
    {
      commit: "071ddd1b14448143ecfd0974f376fab99838da77",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 02:05:14 2017 -0800",
      message: "fixed-padding-make-check-out-button-next"
    },
    {
      commit: "c935db602a7c11c5f2e7601e878935ab47be332b",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 01:24:31 2017 -0800",
      message: "fixed-whole-page-reload-problem-fixed-by-form-preventDefault"
    },
    {
      commit: "9bccf7424aef828b26e13028dfaa06c974ae9582",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 01:11:04 2017 -0800",
      message: "fixed-checkin-input-height"
    },
    {
      commit: "22cb3f032a0f8e10162d0a336387adffa5738318",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Thu Nov 30 01:09:21 2017 -0800",
      message: "Did-basic-stylging"
    },
    {
      commit: "a5ede828475a74e483d72233aa400caa25d6fd69",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Wed Nov 29 21:21:32 2017 -0800",
      message: "time-input-works-now"
    },
    {
      commit: "c40fadf9aa35dfd8a1d383e1f9a5b180732eb236",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Wed Nov 29 18:31:18 2017 -0800",
      message:
        "decided-to-store-time-as-strings-instead-and-have-input-validation"
    },
    {
      commit: "a9d6bb1c9cb86034bec4b96908873b19fea22f88",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Wed Nov 29 12:23:46 2017 -0800",
      message:
        "problem-not-in-db-in-state-delete-not-update-index-problem-solved"
    },
    {
      commit: "c0368bf98b4dd1de560ded811c91c5e4a0ba5eee",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Wed Nov 29 01:13:51 2017 -0800",
      message: "edit-timslot-entry-works-handle-date-input-format-next"
    },
    {
      commit: "9057cb803bd794e0ec199234cd53d0b81d08f540",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Wed Nov 29 00:52:19 2017 -0800",
      message: "problem-in-db-fetch-happened-before-remove-is-done"
    },
    {
      commit: "c5639526529f8e59feab838b928239afb8f7f197",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Wed Nov 29 00:38:32 2017 -0800",
      message:
        "successfully-deleted-timeSlot-entry-with-front-end-button-need-to-fix-reload-index-problem"
    },
    {
      commit: "a81a09550e5ce02fd577c7e62f066425c15874f0",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 22:50:44 2017 -0800",
      message: "solved-child-component-update-parent-component-trick"
    },
    {
      commit: "5b7d71c56194c412bd3b1a9fc776b92fecf629bd",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 22:08:09 2017 -0800",
      message: "changing-schema-to-store-ISOString-instead-of-Date-Object"
    },
    {
      commit: "8b47864479f7c945a789225443fba02a43e5abae",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 19:28:00 2017 -0800",
      message: "working-on-time-manipulation"
    },
    {
      commit: "21b7189f55228058afeef3c0392ec0af633d6b4b",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 18:52:24 2017 -0800",
      message:
        "create-form-works-needed-to-destructure-in-ajax-call-fix-input-format-next"
    },
    {
      commit: "516bcf0eb14e21b638a75236a9a4ade5c63cc69f",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 16:44:09 2017 -0800",
      message: "working-on-create-form"
    },
    {
      commit: "afbd47b32aff6f9a71e6a0f2416add7609d19066",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 16:32:29 2017 -0800",
      message: "added-some-styling-to-hel-visualize"
    },
    {
      commit: "d9658601e1631e538142fa10ae7e67e449ed1b77",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 16:12:15 2017 -0800",
      message:
        "index-and-index-item-successfully-displayed-work-on-create-form-next"
    },
    {
      commit: "2109c08956cdafc4797438f0e5379583f6ef9854",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 15:22:35 2017 -0800",
      message: "made-index-need-index_item-jsx"
    },
    {
      commit: "22d9cb8387ba78ffa8fccca233318d6b9f5e00b7",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 15:11:55 2017 -0800",
      message:
        "took-out-redux-cycle-not-neccssary-for-this-app-will-do-everything-in-one-page"
    },
    {
      commit: "4390de309757e975fff4cd5504e7e9452596c30f",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 15:03:14 2017 -0800",
      message: "set-up-store-move-on-to-components"
    },
    {
      commit: "54b4da399b8c2b2c8886b3bbdc1728f6ac30c7c1",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 14:49:16 2017 -0800",
      message: "created-store"
    },
    {
      commit: "721895f39b2b7fe1a98a41a4ab4ed3bb8fef973d",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 14:46:10 2017 -0800",
      message: "finished-index-reducer-map-everything-to-root-reducer-next"
    },
    {
      commit: "74bb5900ed05860d45560c7c348771941db23763",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 14:38:27 2017 -0800",
      message: "created-index-action-creator-make-reducer-next"
    },
    {
      commit: "4bba98bdcbf602bda9db00880e002131a7bdad06",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 14:27:52 2017 -0800",
      message: "implemented-all-CRUD-ajax-request-all-tests-passed"
    },
    {
      commit: "458bc4897d457b3cae73527e4a39f037bb06a21b",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 12:07:46 2017 -0800",
      message: "testing-fetch-succesfully-fetch-from-backend"
    },
    {
      commit: "df6f5366c5177c2693531402dc0b293a09b715f6",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 11:11:35 2017 -0800",
      message: "set-up-react-framework"
    },
    {
      commit: "ced8d1f8c5c9580c57f9a63a3c4841ac4f64e8aa",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 11:07:18 2017 -0800",
      message: "added-not-found-message"
    },
    {
      commit: "94f7a2c7915754abc6ac2a55c2600a68248b4ffb",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 10:50:26 2017 -0800",
      message: "set-up-the-basic-backend"
    },
    {
      commit: "40608e239ec4e70397814f7df8589d1b93470e18",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 10:32:41 2017 -0800",
      message: "update-server-to-take-timeslot-routes"
    },
    {
      commit: "dd6d0704832c7d3d5f2f173a14eb32287e9f2331",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 10:26:50 2017 -0800",
      message: "TimeSlot-model-singular"
    },
    {
      commit: "c4814680b86ae2ecbcc6f7ddab196a22587e0929",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 10:22:55 2017 -0800",
      message: "set-up-the-controller-make-more-sense-to-name-it-time-slot"
    },
    {
      commit: "a4745ac4320f4515c1429ce9c60166dca15e126c",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 09:49:43 2017 -0800",
      message: "set-up-routes"
    },
    {
      commit: "bb04b73f7de6007fb1269b174da5c71f9737c199",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 09:43:39 2017 -0800",
      message: "set-up-timeSheetModel"
    },
    {
      commit: "48f553a08ad44821332101f0fd54f3f5e1fec5e3",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 09:32:22 2017 -0800",
      message: "server-running-on-port-5000"
    },
    {
      commit: "b1530573395d298def9aea5695ed8e69834067ff",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Tue Nov 28 09:23:39 2017 -0800",
      message: "setting-up-file-structure-for-backend"
    },
    {
      commit: "bb244c23443403ae45679ab900ac4cf43f8644b8",
      author: "Jerry Lau <jerryzlau@gmail.com>",
      date: "Mon Nov 27 16:16:27 2017 -0800",
      message: "first-commit"
    }
  ];

  // use timeSlot to insert/save
  // start with the first one
  let checkIn = "16:12";
  seeds
    .forEach((seed, idx) => {
      let checkOut;
      if (idx !== 0) {
        checkIn = seeds[idx - 1].date.slice(11, 16);
      }
      const date = new Date(seed.date).toLocaleDateString();
      if (idx === 0) {
        checkOut = "";
      } else {
        checkOut = seed.date.slice(11, 16);
      }
      const comment = seed.message.split("-").join(" ");
      const deliver = { checkIn, date, comment, checkOut };

      let seedEntry = new TimeSlot(deliver);
      seedEntry.save();
    });

  // seeded!
  console.log('Sucessfully Seeded');
};
