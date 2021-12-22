const mongoose = require('mongoose');
const {dbInfo, dbInfo2} = require('../config');
mongoose.connect(`mongodb://${dbInfo2}`);
const {Employee, Business, Address, Job, Shift, Day, Week} = require('./schema.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to Mongo:'));
db.once('open', function () {
  console.log('Connected to MongoDB!');
});

const findUser = async function () => {

}

