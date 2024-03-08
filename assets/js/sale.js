const sale_products = new Swiper('.swiper-sale-products', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 6,
    navigation: {
      nextEl: '.sale-products-next',
      prevEl: '.sale-products-prev',
    },

});

const sale = new Swiper('.swiper-sale', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 6,
  navigation: {
    nextEl: '.sale-next',
    prevEl: '.sale-prev',
  },

});