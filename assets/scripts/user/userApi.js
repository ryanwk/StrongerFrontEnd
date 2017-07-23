'use strict'
const config = require('./../config')
const store = require('./../store')

const signUpRequest = (data) => {
  console.log('sign up request, api, invoked')
  return $.ajax({
    url: config.apiOrigin + 'sign-up',
    method: 'POST',
    data
  })
}

const signInRequest = (data) => {
  console.log('sign in request, api, invoked')
  return $.ajax({
    url: config.apiOrigin + 'sign-in',
    method: 'POST',
    data
  })
}

const signOutRequest = () => {
  console.log('sign out request, api, invoked')
  return $.ajax({
    url: config.apiOrigin + 'sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePasswordRequest = function (data) {
  console.log('change password request, api, invoked')
  return $.ajax({
    url: config.apiOrigin + 'change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUpRequest,
  signInRequest,
  signOutRequest,
  changePasswordRequest
}
