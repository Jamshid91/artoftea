const shareBtn = document.querySelector('.share-btn'),
      sharePopUp = document.querySelector('.popUp-share');

shareBtn.addEventListener('click', () => {
  sharePopUp.classList.remove('d-none')
});



const gift = document.querySelector('.gift-head'),
      giftBox = document.querySelector('.gift'),
      giftProduct = document.querySelector('.gift-product'),
      chooseGifts = document.querySelectorAll('.choose-gift');

gift.addEventListener('click', () => {
  gift.classList.toggle('showGift');
  gift.nextElementSibling.classList.toggle('d-none')
});

chooseGifts.forEach(btn => {
  btn.addEventListener('click', () => {
    giftBox.classList.add('d-none');
    giftProduct.classList.remove('d-none');
  })
});


// scroll order btn
const checking = document.querySelector('.promoCode');
const scrolling = document.querySelector('.scroll-orderBtn');

window.addEventListener('scroll', () => { 
    const position = checking.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 2;

    if(screenPosition > position) {
        scrolling.classList.remove('d-flex')
      } else {
        scrolling.classList.add('d-flex')
      }
});


      
const orders = new Swiper('.swiper-orders', {
  loop: false,
  breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 1.5,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
}

});

const orders_body = new Swiper('.swiper-orders-body', {
  loop: false,
  breakpoints: {
      0: {
        slidesPerView: 3.15,
        spaceBetween: 4,
      },
      768: {
        slidesPerView: 4.2,
      },
      991: {
        slidesPerView: 5.3,
        spaceBetween: 8,
      },
}

});  
      
      
      
      const you_watched = new Swiper('.swiper-you-watched', {
        loop: true,
        navigation: {
          nextEl: '.you-watched-next',
          prevEl: '.you-watched-prev',
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


    const recommend = new Swiper('.swiper-recommend', {
      loop: true,
      navigation: {
        nextEl: '.recommend-next',
        prevEl: '.recommend-prev',
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

    