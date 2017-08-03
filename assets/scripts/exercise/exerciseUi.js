'use strict'
const showExercisesTemplate = require('../templates/show-exercises.handlebars')

const showExerciseList = (data) => {
  $('#content').html('')
  const showExercisesHTML = showExercisesTemplate({ exercises: data.exercises })
  $('#library tbody').empty()
  $('#library tbody').append(showExercisesHTML)
  $('#library').DataTable()
}

const addExerciseSuccess = (data) => {
  $('#content').text('You\'ve successfully added an exercise!')
  showExerciseList(data)
  // $('#library tbody').append(showExerciseList)
  // $('#library').DataTable()
}

const addExerciseFail = () => {
  $('#directions').text('Something went wrong, please try again')
}

const showAllExercisesSuccess = (data) => {
  showExerciseList(data)
}

const showAllExercisesFail = () => {
  $('#directions').text('You don\'t have any exercises yet, click add exercises to create them!')
}
const removeExercisesSuccess = (data) => {
  $('#directions').text('Your exercise has been removed!')
  showExerciseList(data)
}

const removeExercisesFailure = () => {
  $('#directions').text('Something went wrong!')
}
const updateWeightSuccess = (data) => {
  $('#directions').text('Your exercise has been updated!')
  $('#updateWeightModal').modal('hide')
  showExerciseList(data)
}

const updateWeightFailure = () => {
  $('#directions').text('Something went wrong, please try again')
}

module.exports = {
  addExerciseSuccess,
  addExerciseFail,
  showAllExercisesSuccess,
  showAllExercisesFail,
  removeExercisesSuccess,
  removeExercisesFailure,
  updateWeightSuccess,
  updateWeightFailure
}
