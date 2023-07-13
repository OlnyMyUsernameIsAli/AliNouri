var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    fade: true,
    slidesPerGroupSkip: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 2
      },
      1400: {
        slidesPerView: 3
      }
    }
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     hide: true,
    //   },
  });