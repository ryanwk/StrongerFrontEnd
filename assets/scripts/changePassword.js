'use strict'
// changes password and stores credentials
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure)
}
module.export = {
  onChangePassword
}
