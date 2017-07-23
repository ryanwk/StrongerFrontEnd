'use strict'
const exerciseUi = require('./exerciseUi')
const exerciseApi = require('./exerciseApi')
const getFormFields = require('../../../lib/get-form-fields')

const check = function () {
  console.log('file required properly')
}

const onAddExerciseSubmit = (e) => {
  console.log('add exercise submit button, events, invoked')
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.addExercise(data)
    .then(exerciseUi.addExerciseSuccess)
    .catch(exerciseUi.addExerciseFail)
}
const onShowAllExercisesSubmit = (e) => {
  console.log('on show all exercises submit button, events, invoked')
  const data = getFormFields(event.target)
  e.preventDefault()
  exerciseApi.addExercise(data)
    .done(exerciseUi.showAllGamesSuccess)
    .catch(exerciseUi.showAllGamesFail)
}
const exerciseHandlers = function () {
  $('#addExerciseButton').on('submit', onAddExerciseSubmit)
  $('#showAllExercisesButton').on('submit', onShowAllExercisesSubmit)
}

module.exports = {
  exerciseHandlers,
  check
}
