'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scrll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const containerTab = document.querySelector('.operations__tab-container');
const contentTab = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
// btnScrollTo.addEventListener('click', function () {
//   section1.scrollIntoView({ behavier: 'smooth' });
// });
//////////////////////////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //mathin
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//////////////////////////////////////////////////////
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//EVENTHANDLER
// const h1 = document.querySelector('h1');
// const alert1 = function () {
//   alert('hi');
// };
// h1.addEventListener('mouseenter', alert1);
// setTimeout(() => h1.removeEventListener('mouseenter', alert1), 6000);
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const allSections = document.querySelectorAll('.section');
const header = document.querySelector('.header');
console.log(allSections);
console.log(document.getElementsByTagName('button'));
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we used cookies for improve functinality ans analitic.<button class="btn btn--close-cooki">go it</button>';
console.log(message);
header.prepend(message);
//header.append(message.cloneNode(true));
document
  .querySelector('.btn--close-cooki')
  .addEventListener('click', function () {
    message.remove();
  });

//style
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).backgroundColor);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 100 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');
message.style.setProperty('color', 'red');
//ATTREBUTE
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.classList);
logo.alt = 'bravo';
//NAN STANDARD
logo.setAttribute('designer', 'kosar');
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log(logo.CDATA_SECTION_NODE.ver);
btnScrollTo.addEventListener('click', function (e) {
  //  const slocoords = section1.getBoundingClientRect();
  // console.log(slocoords);
  // console.log(e.target.getBoundingClientRect());
  // console.log(window.pageXOffset, pageYOffset);
  // console.log(
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // section1.scrollIntoView({});
  //section1.scrollIntoView({ behavior: 'smooth' });
});
// const h1 = document.querySelector('h1');
// const alerth1 = function (e) {
//   alert('hi');
// };
// h1.addEventListener('mouseenter', alerth1);

// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);
*/
// const random = (min, max) => Math.floor(Math.random() * (max - min + 1));
// const randomRbg = () =>
//   `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
// console.log(randomRbg());
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgrundcolor = 'rgb(0, 0, 0)';
//   console.log('LINK', e.target, e.currentTarget);
//   console.log();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('LINK', e.target);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('LINK', e.target);
// });
//

/////COMPONENT

containerTab.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //removing
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  if (!clicked) return;

  contentTab.forEach((v) => v.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  //content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//MENUE FADE ANIMATION

const menueHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav__link').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', menueHover.bind(0.5));
nav.addEventListener('mouseout', menueHover.bind(1));

//STICKY NAV
// const initioallCoord = section1.getBoundingClientRect();
// console.log(initioallCoord);
// window.addEventListener('scroll', function (e) {
//   if (this.window.scrollY > initioallCoord.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

const sticky = function (entres) {
  const [entry] = entres;
  //console.log(entry.isIntersecting);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);
const obsHeader = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
obsHeader.observe(header);

////REALL SECTION

const allSection = document.querySelectorAll('.section');
const reallSection = function (entres, observe) {
  const [entry] = entres;

  // FOR REALL SECTION1
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  // FOR BETTER INFORMANCE =>CONSOL.LOG NASHODAN BAKHSH HAAYIKE OBSERVE SHODSN
  observe.unobserve(entry.target);
};

const sectionObserve = new IntersectionObserver(reallSection, {
  root: null,
  threshold: 0.15,
});
const imageTarget = document.querySelectorAll('img[data-src]');
allSection.forEach(function (section) {
  sectionObserve.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading img
const loadImg = function (entres, observe) {
  const [entry] = entres;

  //tanha zamani anjam beshe ke  intersecting true bashe
  if (!entry.isIntersecting) return;

  // REAPLACE REAL SRC WHIT DATA-SREC
  entry.target.src = entry.target.dataset.src;
  // REMOVE BLLUR CLASS
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observe.unobserve(entry.target);
};
const observeImg = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 1,
});

imageTarget.forEach((img) => observeImg.observe(img));

// SLIDER
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnSlideLeft = document.querySelector('.slider__btn--left');
  const btnSlideRight = document.querySelector('.slider__btn--right');

  const slider = document.querySelector('.slider');
  const dotContainer = document.querySelector('.dots');

  //slider.style.overflow = 'visible';

  let curSlide = 0;
  const maxSlide = slides.length;

  const creatDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  creatDots();

  document.querySelector;
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((e) => e.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data_slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  activateDot(0);

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  goToSlide(0);
  activateDot(curSlide);

  const prevSlid = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  const nextSlid = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  btnSlideLeft.addEventListener('click', prevSlid);
  btnSlideRight.addEventListener('click', nextSlid);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Arrowleft') prevSlid();
    if (e.key === 'ArrowRight') nextSlid();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
