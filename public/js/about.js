
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
const valuesBlurbs = sliceArray(document.querySelectorAll('.values-blurb'))

const MULTIPLIERS = [2, 1, 0, -1, -2]
const SLIDES_TO_SHOW = 5;
const theta = 24;
const radius = 600;
let currentMultiplier = 0;
let currentIndex = 0;
let currentBlurb = carouselSlides[currentIndex].getAttribute('data-blurb')
let activeSlides = [13, 14, 0, 1, 2];
let multiplierHashMap = {}

const updateIndexMapping = function() {
  const tempIndexMapping = {}

  activeSlides.forEach((slide, index) => {
    tempIndexMapping[slide] = MULTIPLIERS[index]
  })

  multiplierHashMap = tempIndexMapping;
}

const handleCarouselRotate = function() {
  carouselSlides.forEach(slide => {
    const slideIndex = parseInt(slide.getAttribute('index'))
    const img = slide.querySelector('.values-icon');
    img.style.transform = `scale(1)`;
    img.style.marginTop = `0`;

    if (activeSlides.indexOf(slideIndex) == -1) {
      slide.style.opacity = 0;
      slide.style.top = `${-9999}px`;
    } else {
      if (currentIndex === slideIndex) {
        img.style.transform = `scale(1.85)`;
        img.style.marginTop = `${20}px`;
      }
      slide.style.opacity = 1;
      slide.style.top = 0;
    }
  });

  valuesBlurbs.forEach(blurb => {
    blurb.style.transitionDuration = '0ms';
    blurb.style.opacity = 0;

    if (blurb.getAttribute('id') === `${currentBlurb}-blurb`) {
      blurb.style.transitionDuration = '1000ms';
      blurb.style.opacity = 1;
    }
  })

  valuesCarousel.style.transform = `translateZ(-${radius}px) rotateY(${currentMultiplier * theta}deg)`
}

const handleSlideClickListener = function(e) {
  const target = findParent(e.target, 'values-slide')
  const nextIndex = parseInt(target.getAttribute('index'))
  const nextBlurb = target.getAttribute('data-blurb');
  let nextActiveSlides;

  for (let i = 0; i < SLIDES_TO_SHOW; i++) {
    if (nextIndex === 0) {
      nextActiveSlides = [13, 14, 0, 1, 2]
    } else if (nextIndex === 1) {
      nextActiveSlides = [14, 0, 1, 2, 3]
    } else if (nextIndex === 13) {
      nextActiveSlides = [11, 12, 13, 14, 0]
    } else if (nextIndex === 14) {
      nextActiveSlides = [12, 13, 14, 0, 1]
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
  currentBlurb = nextBlurb;
  currentMultiplier = currentMultiplier + multiplierHashMap[currentIndex]
  activeSlides = nextActiveSlides;

  updateIndexMapping()
  handleCarouselRotate()
}

updateIndexMapping()
handleCarouselRotate();
valuesCarousel.addEventListener('click', handleSlideClickListener)

hotReload();
