'use strict'
const ui = require('./ui')
const config = require('./config')

const onSignIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
  .done(ui.signInSuccess)
  .fail(ui.signInFail)
}
module.exports = {
  onSignIn
}
