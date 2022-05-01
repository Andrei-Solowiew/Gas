const swiper = new Swiper(".reviews__container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 55,
  pagination: {
    el: ".reviews__container .reviews__pagination",
    clickable: true,
    // type: "fraction",
  },
  navigation: {
    nextEl: ".reviews__button_next",
    prevEl: ".reviews__button_prev",
  },

  grabCursor: true,

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  breakpoints: {
    400: {
      spaceBetween: 90,
    },
  },

  breakpoints: {
    500: {
      spaceBetween: 151,
    },
  },
});
