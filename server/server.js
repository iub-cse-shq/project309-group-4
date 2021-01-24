var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var server = http.Server(app)
var Profile = require('../profile.model')
var Request = require('../request.model')
const path = require('path');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/static', express.static(path.join(__dirname , '/static')))


var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var dbURL = 'mongodb://localhost:27017/dinDatabase'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', function (err) {
 console.log(err)
})

app.get('/',function(request, response){
	response.sendFile(__dirname+'/client/login.html')

})

app.get('/',function(request, response){
	response.sendFile(__dirname+'/client/bg.jpg')

})




app.get('/client/signup',function(request, response){
	response.sendFile(path.join(__dirname,'/client/signup.html'))

})

app.get('/profiles/all', function(request, response){
    Profile.find({}, function (err, data) {
      if(err){
        return response.status(400).json({
          error: 'data is missing'
        })
      }
        console.log(data);
      return response.status(200).json(JSON.stringify(data));
      })

})


app.post('/profile/new', function(request, response){
  console.log("req.body", request.body)
  var addNewProfile = new Profile(request.body)

  addNewProfile.save(function (err, data) {
      if (err)
      {
        console.log("From ", err)
        return response.status(400).json({
          error: 'data is missing'
        })
      }
       
      return response.status(200).json({
        message: 'Profile created successfully'
      })
    })
  })
  //for sending appointment request
  app.post('/request/new', function(request, response){
    console.log("req.body", request.body)
    var addNewRequest = new Request(request.body)
  
    addNewRequest.save(function (err, data) {
        if (err)
        {
          console.log("From ", err)
          return response.status(400).json({
            error: 'data is missing'
          })
        }
         
        return response.status(200).json({
          message: 'Profile created successfully'
        })
      })
    })

      //for login
app.get('/login/:id', function (request, response) {

  Profile.findById(request.params.id, function (err, data) {
      response.render('DoctorsProfileFromDoctorsView.html', {
          Profile: data
      })
  })
})

app.get('/login/:id', function (request, response) {

  Profile.findById(request.params.id, function (err, data) {
      response.render('PatientProfileFromPatientsView.html', {
          Profile: data
      })
  })
})

//for searching doctor
// app.get('/profile/:id', function (request, response) {

//   Profile.findById(request.params.id, function (err, data) {
//       response.render('DoctorsProfileFromPatientsView.html', {
//           Profile: data
//       })
//   })
// })



app.get('/client/DoctorsProfileFromDoctorsView', function(request, response){
	response.sendFile(__dirname+'/client/DoctorsProfileFromDoctorsView.html')
})
app.get('/client/DoctorsProfileFromPatientsView',function(request, response){
	response.sendFile(__dirname+'/client/DoctorsProfileFromPatientsView.html')

})

app.get('/client/PatientsPageFromDoctorsView', function(request, response){
	response.sendFile(__dirname+'/client/PatientsPageFromDoctorsView.html')

})

app.get('/client/PatientProfileFromPatientsView', function(request, response){
	response.sendFile(__dirname+'/client/PatientProfileFromPatientsView.html')
})

// app.get('/client/bg', function(request, response){
// 	response.sendFile(__dirname+'/client/bg.jpg')
// })


server.listen(process.env.PORT || 3000, 
	process.env.IP || 'localhost', function(){
					  console.log('Server running');
	})
	
 module.exports = {app, server, mongoose}