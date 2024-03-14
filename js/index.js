import switchTheme from './switchTheme.js'
import { clear } from './clear.js'
import { keydown, calculate} from './keydown.js'
import { copy } from './copy.js'
import { handleButtonPress } from './keyHandlers.js'

document.querySelectorAll('.charKey').forEach(charKeyBtn => {
    charKeyBtn.addEventListener('click', handleButtonPress)})

document.getElementById('clear').addEventListener('click', clear)
document.getElementById('input').addEventListener('keydown', keydown)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copy)
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)