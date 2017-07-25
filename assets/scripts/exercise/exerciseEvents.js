'use strict'
const exerciseUi = require('./exerciseUi')
const exerciseApi = require('./exerciseApi')
const getFormFields = require('../../../lib/get-form-fields')

const onAddExerciseSubmit = (e) => {
  e.preventDefault()
  const data = getFormFields(event.target)
  exerciseApi.addExerciseRequest(data)
    .then(function () {
      exerciseUi.addExerciseSuccess
      onAddRefresh()
    })
    .catch(exerciseUi.addExerciseFail)
}

const onAddRefresh = (data) => {
  $('#content').empty()
  exerciseApi.showAllExercisesRequest(data)
    .then(exerciseUi.showAllExercisesSuccess)
    .catch(exerciseUi.showAllExercisesFail)
}

const onShowAllExercisesSubmit = () => {
  $('#content').empty()
  const data = getFormFields(event.target)
  exerciseApi.showAllExercisesRequest(data)
    .then(exerciseUi.showAllExercisesSuccess)
    .then(() => $('.deleteButton').on('click', onRemoveExerciseClick))
    .catch(exerciseUi.showAllExercisesFail)
}

const onRemoveExerciseClick = (event) => {
  console.log('exercise removed')
  const id = $(event.target).attr('data-id')
  console.log(id)
  event.preventDefault()
  exerciseApi.removeExerciseRequest(id)
    .then(function () {
      exerciseUi.removeExerciseSuccess
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.removeExerciseFailure)
}
const onUpdateWeightSubmit = (e) => {
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.updateWeightRequest(data)
    .then(function () {
      exerciseUi.updateWeightSuccess
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.updateWeight)
}
const addExerciseModalEscape = () => {
  $('#inputNameAdd').val('')
  $('#inputWeightAdd').val('')
}

const updateWeightModalEscape = () => {
  $('#inputWeight').val('')
  $('#updateWeightID').val('')
}
const exerciseHandlers = function () {
  $('#addExerciseFormSubmit').on('submit', onAddExerciseSubmit)
  $('#showAllExercisesButton').on('click', onShowAllExercisesSubmit)
  $('#updateWeightFormSubmit').on('submit', onUpdateWeightSubmit)
  $('.updateWeightClose').on('click', updateWeightModalEscape)
  $('.addExerciseClose').on('click', addExerciseModalEscape)
}

module.exports = {
  exerciseHandlers,
  onRemoveExerciseClick
}
