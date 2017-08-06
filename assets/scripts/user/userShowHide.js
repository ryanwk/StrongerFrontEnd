'use strict'

const frontPage = function () {
  $('#changePasswordButton').hide()
  $('#sign-out').hide()
  $('#directionsSubHeading').text('').hide()
  $('#showAllExercisesButton').hide()
  $('#deleteButton').hide()
  $('#addExerciseButton').hide()
  $('#updateWeightButton').hide()
  $('#library_filter').hide()
  $('#library').hide()
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
  $('#library').hide()
  $('#library_filter').hide()
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
  $('#library').hide()
  $('#library_filter').hide()
}

module.exports = {
  frontPage,
  signInView,
  signOutView
}
