const similar_products = new Swiper('.swiper-tea', {
    loop: true,
    navigation: {
      nextEl: '.tea-next',
      prevEl: '.tea-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2.02,
          spaceBetween: 6,
        },
        576: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
  }

});