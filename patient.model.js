var mongoose = require('mongoose')
const patientSchema = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true },
 prescription: { type: String, required: true },
 reportID: { type: String, required: true },
 appointmentID: { type: String, required: true }
})
var Patient = mongoose.model('Patient', patientSchema)
module.exports = Patient