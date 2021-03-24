function initCarousel() {

  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');

  let widthCarousel = carouselInner.offsetWidth;

  let position = 0;

  if (position == 0) {
    arrowLeft.style.display = 'none';
  }

  arrowLeft.onclick = function () {
    position += widthCarousel;
    position = Math.min(position, 0);
    carouselInner.style.transform = `translateX(${position}px)`;

    if (position == 0) {
      arrowLeft.style.display = 'none';
    }
    arrowRight.style.display = '';
  };

  arrowRight.onclick = function () {
    let maxPosition = -widthCarousel * (slides.length - 1);

    position -= widthCarousel;
    position = Math.max(position, maxPosition);
    carouselInner.style.transform = `translateX(${position}px)`;

    if (position == maxPosition) {
      arrowRight.style.display = 'none';
    }
    arrowLeft.style.display = '';
  };
}