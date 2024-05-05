const popular = new Swiper('.swiper-popular', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.popular-next',
      prevEl: '.popular-prev',
    },

});


const articles_popular = new Swiper('.swiper-articles-popular', {
    loop: false,
    spaceBetween: 24,   
    autoHeight: true,
    autoplayDisableOnInteraction: false,
    autoplay: {
        delay: 1000,
    }, 
    breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
  }
  
  });