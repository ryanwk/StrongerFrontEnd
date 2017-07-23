'use strict'
const store = require('./store')
const showHide = require('./showHide')

const signUpSuccess = (data) => {
  $('#sign-up-modal').modal('hide')
  $('#inputEmail4').val('')
  $('#inputPassword4').val('')
  $('#directions').text('Thanks for signing up! Now sign in to get started!')
  $('#SignUpFailure').text('')
  $('#signUpButton').hide()
}

// when a user clicks the 'x' to close a modal at any point this will clear the email/password/and signUpFaile text of the sign up modal
const modalEscapeSignUp = () => {
  $('#SignUpFailure').text('')
  $('#inputEmail4').val('')
  $('#inputPassword4').val('')
}
// when a user clicks the 'x' to close a modal at any point this will clear the email/password/and signUpFaile text of the sign in modal
const modalEscapeSignIn = () => {
  $('#SignInFailure').text('')
  $('#inputEmail3').val('')
  $('#inputPassword3').val('')
}

const signUpFailure = (data) => {
  $('#SignUpFailure').text('Sign up did not work, please try again.')
}

const signInSuccess = (data) => {
  $('#sign-in-modal').modal('hide')
  $('#directions').text('Welcome ' + data.user.email + '!' + ' !')
  store.user = data.user
  $('#inputEmail3').val('')
  $('#inputPassword3').val('')
  $('#SignInFailure').text('')
  showHide.signInView()
}

const signInFail = () => {
  $('#SignInFailure').text('Email or password is not correct, please try again.')
}
const signOutSuccess = (data) => {
  $('#directions').text('Sign up or sign in!')
  store.user = {}
  $('#inputEmail3').val('')
  $('#inputPassword3').val('')
  showHide.signOutView()
}

// when a user clicks the 'x' to close a modal at any point this will clear the email/password/and signUpFail text of the sign in modal
const changePasswordEscape = () => {
  $('#changePasswordFailure').text('')
  $('#currentPassword').val('')
  $('#newPassword').val('')
}
const changePasswordSuccess = (data) => {
  $('#change-pass-modal').modal('hide')
  $('#changePasswordFailure').text('')
  $('#currentPassword').val('')
  $('#newPassword').val('')
  $('#directionsSubHeading').text('Password has been changed!').show()
}

const changePasswordFailure = () => {
  $('#changePasswordFailure').text('Password\'s don\'t match, try again.')
}

const showAllExercisesSuccess = () => {
  $('#directions').text('These are all of your exercises')
  console.log('index exercises worked')
}

const showAllExercisesFail = () => {
  $('#directions').text('You don\'t have any exercises yet, click add exercises to create them!')
  console.log('index exercises failed')
}

const addExerciseSuccess = () => {
  $('#directions').text('You\'ve successfully added an exercise!')
  console.log('add exercises worked')
}

const addExerciseFail = () => {
  $('#directions').text('Something went wrong, please try again')
  console.log('add exercises failed')
}

module.exports = {
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  modalEscapeSignUp,
  modalEscapeSignIn,
  changePasswordEscape,
  showAllExercisesSuccess,
  showAllExercisesFail,
  addExerciseSuccess,
  addExerciseFail
}
