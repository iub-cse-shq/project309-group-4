function signup(data, successCallback, failureCallback) {
    return $.ajax({
        url: 'profile/new',
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
        userType: email,
        password: password,
        gender: gender,
        dateOfBirth: dateOfBirth,
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
        url: 'profiles/all',
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
    editProfile(newUser, successCallback, failureCallback)
})

//for load names and other things on page
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