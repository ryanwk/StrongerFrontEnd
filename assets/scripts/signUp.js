'use strict'
const onSignUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
  .done(ui.signUpSuccess)
  .fail(ui.signUpFailure)
}
module.exports = {
  onSignUp
}
