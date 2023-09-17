//
import people from './data.js';

const sliderContainer = document.querySelector('.slider-container');

sliderContainer.innerHTML = people
  .map((person) => {
    const { img, name, job, text } = person;
    return `<article class="slide">
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
