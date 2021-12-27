'use strict';

const scrollLinkLearnMore = document.querySelector('.btn--scroll-to');
const header = document.querySelector('.header');
const section1 = document.getElementById('section--1');
const section2 = document.getElementById('section--2');
const section3 = document.getElementById('section--3');
const section4 = document.getElementById('section--4');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// nodeList is not array, but still have forEach method
btnsOpenModal.forEach(btn => btn.addEventListener(`click`, openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* #################################
scroll to 
####################################*/
scrollLinkLearnMore.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});
const objRelativeY = section1.getBoundingClientRect().top;
const curWindowY = window.pageYOffset;

/* #################################
page navagation
####################################*/
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

/* #################################
tab
####################################*/
// linstener delegation
const operaterChange = function (e) {
  // select button rather than span in it
  const targetButton = e.target.closest('button');
  // if (!targetButton) return;
  if (targetButton?.classList.contains('operations__tab')) {
    // control tab click effect
    [...targetButton.closest('div').children].forEach(ele =>
      ele.classList.remove('operations__tab--active')
    );
    targetButton.classList.add('operations__tab--active');
    // const dateTab = targetButton.getAttribute('data-tab');
    // bad practice to use getAttr when we have ele.dataset.tab
    // control cards showing up
    section2
      .querySelectorAll('.operations__content')
      .forEach(ele => ele.classList.remove('operations__content--active'));
    section2
      .querySelector(`.operations__content--${targetButton.dataset.tab}`)
      .classList.add('operations__content--active');
  }
};
section2.addEventListener('click', operaterChange);

/* #################################
menu fade
####################################*/
// mouseenter dose not bubble we use mouseover here
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/* #################################
Sticky navigation
####################################*/
// const initialCoords = section1.getBoundingClientRect().top + window.scrollY;
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });

// const options = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const stickyNav = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// let observer = new IntersectionObserver(stickyNav, options);
// observer.observe(section1);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

/* #################################
reveal sections
####################################*/
const sections = document.querySelectorAll('.section');
// seclect all sections ✔

const revealSections = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry, observer);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
// observer callback✔

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});
// new observer

sections.forEach(section => {
  // section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
// call observer for each section

/* #################################
Lazy img
####################################*/
const featuresImgs = document.querySelectorAll('img[data-src]');
const lazyImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry);
  entry.target.src = entry.target.dataset.src;
  //  IMG successfully load => remove lazy-img class
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const featuresImgsObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0.5,
});
featuresImgs.forEach(ele => featuresImgsObserver.observe(ele));

/* #################################
Slider
####################################*/
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;

const creatDots = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
creatDots();
const dots = document.querySelectorAll('.dots__dot');

const changeSlide = function (targetSlide) {
  slides.forEach(function (slide, i) {
    slide.style.transform = `translateX(${(i - targetSlide) * 100}%)`;
  });
};

const activeDot = function (targetSlide) {
  // console.log(dots);
  dots.forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${targetSlide}"]`)
    .classList.add('dots__dot--active');
};

const init = function () {
  changeSlide(0);
  activeDot(0);
};
init();
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = slides.length - 1;
  } else {
    curSlide--;
  }
  changeSlide(curSlide);
  activeDot(curSlide);
};
const nextSlide = function () {
  console.log(curSlide);
  console.log(`${curSlide === slides.length - 1}`);
  if (curSlide === slides.length - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  changeSlide(curSlide);
  activeDot(curSlide);
};
// Event handelers
sliderBtnLeft.addEventListener('click', prevSlide);
sliderBtnRight.addEventListener('click', nextSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide(); // short circuiting sytax
});
dotsContainer.addEventListener('click', function (e) {
  if (!e.target?.classList.contains('dots__dot')) return;
  curSlide = +e.target.dataset.slide;
  // console.log(e.target.dataset); // {slide: '1'}
  // const { slide } = e.target.dataset;
  console.log(curSlide);
  console.log(`${curSlide === slides.length - 1}`);
  changeSlide(curSlide); // 1
  activeDot(curSlide);
});

/* #################################
section 186 advanced Dom
####################################*/
// console.log(document); // prototype: HtmlDocumnent
// console.log(document.documentElement); // prototype: HTMLElement
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections); //  return nodelist (Won't update itself)

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); // return HTML-Collection(updates automaticlly E.g: Delete an element)

// document.getElementsByClassName('btn');

/* #################################
186.2 insert cookie
####################################*/
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';

// const header = document.querySelector('header');
// header.append(message); // final position.

// const cookie = document.getElementsByClassName('cookie-message');
// const cookie2 = document.querySelectorAll('.cookie-message');
// const allCookieBtns = document.querySelectorAll('.btn--close-cookie');
// allCookieBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     Array.from(cookie).forEach(e => e.remove()); // HTMLCollection way
//     cookie2.forEach(e => e.remove()); // nodelist way
//   });
// });
