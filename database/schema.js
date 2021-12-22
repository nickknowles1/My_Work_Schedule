
const mongoose = require('mongoose');


const addressSchema = mongoose.Schema({
  address: String,
  unit: String,
  city: String,
  state: String
})

const businessSchema = mongoose.Schema({
  businessID: {
    type: Number,
    unique: true
  },
  businessPassword: String,
  businessName: String,
  businessLocation: addressSchema,
  phoneNumber: String,
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  logo: String,
}, {timestamps: true});

const employeeSchema = mongoose.Schema({
  employeeID: {
    type: Number,
    unique: true
  },
  employedAt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business'
  },
  address: addressSchema,
  employeeUsername: String,
  employeePassword: String,
  employeeFirstName: String,
  employeeLastName: String,
  email: String,
  phoneNumber: String,
  employeeType: [String]
}, {timestamps: true});

const jobSchema = mongoose.Schema({
  jobType: String,
  timeScheduled: Date,
  endOfShift: Date,
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }
});

const shiftSchema = mongoose.Schema({
  shiftName: {
    type: String,
    enum: ['AM', 'PM', 'other']
  },
  jobs: [jobSchema],
  requestsOff: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}],
  requestsOn: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}]
});

const dailyScheduleSchema = mongoose.Schema({
  scheduleType: {
    type: String,
    enum: ['FOH', 'BOH', 'other']
  },
  shifts: [shiftSchema],
  date: Date,
});

const weeklyScheduleSchema = mongoose.Schema({
  scheduleType: {
    type: String,
    enum: ['FOH', 'BOH', 'other']
  },
  weekStarting: Date,
  weekEnding: Date,
  Monday: dailyScheduleSchema,
  Tuesday: dailyScheduleSchema,
  Wednesday: dailyScheduleSchema,
  Thursday: dailyScheduleSchema,
  Friday: dailyScheduleSchema,
  Saturday: dailyScheduleSchema,
  Sunday: dailyScheduleSchema
})

const Employee = mongoose.model('Employee', employeeSchema);
const Business = mongoose.model('Business', businessSchema);
const Address = mongoose.model('Address', addressSchema);
const Job = mongoose.model('Job', jobSchema);
const Shift = mongoose.model('Shift', shiftSchema);
const Day = mongoose.model('Day', dailyScheduleSchema);
const Week = mongoose.model('Week', weeklyScheduleSchema);

module.exports = {
  Employee,
  Business,
  Address,
  Job,
  Shift,
  Day,
  Week
}

// let findNick = async () => {
//   return await Employee.find({})
// }

// module.exports = {
//   findNick
// };


// let user1 = new Employee ({
//   employeeUsername: 'big_knowles',
//   employeePassword: '123456',
//   employeeFirstName: 'Nick',
//   employeeLastName: 'Knowles',
//   email: 'big_knowles@hotmail.com',
//   phoneNumber: '917-930-1570',
//   employeeType: 'server'
// });

// user1.save();



