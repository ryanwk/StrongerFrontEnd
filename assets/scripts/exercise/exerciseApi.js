'use strict'
const config = require('./../config')
const store = require('./../store')

// this is the POST request used to add exercises to db
const addExerciseRequest = (data) => {
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
const showAllExercisesRequest = function () {
  return $.ajax({
    url: config.apiOrigin + 'exercises',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeExerciseRequest = (data) => {
  console.log(data, 'this is data')
  return $.ajax({
    url: config.apiOrigin + 'exercises/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWeightRequest = function (data) {
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
