
import '../css/home.css';
import { hotReload, footerCopyrightYear } from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /')
})

footerCopyrightYear(document.querySelector('#footerCopy'))
hotReload();
