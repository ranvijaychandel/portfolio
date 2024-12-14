//scroll section active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener("scroll", () => {
  let top = window.scrollY;
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150; // Adjust the offset as needed
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Remove 'active' class from all nav links
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      // Add 'active' class to the current section's nav link
      let activeLink = document.querySelector('header nav a[href*=' + id + ']');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});


window.onscroll = () => {
  /*=================== sticky navbar======================*/
  let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);    
}

const toggleIcon = document.getElementById('darkMode-icon');
toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});

/*==================Swiper Slider==================*/

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });