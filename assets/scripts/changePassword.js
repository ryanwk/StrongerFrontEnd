'use strict'
const ui = require('./ui')
const config = require('./config')
const getFormFields = require('../../lib/get-form-fields')
const store = require('./store')

// changes password and stores credentials
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + 'change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure)
}
module.exports = {
  onChangePassword
}
