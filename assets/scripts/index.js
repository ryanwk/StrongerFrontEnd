'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const showHide = require('./../showHide')
const userEvents = require('./user/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  showHide.frontPage()
  userEvents.addHandlers()
})
// use require without a reference to ensure a file is bundled
require('./example')
$(() => {

})
