//for creating new account
function signup(data, successCallback, failureCallback) {
    console.log(data)
    return $.ajax({
        url: '/profile/new',
        type: 'POST',
        data: data,
        success: successCallback,
        error: failureCallback
    })
}

$('#createAccountBtn').click(function(){
    let name = $('#name').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let cpassword = $('#cpassword').val()
    console.log("submited")

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

//forlogin
function login(successCallback, failureCallback) {
    return  $.ajax(
        {
            url: '/login/:id',
            type:'GET',
            success: successCallback,
            error: failureCallback
        }
    ) 
}
$('#SignInBtn').click(function(){
    let successCallback = (response) => {
        console.log(response)
}
let failureCallback = (response) => {
    console.log(response)
    alert('something went wrong')
}
login(successCallback, failureCallback)
})

//for editing profile
function editProfile(data, successCallback, failureCallback) {
    return $.ajax({
        url: '/login/:id',
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
//for searching doctor
// function Serach(successCallback, failureCallback) {
//     return  $.ajax(
//         {
//             url: '/profile/:id',
//             type:'GET',
//             success: successCallback,
//             error: failureCallback
//         }
//     ) 
// }
// $('.searchBtn').click(function(){
//     let successCallback = (response) => {
//         console.log(response)
// }
// let failureCallback = (response) => {
//     console.log(response)
//     alert('something went wrong')
// }
// Serach(successCallback, failureCallback)
// })

//for sending appointment request
function sendRequest(data, successCallback, failureCallback) {
    console.log(data)
    return $.ajax({
        url: '/request/new',
        type: 'POST',
        data: data,
        success: successCallback,
        error: failureCallback
    })
}

$('#AppointmentRequestBtn').click(function(){
    let name = $('#name').val()
    let email = $('#email').val()
    console.log("submited")

    let newUser = {
        name: name,
        email: email

    }
    let failureCallback = (response) => {
        console.log(response)
        alert('something went wrong')
    }
    let successCallback = (response) => {
        console.log(response)
    }
    sendRequest(newUser, successCallback, failureCallback)
})
module.exports = { sendRequest, Serach, editProfile, signup  }
