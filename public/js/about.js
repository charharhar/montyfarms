
import '../css/about.css';
import {
  hotReload,
  sliceArray,
  findParent,
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
 * 3D CAROUSEL HANDLER
 */
const valuesCarousel = document.querySelector('.values-carousel');
const carouselSlides = sliceArray(valuesCarousel.querySelectorAll('.values-slide'));

const MULTIPLIERS = [2, 1, 0, -1, -2]
const SLIDES_TO_SHOW = 5;
const theta = 24;
const radius = 600;
let currentMultiplier = 0;

let currentIndex = 0;
let activeSlides = [13, 14, 0, 1, 2];
let activeIndexMapping = {}

const updateIndexMapping = function() {
  const tempIndexMapping = {}

  activeSlides.forEach((slide, index) => {
    tempIndexMapping[slide] = MULTIPLIERS[index]
  })

  activeIndexMapping = tempIndexMapping;
}

const handleSlideChange = function() {
  carouselSlides.forEach(slide => {
    if (activeSlides.indexOf(parseInt(slide.getAttribute('index'))) == -1) {
      slide.style.opacity = 0;
      slide.style.top = `${-9999}px`;
    } else {
      slide.style.opacity = 1;
      slide.style.top = 0;
    }
  });

  valuesCarousel.style.transform = `translateZ(-${radius}px) rotateY(${currentMultiplier * theta}deg) `
}

const handleSlideClick = function(e) {
  const target = findParent(e.target, 'values-slide')
  const nextIndex = parseInt(target.getAttribute('index'))
  let nextActiveSlides;

  for (let i = 0; i < SLIDES_TO_SHOW; i++) {
    if (nextIndex === 0) {
      nextActiveSlides = [13, 14, 0, 1, 2]
    } else if (nextIndex === 1) {
      nextActiveSlides = [14, 0, 1, 2, 3]
    } else if (nextIndex === 13) {
      nextActiveSlides = [11, 12, 13, 14, 0]
    } else if (nextIndex === 14) {
      nextActiveSlides = [12, 13, 14, 1, 0]
    } else {
      nextActiveSlides = [
        nextIndex - 2,
        nextIndex - 1,
        nextIndex,
        nextIndex + 1,
        nextIndex + 2,
      ]
    }
  }

  currentIndex = nextIndex;
  currentMultiplier = currentMultiplier + activeIndexMapping[currentIndex]

  activeSlides = nextActiveSlides;
  updateIndexMapping()
  handleSlideChange()
}

updateIndexMapping()
handleSlideChange();
valuesCarousel.addEventListener('click', handleSlideClick)

hotReload();
