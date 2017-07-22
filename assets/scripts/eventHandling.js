'use strict'
const ui = require('./ui')
const changePass = require('./changePassword')
const addExerciseModule = require('./exerciseActions/addExercise')

const addHandlers = function () {
  $('.buttonCloseSignUp').on('click', ui.modalEscapeSignUp)
  $('.buttonCloseSignIn').on('click', ui.modalEscapeSignIn)
  $('.buttonCloseChangePassword').on('click', ui.changePasswordEscape)
  $('#change-pwd').on('submit', changePass.onChangePassword)
  $('#addExerciseButton').on('click', addExerciseModule.addExercise())
}

module.exports = {
  addHandlers
}
