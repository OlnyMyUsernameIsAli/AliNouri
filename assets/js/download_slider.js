var swiper = new Swiper(".download_slider", {
    spaceBetween: 0,
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
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 4
      }
    }
});