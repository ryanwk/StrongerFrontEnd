'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const signUp = require('./signUp')
const signIn = require('./signIn')
const signOut = require('./signOut')
const getFormFields = require('../../lib/get-form-fields')
const showHide = require('./showHide')
const eventHandling = require('./eventHandling')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  showHide.frontPage()
  eventHandling.addHandlers()
})
// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
  $('#sign-up-form').on('submit', function (e) {
    const data = getFormFields(this)
    e.preventDefault()
    signUp.onSignUp(data)
  })
  $('#sign-in-form').on('submit', function (e) {
    const data = getFormFields(this)
    e.preventDefault()
    signIn.onSignIn(data)
  })
  $('#sign-out').on('click', function (e) {
    e.preventDefault()
    signOut.onSignOut()
  })
  // $('#startGame').on('click', function (e) {
  //   e.preventDefault()
  //   saveExerciseData.onSaveExerciseData()
  // })
})
