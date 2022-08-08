var timer;

let slideIndex = 0;
displaySlides();

function currentSlides(n) {
  displaySlides((slideIndex = n));
}

function displaySlides(n) {
  let x;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  slides[slideIndex - 1].style.display = "block";

  clearTimeout(timer);
  timer = setTimeout(() => displaySlides(), 5000);
}
