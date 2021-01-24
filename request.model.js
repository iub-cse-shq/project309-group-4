var mongoose = require('mongoose')
const requestSchema = new mongoose.Schema({
 name: { type: String, required: true }
})
var Request = mongoose.model('Request', requestSchema)
module.exports = Request