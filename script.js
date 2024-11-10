// {/* // Read more button toggler */}
let isExpanded = false;

document
  .getElementById("toggle-description")
  .addEventListener("click", function () {
    const description = document.getElementById("description-text");
    if (!isExpanded) {
      description.textContent +=
        "We are here to meet your silica sand needs, no matter the scale of your project. Contact us today to learn more about how Allahabad Silica Sand can support your business with quality you can trust.";
      this.textContent = "Read Less";
    } else {
      description.textContent =
        " At Allahabad Silica Sand, we take pride in being a leading supplier of premium quality silica sand, catering to a diverse range of industries. Under the visionary leadership of Mr. Shumbham Pandey, our firm has grown to become a trusted name in the silica sand sector, known for our commitment to excellence, innovation, and sustainability.";
      this.textContent = "Read More";
    }
    isExpanded = !isExpanded;
  });

// JavaScript to Toggle the Mobile Menu
function toggleMenu() {
  const navbar = document.getElementById("navbar-mobile");
  navbar.classList.toggle("show");
}

// Function to toggle sub-menus
function toggleSubMenu(menuId) {
  const subMenu = document.getElementById(menuId);
  subMenu.classList.toggle("show");
}

let slideIndex = 1;
let slides = document.querySelectorAll(".carousel-images img");
let dots = document.querySelectorAll(".dot");
let autoSlideInterval;

// Show the first slide
function showSlide(index) {
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  // Hide all images
  slides.forEach((slide) => slide.classList.remove("active"));
  // Remove active class from all dots
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show the current image and set the current dot
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

// Change to specific slide
function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
  resetAutoSlide();
}

// Auto slide function
function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Reset auto slide timer
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 3000); // 3-second interval
}

// Event listener for image click
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});

// Initialize auto sliding
autoSlideInterval = setInterval(autoSlide, 3000); // Start the carousel auto slide every 3 seconds
// </script>
