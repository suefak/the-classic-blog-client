'use strict'

const store = require('./store.js')
const magic = require('./magic.js')

// const signUpSuccess = data => {
//   $('#message').text('Signed up successfully')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   console.log('signUpSuccess ran. Data is :', data)
//   $('#sign-up')[0].reset()

const signUpSuccess = data => {
  toastr.success('Success', 'Account created')
  $('#sign-up')[0].reset()
}

// $('#signupemail').val('')
// $('#signuppassword').val('')
// $('#signuppasswordconfirm').val('')

const signUpFailure = error => {
  toastr.error('Failure', 'Account creation failed')
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  toastr.success('Success', 'Signed in')
  $('#sign-in')[0].reset()
  store.user = data.user
  siteFunc.mainForms()
  siteFunc.signedIn()
  $('.site__content').hide()
}

const signInFailure = error => {
  toastr.error('Failure', 'Sign in failed')
  $('#sign-in')[0].reset()
}
// End Sign in//

// Sign out //
const signOutSuccess = data => {
  $('#sign-out')[0].reset()
  $('.allForms').hide()
  $('#userActions').hide()
  siteFunc.mainForms()
  siteFunc.signedOut()
  toastr.success('Success', 'Signed out')
  $('.site__content').show()
}
const signOutFailure = error => {
  toastr.error('Failure', 'Sign out failed')
  $('#sign-out')[0].reset()
}

// Change pass //
const changePasswordSuccess = data => {
  toastr.success('Success', 'Password changed')
  $('#changePassword')[0].reset()
}



const changePasswordFailure = error => {
  toastr.error('Failure', 'Password change failed')
  $('#changePassword')[0].reset()
}

const createPostSuccess = data => {
  toastr.success('Success', 'Post added')
  $('#createPost')[0].reset()
}

const createPostFailure = error => {
  toastr.error('Failure', 'Post create failed')
  $('#createPost')[0].reset()
}

const editPostSuccess = data => {
  toastr.success('Success', 'Restaurant editted')
  $('#editRestaurant')[0].reset()
}

const editPostFailure = error => {
  toastr.error('Failure', 'Post edit failed')
  $('#editPost')[0].reset()
}

const deletePostSuccess = data => {
  toastr.success('Success', 'Post deleted')
  $('#deletePost')[0].reset()
}
const deletePostFailure = data => {
  toastr.error('Failure', 'Post delete fail')
  $('#deletePost')[0].reset()
}

const indexPostSuccess = data => {
  // store.user = data.user
  $('#message').text('Index successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('IndexSuccess ran. Data is :', data)
  data.posts.forEach(post => {
    $('.output').append(`
        <div class=${post.id}>
        <h4 id=${post.id}>${post.id}</h4>
        </div>`)
    for (const key in post) {
      if (key !== 'id') {
        $(`.${post.id}`).append(`<h6>${key}: ${post[key]}</h6>`)
      }
    }
  })
  // $('#sign-in')[0].reset()
}

const indexPostFailure = error => {
  toastr.error('Failure', 'Sign out failed')
  $('#sign-out')[0].reset()
}
// $('#sign-in')[0].reset()


const updatePostSuccess = data => {
  toastr.error('Failure', 'Sign out failed')
$('#sign-out')[0].reset()
}
  // $('#sign-out')[0].reset()
}

const updatePostFailure = error => {
  toastr.error('Failure', 'Sign out failed')
  $('#sign-out')[0].reset()
}
  // $('#sign-out')[0].empty()
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createPostSuccess,
  createPostFailure,
  indexPostSuccess,
  indexPostFailure,
  deletePostSuccess,
  deletePostFailure,
  updatePostSuccess,
  updatePostFailure
}
