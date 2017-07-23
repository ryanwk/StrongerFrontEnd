'use strict'

const frontPage = function () {
  $('#changePasswordButton').hide()
  $('#sign-out').hide()
  $('#directionsSubHeading').text('').hide()
}
const signInView = function () {
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#sign-out').show()
  $('#changePasswordButton').show()
}
const signOutView = function () {
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#sign-out').hide()
  $('#changePasswordButton').hide()
  $('#directionsSubHeading').text('').hide()
}

module.exports = {
  frontPage,
  signInView,
  signOutView
}
