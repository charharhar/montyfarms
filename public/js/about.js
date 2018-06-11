
import '../css/about.css';
import { hotReload, footerCopyrightYear } from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /about')
})

footerCopyrightYear(document.querySelector('#footerCopy'))
hotReload();
