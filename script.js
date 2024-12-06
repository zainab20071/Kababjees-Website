//======================================== Navbar ================================================

const menuIcon = document.getElementsByClassName("icon")[0];
const navLinksContainer = document.querySelector(".nav-links");

// Add click event listener to the menu icon
menuIcon.addEventListener("click", () => {
  // Toggle the 'active' class on nav-links to show/hide links
  navLinksContainer.classList.toggle("active");
});

//======================================= Navbar Sticky ============================================

window.addEventListener("scroll", () => {
  const navLinks = document.querySelector(".nav-links");

  if (window.scrollY > 50) {
    // Add sticky class when scrolled
    navLinks.classList.add("sticky");
    navLinks.classList.remove("transparent");
  } else {
    // Reset to transparent when at the top
    navLinks.classList.add("transparent");
    navLinks.classList.remove("sticky");
  }
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

const showSlide = (i) => {
    slider.style.transform = `translateX(${-i * 100}%)`;
};

next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});
/*Sliders */
let customSlideIndex = 0;
const customSlides = document.querySelectorAll(".custom-slide-wrapper img");
const customWrapper = document.querySelector(".custom-slide-wrapper");

function showCustomSlide(index) {
    customWrapper.style.transform = `translateX(-${index * 100}%)`;
}

// // Automatically move slides every 3 seconds
// setInterval(() => {
//     customSlideIndex = (customSlideIndex + 1) % customSlides.length;
//     showCustomSlide(customSlideIndex);
// }, 3000); // Adjust speed here (3000ms = 3 seconds)

// Buttons for manual navigation
document.getElementById("custom-prev-btn").onclick = () => {
    customSlideIndex = (customSlideIndex - 1 + customSlides.length) % customSlides.length;
    showCustomSlide(customSlideIndex);
};

document.getElementById("custom-next-btn").onclick = () => {
    customSlideIndex = (customSlideIndex + 1) % customSlides.length;
    showCustomSlide(customSlideIndex);
};