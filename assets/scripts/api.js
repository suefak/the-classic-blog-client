const store = require('./store.js')
const config = require('./config.js')

// Auth events
const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// Post CRUD actions

const createPost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/ratings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showPost = function () {
  return $.ajax({
    url: config.apiUrl + '/ratings',
    method: 'GET'
  })
}

const deletePost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/ratings/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editPost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/ratings/' + data.rating.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}





module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createPost,
  showPost,
  editPost,
  deletePost
}
