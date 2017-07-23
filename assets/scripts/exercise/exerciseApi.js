'use strict'
const config = require('./../config')
const store = require('./../store')

// this is the POST request used to add exercises to db
const addExerciseRequest = (data) => {
  console.log('add exercise request in api invoked')
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
// this is the GET request used to index all exercises
const showAllExercises = function (data) {
  console.log('show all exercises request in api invoked')
  return $.ajax({
    url: config.apiOrigin + '/exercises',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addExerciseRequest,
  showAllExercises
}
