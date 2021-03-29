function initCarousel() {

  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');

  let widthCarousel = carouselInner.offsetWidth;

  let position = 0;
  let maxPosition = -widthCarousel * (slides.length - 1);
  arrowLeft.style.display = 'none';

  arrowLeft.onclick = function () {
    position += widthCarousel;
    position = Math.min(position, 0);
    update();
  };

  arrowRight.onclick = function () {

    position -= widthCarousel;
    position = Math.max(position, maxPosition);
    update();
  };
  
  function update() {

    carouselInner.style.transform = `translateX(${position}px)`;

    if (position == 0) {
      arrowLeft.style.display = `none`;
      arrowRight.style.display = ``;
    }
    else if (position == maxPosition) {
      arrowRight.style.display = `none`;
      arrowLeft.style.display = ``;
    }
    else {
      arrowRight.style.display = ``;
      arrowLeft.style.display = ``;
    }
  }
}
