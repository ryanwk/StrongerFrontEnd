'use strict'
const showExercisesTemplate = require('../templates/show-exercises.handlebars')
const store = require('../store')

const showExerciseList = (data) => {
  const showExercisesHTML = showExercisesTemplate({ exercises: data.exercises })
  $('#library_info').hide()
  $('#library').show()
  $('#library tbody').empty()
  $('#library tbody').append(showExercisesHTML)
  $('#library').DataTable()
  $('.updateWeightHandlebarsButton').on('click', (event) => {
    store.updating_id = event.target.dataset.id
  })
}

const addExerciseSuccess = (data) => {
  $('#addExerciseModal').modal('hide')
  $('#directions').text('You\'ve successfully added an exercise')
  showExerciseList(data)
}

const addExerciseFail = () => {
  $('#directions').text('Something went wrong, please try again')
}

const showAllExercisesSuccess = (data) => {
  showExerciseList(data)
}

const showAllExercisesFail = () => {
  $('#directions').text('Something went wrong')
}
const removeExercisesSuccess = (data) => {
  $('#directions').text('Your exercise has been removed')
}

const removeExercisesFailure = () => {
  $('#directions').text('Something went wrong!')
}
const updateWeightSuccess = (data) => {
  $('#directions').text('Your exercise has been updated')
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
