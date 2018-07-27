
import '../css/responsibilities.css';
import {
  hotReload,
  sliceArray,
  mobileNavHandler,
  footerCopyrightYear,
  isScrolledIntoView,
  scrolledInAnimationHandler,
  handleAllAnimations,
} from './util.js'

/**
 * DYNAMIC FOOTER YEAR
 */
const footerCopy = document.querySelector('#footerCopy');
footerCopyrightYear(footerCopy);

/**
 * MOBILE NAV HANDLER
 */
const hamburger = document.querySelector('#mobileNavBtn');
const navigationListWrapper = document.querySelector('.navigation-list-wrapper');

mobileNavHandler(hamburger, navigationListWrapper);

/**
 * SCROLL ANIMATION HANDLER
 */
const waypoints = sliceArray(document.querySelectorAll('.waypoint'));

window.addEventListener('scroll', e => handleAllAnimations(waypoints))
window.addEventListener('load', e => handleAllAnimations(waypoints))

hotReload();
