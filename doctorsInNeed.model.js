var mongoose = require('mongoose')
const profileSchema = new mongoose.Schema({
 title: { type: String, required: true },
 content: String
})
var Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile