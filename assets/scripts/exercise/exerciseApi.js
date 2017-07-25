'use strict'
const config = require('./../config')
const store = require('./../store')

// this is the POST request used to add exercises to db
const addExerciseRequest = (data) => {
  console.log('add exercise request in api invoked')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + 'exercises',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// this is the GET request used to index all exercises
const showAllExercisesRequest = function (data) {
  console.log('show all exercises request in api invoked')
  return $.ajax({
    url: config.apiOrigin + 'exercises',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeExerciseRequest = (data) => {
  console.log('remove exercise, api, invoked')
  return $.ajax({
    url: config.apiOrigin + 'exercises/' + data.exercise.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWeightRequest = function (data) {
  console.log('update weight request, api, invoked')
  return $.ajax({
    url: config.apiOrigin + 'exercises/' + data.exercise.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  addExerciseRequest,
  showAllExercisesRequest,
  removeExerciseRequest,
  updateWeightRequest
}