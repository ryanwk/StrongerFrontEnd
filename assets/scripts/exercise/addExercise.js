'use strict'
const ui = require('./ui')
const config = require('./config')
const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')

const check = function () {
  console.log('file required properly')
}

const onAddExercise = (event) => {
  console.log('on addexercise invoked')
  const data = getFormFields(this)
  event.preventDefault()
  addExercise(data)
    .then(ui.addExerciseSuccess)
    .catch(ui.addExerciseFail)
}

// this is the POST request used to add exercises to db
const addExercise = (data) => {
  console.log('create entry in api running')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/exercises',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  onAddExercise,
  check
}
