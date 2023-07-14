var swiper = new Swiper(".team_slider", {
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
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 4
      }
    }
});