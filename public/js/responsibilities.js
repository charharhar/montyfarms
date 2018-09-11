
import '../css/responsibilities.css';
import {
  hotReload,
  scrollTop,
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
 * STICKY NAV
 */
const mainNavigation = document.querySelector('.main-navigation');

window.addEventListener('scroll', e => {
  if (scrollTop() > (window.outerHeight) / 2) {
    mainNavigation.classList.add('sticky-nav');
  } else {
    mainNavigation.classList.remove('sticky-nav');
  }
})

window.addEventListener('scroll', e => {
  if (scrollTop() > (window.outerHeight)) {
    mainNavigation.classList.add('sticky-nav-active');
  } else {
    mainNavigation.classList.remove('sticky-nav-active');
  }
})

/**
 * SCROLL ANIMATION HANDLER
 */
const waypoints = sliceArray(document.querySelectorAll('.waypoint'));

window.addEventListener('scroll', e => handleAllAnimations(waypoints))
window.addEventListener('load', e => handleAllAnimations(waypoints))

hotReload();
