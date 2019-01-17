const store = require('./store.js')

const authForms = () => {
  $('.allContent').hide()
  $('.authp').show()
  $('#accButton').hide()
}

const mainForms = () => {
  $('.allContent').show()
  $('.authp').hide()
}

const settingShow = () => {
  $('.allContent').hide()
  $('.authp').hide()
  $('.settingsp').show()
  $('#goBack').show()
  $('#showSettings').hide()
}

const signedIn = () => {
  $('#accButton').hide()
  $('#showSettings').show()
  $('.site__content').hide()
}

const signedOut = () => {
  $('#showSettings').hide()
  $('#accButton').show()
  $('.site__content').show()
  $('.settingsp').hide()
}
module.exports = {
  authForms,
  mainForms,
  settingShow,
  signedIn,
  signedOut
}
