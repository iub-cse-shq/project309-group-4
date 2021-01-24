var mongoose = require('mongoose')
const reportSchema = new mongoose.Schema({
 email: { type: String, required: true },
 reportID: { type: String, required: true }
})
var Report = mongoose.model('Report', reportSchema)
module.exports = Report