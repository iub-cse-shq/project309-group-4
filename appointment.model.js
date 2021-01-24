var mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
 appointmentID: { type: String, required: true },
 Time: { type: Time, required: true },
 date: { type: Date, required: true }
})
var Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment