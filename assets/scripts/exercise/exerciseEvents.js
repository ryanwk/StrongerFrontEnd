'use strict'
const exerciseUi = require('./exerciseUi')
const exerciseApi = require('./exerciseApi')
const getFormFields = require('../../../lib/get-form-fields')

const onAddExerciseSubmit = (e) => {
  console.log('add exercise submit button, events, invoked')
  e.preventDefault()
  const data = getFormFields(event.target)
  exerciseApi.addExerciseRequest(data)
    .done(exerciseUi.addExerciseSuccess)
    .fail(exerciseUi.addExerciseFail)
}
const onShowAllExercisesSubmit = (e) => {
  console.log('on show all exercises submit button, events, invoked')
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.showAllExercisesRequest(data)
    .done(exerciseUi.showAllExercisesSuccess)
    .fail(exerciseUi.showAllExercisesFail)
}
const exerciseHandlers = function () {
  $('#addExerciseFormSubmit').on('submit', onAddExerciseSubmit)
  $('#showAllExercisesButton').on('click', onShowAllExercisesSubmit)
}

module.exports = {
  exerciseHandlers
}
