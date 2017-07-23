'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userShowHide = require('./user/userShowHide')
const userEvents = require('./user/userEvents')
const exerciseEvents = require('./exercise/exerciseEvents')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  userShowHide.frontPage()
  userEvents.addUserHandlers()
  exerciseEvents.exerciseHandlers()
})
// use require without a reference to ensure a file is bundled
require('./example')

$(() => {

})
