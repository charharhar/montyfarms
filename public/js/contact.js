
import '../css/contact.css';
import { hotReload, footerCopyrightYear} from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /contact')
})

footerCopyrightYear(document.querySelector('#footerCopy'))
hotReload();
