'use strict'
const ui = require('../ui')
const config = require('../config')
const store = require('../store')

// this is the GET request used to index all exercises
const showAllExercises = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/exercises',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .done(ui.showAllGamesSuccess)
  .catch(ui.showAllGamesFail)
}
module.exports = {
  showAllExercises
}
