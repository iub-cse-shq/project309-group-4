var mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true },
 degree: { type: String, required: true },
 experience: { type: String, required: true },
 speciality: { type: String, required: true }
})
var Doctor = mongoose.model('Doctor', doctorSchema)
module.exports = Doctor