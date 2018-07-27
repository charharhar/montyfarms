
import '../css/products.css';
import {
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
 * SLIDER HANDLER
 */
slickHelper('#plantain-main', '#plantain-thumbnails')
slickHelper('#cucumber-main', '#cucumber-thumbnails')
slickHelper('#butternut-main', '#butternut-thumbnails')
slickHelper('#onion-main', '#onion-thumbnails')
slickHelper('#sweetpotato-main', '#sweetpotato-thumbnails')
slickHelper('#pineapple-main', '#pineapple-thumbnails')
slickHelper('#sweetpotatoflour-main', '#sweetpotatoflour-thumbnails')

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
const onionBtn = document.querySelector('#onionBtn');
const sweetpotatoBtn = document.querySelector('#sweetpotatoBtn');
const pinappleBtn = document.querySelector('#pinappleBtn');
const sweetpotatoflourBtn = document.querySelector('#sweetpotatoflourBtn');
const buttonImg = sliceArray(document.querySelectorAll('.button-img'))

const plantainContainer = document.querySelector('#plantainContainer');
const cucumberContainer = document.querySelector('#cucumberContainer');
const butternutContainer = document.querySelector('#butternutContainer');
const onionContainer = document.querySelector('#onionContainer');
const sweetpotatoContainer = document.querySelector('#sweetpotatoContainer');
const pineappleContainer = document.querySelector('#pineappleContainer');
const sweetpotatoflourContainer = document.querySelector('#sweetpotatoflourContainer');
const productsContainer = sliceArray(document.querySelectorAll('.product-content-container'))

plantainBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  plantainBtn.classList.add('active');
  plantainContainer.classList.add('active');
})

cucumberBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  cucumberBtn.classList.add('active');
  cucumberContainer.classList.add('active');
})

butternutBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  butternutBtn.classList.add('active');
  butternutContainer.classList.add('active');
})

onionBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  onionBtn.classList.add('active');
  onionContainer.classList.add('active');
})

sweetpotatoBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  sweetpotatoBtn.classList.add('active');
  sweetpotatoContainer.classList.add('active');
})

pineappleBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  pineappleBtn.classList.add('active');
  pineappleContainer.classList.add('active');
})

sweetpotatoflourBtn.addEventListener('click', e => {
  buttonImg.forEach(btn => {
    btn.classList.remove('active')
  })
  productsContainer.forEach(container => {
    container.classList.remove('active');
  })
  sweetpotatoflourBtn.classList.add('active');
  sweetpotatoflourContainer.classList.add('active');
})

hotReload();
