'use strict'
const store = require('./../store')
const userShowHide = require('./userShowHide')

const signUpSuccess = (data) => {
  $('#sign-up-modal').modal('hide')
  $('#inputEmail4').val('')
  $('#inputPassword4').val('')
  $('#directions').text('Thanks for signing up! Now sign in to get started!')
  $('#SignUpFailure').text('')
  $('#signUpButton').hide()
}

const signUpFailure = () => {
  $('#SignUpFailure').text('Sign up did not work, please try again.')
}

const signInSuccess = (data) => {
  $('#sign-in-modal').modal('hide')
  const email = data.user.email
  const name = email.substring(0, email.lastIndexOf('@'))
  $('#directions').text('Welcome ' + name + '!')
  store.user = data.user
  $('#inputEmail3').val('')
  $('#inputPassword3').val('')
  $('#SignInFailure').text('')
  userShowHide.signInView()
}

const signInFail = () => {
  $('#SignInFailure').text('Email or password is not correct, please try again.')
}
const signOutSuccess = (data) => {
  $('#directions').text('Sign up or sign in!')
  store.user = {}
  $('#inputEmail3').val('')
  $('#inputPassword3').val('')
  userShowHide.signOutView()
}
const signOutFail = (data) => {
  $('#directions').text('sign out failed')
  $('#inputEmail3').val('')
  $('#inputPassword3').val('')
}

const changePasswordSuccess = (data) => {
  $('#change-pass-modal').modal('hide')
  $('#changePasswordFailure').text('')
  $('#currentPassword').val('')
  $('#newPassword').val('')
  $('#directionsSubHeading').text('Password has been changed').show()
}

const changePasswordFailure = () => {
  $('#changePasswordFailure').text('Password\'s don\'t match, try again.')
}

module.exports = {
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFail,
  changePasswordFailure,
  changePasswordSuccess
}
