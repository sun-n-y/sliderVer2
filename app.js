//
import people from './data.js';

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

sliderContainer.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }
    return `<article class="slide ${position}">
                <img src="${img}" class="person-img" alt="${name}">
                <h3 class="name">${name}</h3>
                <h3 class="job">${job}</h3>
                <p class="text">${text}</p>
                <div class="quote">
                    <i class="fas fa-quote-right"></i>
                </div>
            </article>`;
  })
  .join('');

const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = sliderContainer.firstElementChild;
  }

  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');

  if (type === 'prev') {
    active.classList.add('next');
    next.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = sliderContainer.lastElementChild;
    }
    next.classList.remove('next');
    next.classList.add('last');
    return;
  }

  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');
};

nextBtn.addEventListener('click', () => {
  startSlider();
});
prevBtn.addEventListener('click', () => {
  startSlider('prev');
});
