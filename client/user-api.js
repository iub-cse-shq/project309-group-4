function signup(data, successCallback, failureCallback) {
    return $.ajax({
        url: 'mongodb://localhost:27017/dinDatabase',
        type: 'POST',
        data: data,
        success: successCallback,
        error: failureCallback
    })
}

$('#subBtn').click(function(){
    let name = $('#name').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let cpassword = $('#cpassword').val()

    let newUser = {
        name: name,
        email: email,
        password: password,
        cpassword: cpassword

    }
    let failureCallback = (response) => {
        console.log(response)
        alert('something went wrong')
    }
    let successCallback = (response) => {
        console.log(response)
    }
    signup(newUser, successCallback, failureCallback)
})

//for edit button in page
function editProfile(data, successCallback, failureCallback) {
    return $.ajax({
        url: 'mongodb://localhost:27017/dinDatabase',
        type: 'POST',
        data: data,
        success: successCallback,
        error: failureCallback
    })
}

$('#editProfileBtn').click(function(){
    let name = $('#name').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let cpassword = $('#cpassword').val()

    let newUser = {
        name: name,
        email: email,
        password: password,
        cpassword: cpassword

    }
    let failureCallback = (response) => {
        console.log(response)
        alert('something went wrong')
    }
    let successCallback = (response) => {
        console.log(response)
    }
    signup(newUser, successCallback, failureCallback)
})

//for load names and other things on page
app.get('/log in/:id', function (request, response) {

    Article.findById(request.params.id, function (err, data) {
        response.render('DoctorsProfileFromDoctorsView.html', {
            profile: data
        })
    })
})

app.get('/log in/:id', function (request, response) {

    Article.findById(request.params.id, function (err, data) {
        response.render('PatientProfileFromPatientsView.html', {
            profile: data
        })
    })
})