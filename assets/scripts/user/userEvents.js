'use strict'
const userUi = require('./userUi')
const userApi = require('./userApi')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUpSubmit = (e) => {
  console.log('sign up submit button, events, invoked')
  const data = getFormFields(event.target)
  e.preventDefault()
  userApi.signUpRequest(data)
    .done(userUi.signUpSuccess)
    .fail(userUi.signUpFailure)
}
const onSignInSubmit = (e) => {
  console.log('sign in submit button, events, invoked')
  const data = getFormFields(event.target)
  e.preventDefault()
  userApi.signInRequest(data)
    .done(userUi.signInSuccess)
    .fail(userUi.signInFail)
}
const onSignOutClick = (e) => {
  console.log('sign out submit button, events, invoked')
  e.preventDefault()
  userApi.signOutRequest()
    .done(userUi.signOutSuccess)
    .fail(userUi.signOutFail)
}
const onChangePasswordSubmit = (e) => {
  console.log('change password submit button, events, invoked')
  const data = getFormFields(event.target)
  e.preventDefault()
  userApi.changePasswordRequest(data)
    .done(userUi.changePasswordSuccess)
    .fail(userUi.changePasswordFailure)
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

// when a user clicks the 'x' to close a modal at any point this will clear the email/password/and signUpFail text of the sign in modal
const changePasswordEscape = () => {
  $('#changePasswordFailure').text('')
  $('#currentPassword').val('')
  $('#newPassword').val('')
}

const addUserHandlers = function () {
  $('.buttonCloseSignUp').on('click', modalEscapeSignUp)
  $('.buttonCloseSignIn').on('click', modalEscapeSignIn)
  $('.buttonCloseChangePassword').on('click', changePasswordEscape)
  $('#change-pwd').on('submit', onChangePasswordSubmit)
  $('#sign-up-form').on('submit', onSignUpSubmit)
  $('#sign-in-form').on('submit', onSignInSubmit)
  $('#sign-out').on('click', onSignOutClick)
}

module.exports = {
  addUserHandlers
}
