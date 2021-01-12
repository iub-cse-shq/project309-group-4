var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var server = http.Server(app)
var Profile = require('./doctorsInNeed.model')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var dbURL = 'mongodb://localhost:27017/dinDatabase' //change this if you are using Atlas
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', function (err) {
 console.log(err)
})

app.get('/client/',function(request, response){
	response.sendFile(__dirname+'/client/log in.html')

})

app.get('/client/DoctorsProfileFromDoctorsView', function(request, response){
	response.sendFile(__dirname+'/client/DoctorsProfileFromDoctorsView.html')
})
app.get('/client/DoctorsProfileFromPatientsView',function(request, response){
	response.sendFile(__dirname+'/client/DoctorsProfileFromPatientsView.html')

})

app.get('/PatientsPageFromDoctorsView', function(request, response){
	response.sendFile(__dirname+'/client/PatientsPageFromDoctorsView.html')

})

app.get('client/PatientProfileFromPatientsView', function(request, response){
	response.sendFile(__dirname+'/client/PatientProfileFromPatientsView.html')
})
app.get('client/sign up',function(request, response){
	response.sendFile(__dirname+'/client/sign up.html')

})

server.listen(process.env.PORT || 3000, 
	process.env.IP || 'localhost', function(){
					  console.log('Server running');
	})




module.exports = {app, server, mongoose}