'use strict'
const exerciseUi = require('./exerciseUi')
const exerciseApi = require('./exerciseApi')
const getFormFields = require('../../../lib/get-form-fields')

const onAddExerciseSubmit = (e) => {
  console.log('add exercise submit button, events, invoked')
  e.preventDefault()
  const data = getFormFields(event.target)
  exerciseApi.addExerciseRequest(data)
    // .done(onShowAllExercisesSubmit)
    .then(exerciseUi.addExerciseSuccess)
    .fail(exerciseUi.addExerciseFail)
}

const onShowAllExercisesSubmit = (e) => {
  e.preventDefault()
  console.log('on show all exercises submit button, events, invoked')
  $('#content').empty()
  const data = getFormFields(event.target)
  exerciseApi.showAllExercisesRequest(data)
    // .done(showExerciseList)
    .then(exerciseUi.showAllExercisesSuccess)
    .fail(exerciseUi.showAllExercisesFail)
}
const onRemoveExerciseSubmit = (e) => {
  console.log('exercise removed')
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.removeExerciseRequest(data)
    .done(exerciseUi.removeExerciseSuccess)
    .fail(exerciseUi.removeExerciseFailure)
}
const onUpdateWeightSubmit = (e) => {
  console.log('weight updated')
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.updateWeightRequest(data)
    .done(exerciseUi.updateWeightSuccess)
    .fail(exerciseUi.updateWeight)
}
const addExerciseModalEscape = () => {
  $('#inputNameAdd').val('')
  $('#inputWeightAdd').val('')
}
const removeExerciseModalEscape = () => {
  $('#inputID').val('')
}
const updateWeightModalEscape = () => {
  $('#inputWeight').val('')
  $('#updateWeightID').val('')
}
const exerciseHandlers = function () {
  $('#addExerciseFormSubmit').on('submit', onAddExerciseSubmit)
  $('#showAllExercisesButton').on('click', onShowAllExercisesSubmit)
  $('#removeExerciseFormSubmit').on('submit', onRemoveExerciseSubmit)
  $('#updateWeightFormSubmit').on('submit', onUpdateWeightSubmit)
  $('.removeExerciseClose').on('click', removeExerciseModalEscape)
  $('.updateWeightClose').on('click', updateWeightModalEscape)
  $('.addExerciseClose').on('click', addExerciseModalEscape)
}

module.exports = {
  exerciseHandlers
}
