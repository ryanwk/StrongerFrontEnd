'use strict'
const ui = require('./ui')
const userApi = require('./api')
const getFormFields = require('../../lib/get-form-fields')

const onSignUpSubmit = (e) => {
  const data = getFormFields(this)
  e.preventDefault()
  userApi.onSignUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFailure)
}
const onSignInSubmit = (e) => {
  const data = getFormFields(this)
  e.preventDefault()
  userApi.onSignIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFail)
}
const onSignOutClick = (e) => {
  e.preventDefault()
  userApi.onSignOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure)
}
const onChangePasswordSubmit = (e) => {
  const data = getFormFields(this)
  e.preventDefault()
  userApi.onChangePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure)
}

const addUserHandlers = function () {
  $('.buttonCloseSignUp').on('click', ui.modalEscapeSignUp)
  $('.buttonCloseSignIn').on('click', ui.modalEscapeSignIn)
  $('.buttonCloseChangePassword').on('click', ui.changePasswordEscape)
  $('#change-pwd').on('submit', onChangePasswordSubmit)
  $('#sign-up-form').on('submit', onSignUpSubmit)
  $('#sign-in-form').on('submit', onSignInSubmit)
  $('#sign-out').on('click', onSignOutClick)
}

module.exports = {
  addUserHandlers
}
