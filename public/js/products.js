
import '../css/products.css';
import { hotReload, footerCopyrightYear } from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /products')
})

footerCopyrightYear(document.querySelector('#footerCopy'))
hotReload();
