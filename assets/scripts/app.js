'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const siteFunc = require('./site.js')

$(() => {
  // your JS code goes here
// })

// getting form fields to show
$('#create-post').on('click', events.showFormCreate)
  $('#show-post').on('click', events.showFormShow)
  $('#delete-post').on('click', events.showFormDelete)
  $('#edit-post').on('click', events.showFormEdit)
  $('#show-allRest').on('click', events.showFormShowAdmin)

  // getting form fields to submit
  $('#createPost').on('submit', events.onPost)
  $('#editPost').on('submit', events.onEditPost)
  $('#deletePost').on('submit', events.onDeletePost)

  // submit
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
})
