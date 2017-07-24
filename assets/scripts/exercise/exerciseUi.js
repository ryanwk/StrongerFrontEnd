'use strict'
const showExercisesTemplate = require('../templates/show-exercises.handlebars')
// const exerciseShowHide = require('./exerciseShowHide')

const addExerciseSuccess = () => {
  $('#directions').text('You\'ve successfully added an exercise!')
  console.log('add exercises worked')
  $('#addExerciseModal').modal('hide')
}

const addExerciseFail = () => {
  $('#directions').text('Something went wrong, please try again')
  console.log('add exercises failed')
}

const showAllExercisesSuccess = (data) => {
  $('#directions').text('These are all of your exercises')
  console.log('index exercises worked')
  console.log(data.exercises)
  $('#content').html('')
  const showExercisesHTML = showExercisesTemplate({ exercises: data.exercises })
  $('#content').append(showExercisesHTML)
}

const showAllExercisesFail = () => {
  $('#directions').text('You don\'t have any exercises yet, click add exercises to create them!')
  console.log('index exercises failed')
}
const removeExercisesSuccess = () => {
  $('#directions').text('Your exercise has been removed!')
  console.log('remove exercises, ui, worked')
  $('#removeExerciseModal').modal('hide')
}

const removeExercisesFailure = () => {
  $('#directions').text('Something went wrong, please try again')
  console.log('remove exercise, ui, failed')
}
const updateWeightSuccess = () => {
  $('#directions').text('Your exercise has been updated!')
  console.log('updateWeight, ui, worked')
  $('#updateWeightModal').modal('hide')
}

const updateWeightFailure = () => {
  $('#directions').text('Something went wrong, please try again')
  console.log('update weight, ui, failed')
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
