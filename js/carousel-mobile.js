const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: false,
    loopAdditionalSlides: 1,
    initialSlide: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
  });
  