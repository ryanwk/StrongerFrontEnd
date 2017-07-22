'use strict'
const ui = require('../ui')
const config = require('../config')
const store = require('../store')

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
  .done(ui.addExerciseSuccess)
  .fail(ui.addExerciseFail)
}

module.exports = {
  addExercise
}
