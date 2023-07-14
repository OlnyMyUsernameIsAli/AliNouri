var swiper = new Swiper(".customer_slider", {
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    fade: true,
    slidesPerGroupSkip: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 2
      }
    }
  });