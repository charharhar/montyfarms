
import '../css/products.css';
import {
  hotReload,
  slickHelper,
  mobileNavHandler,
  footerCopyrightYear,
} from './util.js'

/**
 * DYNAMIC FOOTER YEAR
 */
const footerCopy = document.querySelector('#footerCopy');
footerCopyrightYear(footerCopy);

/**
 * MOBILE NAV HANDLER
 */
const hamburger = document.querySelector('.hamburger');
const navigationListWrapper = document.querySelector('.navigation-list-wrapper');

mobileNavHandler(hamburger, navigationListWrapper);

/**
 * SLIDER HANDLER
 */
slickHelper('#plantain-main', '#plantain-thumbnails')

hotReload();
