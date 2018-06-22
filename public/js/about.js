
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
// const valuesCarousel = document.querySelector('.values-carousel');
// const carouselSlides = sliceArray(valuesCarousel.querySelectorAll('.values-slide'));
// const valuesBlurbs = sliceArray(document.querySelectorAll('.values-blurb'))

// const MULTIPLIERS = [2, 1, 0, -1, -2]
// const SLIDES_TO_SHOW = 5;
// const theta = 24;
// const radius = 600;
// let currentMultiplier = 0;
// let currentIndex = 0;
// let currentBlurb = carouselSlides[currentIndex].getAttribute('data-blurb')
// let activeSlides = [13, 14, 0, 1, 2];
// let multiplierHashMap = {}

// const updateIndexMapping = function() {
//   const tempIndexMapping = {}

//   activeSlides.forEach((slide, index) => {
//     tempIndexMapping[slide] = MULTIPLIERS[index]
//   })

//   multiplierHashMap = tempIndexMapping;
// }

// const handleCarouselRotate = function() {
//   carouselSlides.forEach(slide => {
//     const slideIndex = parseInt(slide.getAttribute('index'))
//     const img = slide.querySelector('.values-icon');
//     img.style.transform = `scale(1)`;
//     img.style.marginTop = `0`;

//     if (activeSlides.indexOf(slideIndex) == -1) {
//       slide.style.opacity = 0;
//       slide.style.top = `${-9999}px`;
//     } else {
//       if (currentIndex === slideIndex) {
//         img.style.transform = `scale(1.85)`;
//         img.style.marginTop = `${20}px`;
//       }
//       slide.style.opacity = 1;
//       slide.style.top = 0;
//     }
//   });

//   valuesBlurbs.forEach(blurb => {
//     blurb.style.transitionDuration = '0ms';
//     blurb.style.opacity = 0;

//     if (blurb.getAttribute('id') === `${currentBlurb}-blurb`) {
//       blurb.style.transitionDuration = '1000ms';
//       blurb.style.opacity = 1;
//     }
//   })

//   valuesCarousel.style.transform = `translateZ(-${radius}px) rotateY(${currentMultiplier * theta}deg)`
// }

// const handleSlideClickListener = function(e) {
//   const target = findParent(e.target, 'values-slide')
//   const nextIndex = parseInt(target.getAttribute('index'))
//   const nextBlurb = target.getAttribute('data-blurb');
//   let nextActiveSlides;

//   for (let i = 0; i < SLIDES_TO_SHOW; i++) {
//     if (nextIndex === 0) {
//       nextActiveSlides = [13, 14, 0, 1, 2]
//     } else if (nextIndex === 1) {
//       nextActiveSlides = [14, 0, 1, 2, 3]
//     } else if (nextIndex === 13) {
//       nextActiveSlides = [11, 12, 13, 14, 0]
//     } else if (nextIndex === 14) {
//       nextActiveSlides = [12, 13, 14, 0, 1]
//     } else {
//       nextActiveSlides = [
//         nextIndex - 2,
//         nextIndex - 1,
//         nextIndex,
//         nextIndex + 1,
//         nextIndex + 2,
//       ]
//     }
//   }

//   currentIndex = nextIndex;
//   currentBlurb = nextBlurb;
//   currentMultiplier = currentMultiplier + multiplierHashMap[currentIndex]
//   activeSlides = nextActiveSlides;

//   updateIndexMapping()
//   handleCarouselRotate()
// }

// updateIndexMapping()
// handleCarouselRotate();
// valuesCarousel.addEventListener('click', handleSlideClickListener)

const carousel = {
  elem: {
    touchContainer: document.querySelector('#carousel-touch-container'),
    valuesCarousel: document.querySelector('.values-carousel'),
    carouselSlides: sliceArray(document.querySelectorAll('.values-slide')),
    valuesBlurbs: sliceArray(document.querySelectorAll('.values-blurb')),
  },
  // Constants
  MULTIPLIERS: [2, 1, 0, -1, -2],
  SLIDES_TO_SHOW: 5,
  THETA: 24,
  RADIUS: 600,
  // Slide state
  currentMultiplier: 0,
  currentIndex: 0,
  currentBlurb: 'entrepreneurship',
  activeSlides: [13, 14, 0, 1, 2],
  multiplierHashMap: {},

  // Event values
  touchstartx: undefined,
  touchmovex: undefined,
  movex: undefined,
  longTouch: undefined,

  init() {
    this.updateIndexMapping()
    this.handleCarouselRotate()
    this.bindEvents();
  },

  bindEvents() {
    this.elem.valuesCarousel.addEventListener('click', event => {
      carousel.updateNewSlide(event.target);
    })

    this.elem.touchContainer.addEventListener('touchstart', event => {
      carousel.handleTouchStart(event);
    })

    this.elem.touchContainer.addEventListener('touchmove', event => {
      carousel.handleTouchMove(event);
    })

    this.elem.touchContainer.addEventListener('touchend', event => {
      carousel.handleTouchEnd(event);
    })
  },

  determineIndex(multiplier) {
    const TOTAL_SLIDES = 15;
    let newIndex = multiplier;

    if (newIndex === 0) {
      return newIndex;
    } else if (newIndex < 0) {
      newIndex = Math.abs(newIndex)

      while (newIndex >= 15) {
        newIndex = newIndex - TOTAL_SLIDES;
      }
    } else {
      newIndex = TOTAL_SLIDES - newIndex;

      while (newIndex < 0) {
        newIndex = TOTAL_SLIDES + newIndex;
      }
    }

    return newIndex
  },

  handleTouchStart(event) {
    this.longTouch = false;

    setTimeout(function() {
      carousel.longTouch = true;
    }, 250)

    this.touchstartx = event.touches[0].pageX;
    this.elem.valuesCarousel.classList.remove('carousel-animate');
  },

  handleTouchMove(event) {
    this.touchmovex = event.touches[0].pageX;

    this.movex = (this.currentMultiplier * this.THETA) + ((this.touchmovex - this.touchstartx) / 12)
    this.elem.valuesCarousel.style.transform = `translateZ(-${this.RADIUS}px) rotateY(${this.movex}deg)`
  },

  handleTouchEnd(event) {
    const absMove = Math.abs(this.currentMultiplier * this.THETA - this.movex);
    let nextMultiplier = this.currentMultiplier;

    if (absMove > this.THETA / 2 || !this.longTouch) {
      if (this.movex > nextMultiplier * this.THETA) {
        nextMultiplier++;
      } else if (this.movex < nextMultiplier * this.THETA) {
        nextMultiplier--;
      }
    }

    const endTarget = document.querySelector(`.values-slide[index="${this.determineIndex(nextMultiplier)}"]`)

    this.elem.valuesCarousel.classList.add('carousel-animate');
    this.updateNewSlide(endTarget);
  },

  updateIndexMapping() {
    const tempIndexMapping = {}

    this.activeSlides.forEach((slide, index) => {
      tempIndexMapping[slide] = this.MULTIPLIERS[index]
    })

    this.multiplierHashMap = tempIndexMapping;
  },

  updateNewSlide(eventTarget) {
    const target = findParent(eventTarget, 'values-slide');
    console.dir(target);
    const nextIndex = parseInt(target.getAttribute('index'))
    const nextBlurb = target.getAttribute('data-blurb');
    let nextActiveSlides;

    for (let i = 0; i < this.SLIDES_TO_SHOW; i++) {
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

    this.currentIndex = nextIndex;
    this.currentBlurb = nextBlurb;
    this.currentMultiplier += this.multiplierHashMap[this.currentIndex]
    this.activeSlides = nextActiveSlides;

    this.updateIndexMapping()
    this.handleCarouselRotate()
  },

  handleCarouselRotate() {
    this.elem.carouselSlides.forEach(slide => {
      const slideIndex = parseInt(slide.getAttribute('index'))
      const img = slide.querySelector('.values-icon');
      img.style.transform = `scale(1)`;
      img.style.marginTop = `0`;

      if (this.activeSlides.indexOf(slideIndex) == -1) {
        slide.style.opacity = 0;
        slide.style.top = `${-9999}px`;
      } else {
        if (this.currentIndex === slideIndex) {
          img.style.transform = `scale(1.85)`;
          img.style.marginTop = `${20}px`;
        }
        slide.style.opacity = 1;
        slide.style.top = 0;
      }
    });

    this.elem.valuesBlurbs.forEach(blurb => {
      blurb.style.transitionDuration = '0ms';
      blurb.style.opacity = 0;

      if (blurb.getAttribute('id') === `${this.currentBlurb}-blurb`) {
        blurb.style.transitionDuration = '1000ms';
        blurb.style.opacity = 1;
      }
    })

    this.elem.valuesCarousel.style.transform = `translateZ(-${this.RADIUS}px) rotateY(${this.currentMultiplier * this.THETA}deg)`
  },
}

carousel.init();

hotReload();
