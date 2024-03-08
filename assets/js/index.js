var listArray = ["slide1","slide2","slide3"];
var banner = new Swiper('.swiper-banner', {
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,        
    autoHeight: true,
    autoplay: {
        delay: 3000,//animation과 시간 맞춰줘야함
    }, 
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'bullets',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<i></i>' + '<b></b>'  + '</span>';
          },
    
    },
    navigation: {
      nextEl: '.banner-next',
      prevEl: '.banner-prev',
    },
});

const types_tea = new Swiper('.swiper-types-tea', {
    loop: false,
    spaceBetween: 24,
    breakpoints: {
        0: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
  }

});

const bestsellers = new Swiper('.swiper-bestsellers', {
    loop: true,
    navigation: {
      nextEl: '.bestsellers-next',
      prevEl: '.bestsellers-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
  }

});

const reviews = new Swiper('.swiper-reviews', {
    loop: true,
    navigation: {
      nextEl: '.reviews-next',
      prevEl: '.reviews-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
  }
});

const articles = new Swiper('.swiper-articles', {
  loop: false,
  spaceBetween: 24,
  breakpoints: {
      0: {
        slidesPerView: 1.2,
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