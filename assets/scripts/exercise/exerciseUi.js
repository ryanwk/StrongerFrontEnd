'use strict'
const showExercisesTemplate = require('../templates/show-exercises.handlebars')

const showExerciseList = (data) => {
  $('#content').html('')
  const showExercisesHTML = showExercisesTemplate({ exercises: data.exercises })
  $('#content').append(showExercisesHTML)
}

const addExerciseSuccess = (data) => {
  $('#directions').text('You\'ve successfully added an exercise!')
  showExerciseList(data)
}

const addExerciseFail = () => {
  $('#directions').text('Something went wrong, please try again')
}

const showAllExercisesSuccess = (data) => {
  $('#directions').text('These are all of your exercises')
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
