var mongoose = require('mongoose')
const profileSchema = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true },
 userType: { type: String, required: true },
 password: { type: String, required: true },
 gender: { type: String, required: true },
 dateOfBirth: { type: String, required: true },
 cpassword: { type: String, required: true }
 
})
var Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile