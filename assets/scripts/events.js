'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
// const copyData = data => {
//   store.game = data.game
// }

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const showFormFields = () => {

  $('.allForms').show();
}


// USER SHOW FORM FIELDS
const showFormCreate = () => {
  $('.allForms').show();
  $('.createPost').show()
  $('.showPost').hide()
  $('.deletePost').hide()
  $('.editPost').hide()
  $('.showPost').hide()
}

const showFormShow = (event) => {
  $('.allForms').show();
  $('.showPost').show()
  $('.createPost').hide()
  $('.deletePost').hide()
  $('.editPost').hide()
  $('.showPost').hide()
  onShowRating(event)
}

const showFormDelete = () => {
  $('.allForms').show();
  $('.createPost').hide()
  $('.showPost').hide()
  $('.editPost').hide()
  $('.deletePost').show()
  $('.showPost').hide()
}

const showFormEdit = () => {
  $('.allForms').show();
  $('.createPost').hide()
  $('.showPost').hide()
  $('.deletePost').hide()
  $('.editPost').show()
  $('.showPost').hide()
}

// SUBMIT USER FORM FIELDS

const onCreatePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.onCreatePost(data)

    .then(ui.createRatingSuccess)
    .catch(ui.createRatingFailure)
}

const onShowPost = event => {
  event.preventDefault()
  api.showPost()
    .then(ui.showPostSuccess)
    .catch(ui.showPostFailure)
}

const onEditPost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editRating(data)
    .then(ui.editPostSuccess)
    .catch(ui.editPostFailure)
}

const onDeletePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.deletePost(data.rating.id)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  showFormFields,
  showFormEdit,
  showFormDelete,
  showFormShow,
  showFormCreate,
  onCreatePost,
  onShowPost,
  onEditPost,
  onDeletePost
}
