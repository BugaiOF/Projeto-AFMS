function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu_white_36dp.svg" 
    }else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/images/close_white_36dp.svg" 
    }
}
/* carrosel */
const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);
const nextBtn = document.createElement('button');
const prevBtn = document.createElement('button');

/* nextBtn.innerHTML = '>';
prevBtn.innerHTML = '<';

carousel.appendChild(nextBtn);
carousel.appendChild(prevBtn);
 */
const moveToSlide = (carousel, currentSlide, targetSlide) => {
  carousel.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateSlides = (slides, currentSlide, targetSlide) => {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  moveToSlide(carousel, currentSlide, targetSlide);
};

updateSlides(slides, slides[0], slides[0]);

nextBtn.addEventListener('click'), e => {
  const currentSlide = carousel.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  if (nextSlide) {
    moveToSlide(carousel, currentSlide, nextSlide);
  }
  if (!nextSlide) {
    updateSlides(slides)
    }
}