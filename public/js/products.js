
import '../css/products.css';
import {
  scrollTop,
  hotReload,
  sliceArray,
  slickHelper,
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
 * SLIDER HANDLER
 */
window.addEventListener('load', () => {
  slickHelper('#plantain-main', '#plantain-thumbnails')
  slickHelper('#cucumber-main', '#cucumber-thumbnails')
  slickHelper('#butternut-main', '#butternut-thumbnails')
  slickHelper('#sweetpotato-main', '#sweetpotato-thumbnails')
  slickHelper('#pineapple-main', '#pineapple-thumbnails')
  slickHelper('#sweetpotatoflour-main', '#sweetpotatoflour-thumbnails')
})

/**
 * SCROLL ANIMATION HANDLER
 */
const waypoints = sliceArray(document.querySelectorAll('.waypoint'));
function throttle (callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function () {
          wait = false;
      }, limit);
    }
  }
}
window.addEventListener('scroll', e => handleAllAnimations(waypoints))
window.addEventListener('load', e => handleAllAnimations(waypoints))

/**
 * PRODUCT BUTTON HANDLER
 */
const plantainBtn = document.querySelector('#plantainBtn');
const cucumberBtn = document.querySelector('#cucumberBtn');
const butternutBtn = document.querySelector('#butternutBtn');
const sweetpotatoBtn = document.querySelector('#sweetpotatoBtn');
const pinappleBtn = document.querySelector('#pinappleBtn');
const sweetpotatoflourBtn = document.querySelector('#sweetpotatoflourBtn');
const buttonImg = sliceArray(document.querySelectorAll('.button-img'))

const plantain = document.querySelector('#plantain');
const cucumber = document.querySelector('#cucumber');
const butternut = document.querySelector('#butternut');
const sweetpotato = document.querySelector('#sweetpotato');
const pineapple = document.querySelector('#pineapple');
const sweetpotatoflour = document.querySelector('#sweetpotatoflour');
const productsContainer = sliceArray(document.querySelectorAll('.product-content-container'))

document.addEventListener('DOMContentLoaded', function(event) {
  const hash = window.location.hash;

  if (hash) {
    document.querySelector(hash).classList.add('active');
    document.querySelector(`${hash}Btn`).classList.add('active');
  } else {
    plantain.classList.add('active');
    plantainBtn.classList.add('active');
  }
});

plantainBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  plantainBtn.classList.add('active');
  plantain.classList.add('active');
})

cucumberBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  cucumberBtn.classList.add('active');
  cucumber.classList.add('active');
})

butternutBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  butternutBtn.classList.add('active');
  butternut.classList.add('active');
})

sweetpotatoBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  sweetpotatoBtn.classList.add('active');
  sweetpotato.classList.add('active');
})

pineappleBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  pineappleBtn.classList.add('active');
  pineapple.classList.add('active');
})

sweetpotatoflourBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  sweetpotatoflourBtn.classList.add('active');
  sweetpotatoflour.classList.add('active');
})

hotReload();
