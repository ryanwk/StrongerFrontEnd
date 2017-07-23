'use strict'
// const store = require('./../store')
// const exerciseShowHide = require('./exerciseShowHide')

const showAllExercisesSuccess = () => {
  $('#directions').text('These are all of your exercises')
  console.log('index exercises worked')
}

const showAllExercisesFail = () => {
  $('#directions').text('You don\'t have any exercises yet, click add exercises to create them!')
  console.log('index exercises failed')
}

const addExerciseSuccess = () => {
  $('#directions').text('You\'ve successfully added an exercise!')
  console.log('add exercises worked')
}

const addExerciseFail = () => {
  $('#directions').text('Something went wrong, please try again')
  console.log('add exercises failed')
}

module.exports = {
  showAllExercisesSuccess,
  showAllExercisesFail,
  addExerciseSuccess,
  addExerciseFail
}
