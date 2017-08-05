'use strict'
const exerciseUi = require('./exerciseUi')
const exerciseApi = require('./exerciseApi')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onAddExerciseSubmit = (e) => {
  e.preventDefault()
  const data = getFormFields(event.target)
  exerciseApi.addExerciseRequest(data)
    .then(function () {
      exerciseUi.addExerciseSuccess
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.addExerciseFail)
}

const onShowAllExercisesSubmit = () => {
  exerciseApi.showAllExercisesRequest()
    .then(exerciseUi.showAllExercisesSuccess)
    .then(() => $('.deleteButton').on('click', onRemoveExerciseClick))
    // .then(() => $('.updateButton').on('submit', onUpdateWeightSubmit))
    .catch(exerciseUi.showAllExercisesFail)
}

const onRemoveExerciseClick = (event) => {
  const id = $(event.target).attr('data-id')
  event.preventDefault()
  exerciseApi.removeExerciseRequest(id)
    .then(function () {
      exerciseUi.removeExerciseSuccess
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.removeExerciseFailure)
}
const onUpdateWeightSubmit = (event) => {
  const id = store.updating_id
  console.log('weight updated', id)
  const userInput = getFormFields(event.target)
  event.preventDefault()
  exerciseApi.updateWeightRequest(userInput, id)
    .then(function () {
      exerciseUi.updateWeightSuccess
      onShowAllExercisesSubmit()
    })
    .catch(exerciseUi.updateWeightFailure)
}
// const onUpdateWeightCloseModal = () => {
//   $('#addExerciseModal').modal('hide')
//   console.log('closing add ex modal')
//   // event.preventDefault()
// }
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
  // $('#updateWeightFormSubmit').on('submit', onUpdateWeightCloseModal)
  $('.updateWeightClose').on('click', updateWeightModalEscape)
  $('.addExerciseClose').on('click', addExerciseModalEscape)
}

module.exports = {
  exerciseHandlers,
  onRemoveExerciseClick
}
