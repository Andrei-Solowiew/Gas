document.querySelector(".hero__btn").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("popup__open");
});

document.querySelector(".volume__link").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("popup__open");
});

document.querySelector(".volume__link").addEventListener("click", function () {
  document.querySelector(".hero__popup").classList.toggle("popup__volume");
});

document.querySelector(".location__btn").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("popup__open");
});

document.querySelector(".location__btn").addEventListener("click", function () {
  document.querySelector(".hero__popup").classList.toggle("popup__location");
});



document.querySelector(".hero__popup-close").addEventListener("click", function () {
   document.querySelector("body").classList.remove("popup__open");
});

document.querySelector(".hero__popup-area").addEventListener("click", function () {
   document.querySelector("body").classList.remove("popup__open");
});


// document.querySelector(".price__arrows").addEventListener("click", function () {
//   window.scrollBy(0, 1450);
// });

document.querySelector(".price__arrows").addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.querySelector(".advantages__bottom-p");
  element.scrollIntoView(true);
}