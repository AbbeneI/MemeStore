const mongoose = require('mongoose');

//taking our URI and adding it to the mongoose connection
mongoose.connect(process.env.DATABASE_URL);

//saving our db connection to a var
const db = mongoose.connection;

//db.on - event listener, on "connected" say it's connected

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});