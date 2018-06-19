
/**
 * Utility Functions
 */

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
