const shareBtn = document.querySelector('.share-btn'),
      sharePopUp = document.querySelector('.popUp-share');

shareBtn.addEventListener('click', () => {
  sharePopUp.classList.remove('d-none')
});


const sale = document.querySelector('.order .sale-head');

sale.addEventListener('click', () => {
  sale.parentElement.classList.toggle('showSale')
})


const promoCode = document.querySelector('.promoCode-inp'),
      promoCodeBtn = document.querySelector('.promoCode-btn');


promoCode.addEventListener('input', () => {
  promoCodeBtn.removeAttribute('disabled');
  if(promoCode.value == '') {
    promoCode.nextElementSibling.children[0].classList.add('d-none')
  }
});

promoCodeBtn.addEventListener('click', () => {
  if(promoCode.value != '') {
    promoCode.nextElementSibling.children[0].classList.remove('d-none')
  }
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
})
      
      
      
      
      
      
      
      
      
      
      
      
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

    