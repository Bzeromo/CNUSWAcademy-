import * as constants from './constants.js'
import App from './App.js'

const $body = document.querySelector('body')

$body.innerHTML = $body.innerHTML + JSON.stringify(constants)

new App()