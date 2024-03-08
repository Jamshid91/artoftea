var productSlider = new Swiper('.big-card', {
    spaceBetween: 0,
    centeredSlides: false,
    loop:true,
    direction: 'horizontal',
    loopedSlides: 5,
    resizeObserver:true,
    
    pagination: {
        el: '.swiper-big-card-pagination',
        clickable: true
    }, 
});
var productThumbs = new Swiper('.small-card', {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 5,
    loopedSlides: 5,    

    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      576: {
        direction: 'vertical',
      },
}
});
productSlider.controller.control = productThumbs;
productThumbs.controller.control = productSlider;


const weightList = document.querySelectorAll('.weight-list li');


weightList.forEach(list => {
    list.addEventListener('click', () => {
        weightList.forEach(elem => {
            elem.classList.remove('active')
        })
        list.classList.add('active')
    });
});

const increase__btn = document.querySelector('.qty-increase__btn'),
decrease__btn = document.querySelector('.qty-decrease__btn'),
amountNum = document.querySelector('.amount-val');

increase__btn.addEventListener('click', () => {
    increase__btn.previousElementSibling.value++
    decrease__btn.removeAttribute('disabled')
});

decrease__btn.addEventListener('click', () => {
    if(decrease__btn.nextElementSibling.value > 1) {
    decrease__btn.nextElementSibling.value--
    } 
    else {
        decrease__btn.toggleAttribute('disabled')
    }
});


const similar_products = new Swiper('.swiper-similar-products', {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.similar-products-next',
      prevEl: '.similar-products-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
  }

});

$(document).ready(function() {
  $('.tabs-info').hide();
  $('.tabs-info:first-child').show();
  $('.tabs-btn').click(function() {
    $('.tabs-btn').removeClass('active');
    $(this).addClass('active')
    let pageInfo = $(this).attr('data-tab');
    $('.tabs-info').hide();
    $('.' + pageInfo).show();
  })
});