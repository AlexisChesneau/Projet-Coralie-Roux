document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "fade",
    heightRatio: 0.5,
    pagination: true,
    autoplay: true,
    interval: 4000,
    loop: true,
    arrows: false,
    easing: "ease-in-out",
  }).mount();
});
