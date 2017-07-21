'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const signUp = require('./signUp')
const signIn = require('./signIn')
const signOut = require('./signOut')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
  $('#sign-up-form').on('submit', function (e) {
    // const data = getFormFields(this)
    // pass data through signIn.onSignIn(data)
    e.preventDefault()
    signUp.onSignUp()
  })
  $('#sign-in-form').on('submit', function (e) {
    // const data = getFormFields(this)
    // pass data through signIn.onSignIn(data)
    e.preventDefault()
    signIn.onSignIn()
  })
  $('#sign-out').on('click', function (e) {
    e.preventDefault()
    signOut.onSignOut()
  })
  $('#startGame').on('click', function (e) {
    e.preventDefault()
    saveExerciseData.onSaveExerciseData()
  })
})
