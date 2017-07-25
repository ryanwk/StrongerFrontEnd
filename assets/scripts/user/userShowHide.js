'use strict'

const frontPage = function () {
  $('#changePasswordButton').hide()
  $('#sign-out').hide()
  $('#directionsSubHeading').text('').hide()
  $('#showAllExercisesButton').hide()
  $('#deleteButton').hide()
  $('#addExerciseButton').hide()
  $('#updateWeightButton').hide()
  // $('#content').hide('')
}
const signInView = function () {
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#sign-out').show()
  $('#changePasswordButton').show()
  $('#showAllExercisesButton').show()
  $('#deleteButton').show()
  $('#addExerciseButton').show()
  $('#updateWeightButton').show()
}
const signOutView = function () {
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#sign-out').hide()
  $('#changePasswordButton').hide()
  $('#directionsSubHeading').text('').hide()
  $('#showAllExercisesButton').hide()
  $('#deleteButton').hide()
  $('#addExerciseButton').hide()
  $('#updateWeightButton').hide()
}

module.exports = {
  frontPage,
  signInView,
  signOutView
}
