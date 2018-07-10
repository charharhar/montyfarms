
import '../css/home.css';
import {
  scrollTo,
  scrollTop,
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
const hamburger = document.querySelector('.hamburger');
const navigationListWrapper = document.querySelector('.navigation-list-wrapper');

mobileNavHandler(hamburger, navigationListWrapper);

/**
 * SCROLL ANIMATION HANDLER
 */
const waypoints = sliceArray(document.querySelectorAll('.waypoint'));
const backToTop = document.querySelector('.backToTop');
const scrollDownHint = document.querySelector('.scrollDownHint')

window.addEventListener('scroll', e => handleAllAnimations(waypoints))
window.addEventListener('load', e => handleAllAnimations(waypoints))

window.addEventListener('scroll', e => {
  if (scrollTop() > (window.outerHeight)) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
})

backToTop.addEventListener('click', e => {
  $('html, body').animate({
    scrollTop: $('#homeTop-anchor').offset().top
  }, 1000);
})

scrollDownHint.addEventListener('click', e => {
  $('html, body').animate({
    scrollTop: $('#scrollDownHint-anchor').offset().top
  }, 1000);
})

hotReload();
