
import '../css/responsibilities.css';
import { hotReload, footerCopyrightYear } from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /responsibilities')
})

footerCopyrightYear(document.querySelector('#footerCopy'))
hotReload();
