'use strict'
const exerciseUi = require('./exerciseUi')
const exerciseApi = require('./exerciseApi')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onAddExerciseSubmit = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  exerciseApi.addExerciseRequest(data)
    .then(exerciseUi.addExerciseSuccess)
    .then(function () {
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.addExerciseFail)
}

const onShowAllExercisesSubmit = () => {
  exerciseApi.showAllExercisesRequest()
    .then(exerciseUi.showAllExercisesSuccess)
    .then(() => $('.deleteButton').on('click', onRemoveExerciseClick))
    .catch(exerciseUi.showAllExercisesFail)
}

const onRemoveExerciseClick = (event) => {
  const id = $(event.target).attr('data-id')
  event.preventDefault()
  exerciseApi.removeExerciseRequest(id)
    .then(exerciseUi.removeExercisesSuccess)
    .then(function () {
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.removeExerciseFailure)
}
const onUpdateWeightSubmit = (event) => {
  const id = store.updating_id
  const userInput = getFormFields(event.target)
  event.preventDefault()
  exerciseApi.updateWeightRequest(userInput, id)
    .then(exerciseUi.updateWeightSuccess)
    .then(function () {
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.updateWeightFailure)
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
