'use strict'
const ui = require('./ui')
const config = require('./config')
const store = require('./store')

const onSignOut = () => {
  return $.ajax({
    url: config.apiOrigin + 'sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .done(ui.signOutSuccess)
  .fail(ui.failure)
}
module.exports = {
  onSignOut
}
