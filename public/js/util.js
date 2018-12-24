
/**
 * Utility Functions
 */
 export function slickHelper(main, thumbnail) {
   $(main).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    fade: false,
    asNavFor: thumbnail,
    prevArrow: "<button type='button' class='slick-prev pull-left'><div class='chevron-border green'><span class='chevron left'></span></div></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><div class='chevron-border green'><span class='chevron right'></span></div></button>",
  })

  $(thumbnail).slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: main,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  })
 }

export function hotReload() {
  return (process.env.NODE_ENV === 'development') && module.hot && module.hot.accept();
}

export function mobileNavHandler(toggle, mobileNav) {

  toggle.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.wrapper');
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    e.preventDefault();

    if (this.classList.contains('mobile-active') === true) {
      this.classList.remove('mobile-active')
      mobileNav.classList.remove('mobile-active')
      wrapper.classList.remove('mobile-active')
      html.classList.remove('mobile-active')
      body.classList.remove('mobile-active')
    } else {
      this.classList.add('mobile-active');
      mobileNav.classList.add('mobile-active');
      wrapper.classList.add('mobile-active');
      html.classList.add('mobile-active')
      body.classList.add('mobile-active')
    }

  });
}

export function removeAllChildren(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

export function findParent(node, className) {
  let tempNode = node;

  while (!tempNode.classList.contains(className)) {
    tempNode = tempNode.parentNode;
  }

  return tempNode
}

export function sliceArray(nodeArray) {
  return Array.prototype.slice.call(nodeArray)
}

export function getDistanceFromLeft(el) {
  const rect = el.getBoundingClientRect();
  const docEl = document.documentElement;

  return (rect.left + (window.pageXOffset || docEl.scrollLeft || 0))
}

export function footerCopyrightYear(target) {
  target.innerHTML = new Date().getFullYear();
}

export function scrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

export function scrollTo(e, elem) {
  e.preventDefault();

  const target = `.${elem.getAttribute('scrollTo')}`

  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
}

export function isScrolledIntoView(el) {
  const elemTop = el.getBoundingClientRect().top;
  const elemBottom = el.getBoundingClientRect().bottom;
  const elemHeight = el.clientHeight;

  return (
    elemTop <= window.innerHeight &&
    elemBottom <= (window.innerHeight + elemHeight) &&
    elemTop >= (-elemHeight) &&
    elemBottom >= 0
  )
}

export function scrolledInAnimationHandler(visible, elem) {
  const animated = elem.classList.contains('animated');
  let enterDirection = elem.getAttribute('data');

  if (visible) {
    elem.classList.add('inView', 'animated-visible')
    elem.classList.remove('notInView', `${enterDirection}-hidden`)
    elem.classList.add('animated')
  } else if (!visible) {
    elem.classList.add('notInView', `${enterDirection}-hidden`)
    elem.classList.remove('animated', 'inView', 'animated-visible')
  }

  // } else if (!visible && !animated) {
  //   elem.classList.add('notInView', `${enterDirection}-hidden`)
  // }
}

export function handleAllAnimations(waypoints) {
  let visible;
  waypoints.forEach(waypoint => {
    let visible = isScrolledIntoView(waypoint)
    scrolledInAnimationHandler(visible, waypoint);
  })
}
