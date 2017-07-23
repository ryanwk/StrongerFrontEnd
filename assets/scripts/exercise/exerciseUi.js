'use strict'
const showExercisesTemplate = require('../scripts/templates/show-exercises.handlebars')
// const exerciseShowHide = require('./exerciseShowHide')

const addExerciseSuccess = () => {
  $('#directions').text('You\'ve successfully added an exercise!')
  console.log('add exercises worked')
}

const addExerciseFail = () => {
  $('#directions').text('Something went wrong, please try again')
  console.log('add exercises failed')
}

const showAllExercisesSuccess = (data) => {
  $('#directions').text('These are all of your exercises')
  console.log('index exercises worked')
  console.log(data.exercises)
  $('p').html('')
  const showExercisesHtml = showExercisesTemplate({ exercises: data.exercises })
  $('p').append(showExercisesHtml)
  console.log('handlebars show all exercises in UI working')
}

const showAllExercisesFail = () => {
  $('#directions').text('You don\'t have any exercises yet, click add exercises to create them!')
  console.log('index exercises failed')
}

module.exports = {
  addExerciseSuccess,
  addExerciseFail,
  showAllExercisesSuccess,
  showAllExercisesFail
}
