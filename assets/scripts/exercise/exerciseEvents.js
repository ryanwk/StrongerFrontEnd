'use strict'
const exerciseUi = require('./exerciseUi')
const exerciseApi = require('./exerciseApi')
const getFormFields = require('../../../lib/get-form-fields')

const onAddExerciseSubmit = (e) => {
  console.log('add exercise submit button, events, invoked')
  e.preventDefault()
  const data = getFormFields(event.target)
  exerciseApi.addExerciseRequest(data)
    .then(function () {
      exerciseUi.addExerciseSuccess
      onAddRefresh()
    })
    .fail(exerciseUi.addExerciseFail)
}

const onAddRefresh = (data) => {
  console.log('add refresh button, events, invoked')
  $('#content').empty()
  exerciseApi.showAllExercisesRequest(data)
    .then(exerciseUi.showAllExercisesSuccess)
    .fail(exerciseUi.showAllExercisesFail)
}

const onShowAllExercisesSubmit = () => {
  console.log('on show all exercises submit button, events, invoked')
  $('#content').empty()
  const data = getFormFields(event.target)
  exerciseApi.showAllExercisesRequest(data)
    .then(exerciseUi.showAllExercisesSuccess)
    .fail(exerciseUi.showAllExercisesFail)
}
const onRemoveExerciseSubmit = (e) => {
  console.log('exercise removed')
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.removeExerciseRequest(data)
    .done(function () {
      exerciseUi.removeExerciseSuccess
      onShowAllExercisesSubmit()
    })
    .fail(exerciseUi.removeExerciseFailure)
}
const onUpdateWeightSubmit = (e) => {
  console.log('weight updated')
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.updateWeightRequest(data)
    .done(function () {
      exerciseUi.updateWeightSuccess
      onShowAllExercisesSubmit()
    })
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
