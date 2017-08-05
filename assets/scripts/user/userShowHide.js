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
  $('#library_paginate').hide()
  $('#library_info').hide()
  $('#library_length').hide()
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
  $('#library_paginate').hide()
  $('#library_length').hide()
  $('#library_info').hide()
}

module.exports = {
  frontPage,
  signInView,
  signOutView
}
