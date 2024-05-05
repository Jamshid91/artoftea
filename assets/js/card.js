
    var productSlider = new Swiper('.big-card', {
        spaceBetween: 0,
        centeredSlides: false,
        loop:true,
        direction: 'horizontal',
        loopedSlides: 3,
        resizeObserver:true,
        pagination: {
            el: '.swiper-big-card-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<i></i>' + '<b></b>'  + '</span>';
              },
        
        }, 
    });
    var productThumbs = new Swiper('.small-card', {
        spaceBetween: 13,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        direction: 'vertical',
        slidesPerView: 3,
        loopedSlides: 3,    
    });
    productSlider.controller.control = productThumbs;
    productThumbs.controller.control = productSlider;


    $(document).ready(function() {
        $('.tab-info').hide();
        $('.tab-info:first-child').show();
        $('.tab-btn').click(function() {
          let pageInfo = $(this).attr('data-tab');
          $('.tab-info').hide();
          $('.' + pageInfo).show();
        })
    });

 


      const writeText = document.getElementById('write-text'),
            errorText = document.querySelector('.error'),
            writeForm = document.querySelector('.write-review-form'),
            writeFormClose = document.querySelector('.write-review__close'),
            leaveFeedback = document.querySelector('.leave-feedback'),
            writeReview = document.querySelector('.write-review'),
            reviewCompany = document.querySelector('.review-company'),
            submitReview = document.querySelector('.write-review-box .submit-btn');

      writeText.addEventListener('keypress', (e) => {
        if(writeText.value.length < 300) {
            writeText.style.height = '48px';
            writeText.style.height = (writeText.scrollHeight) + 'px';
            submitReview.removeAttribute('disabled')
          }
        else if(writeText.value.length == 300) {
            writeText.style.borderColor = '#F03434'
            errorText.classList.remove('d-none')
            e.preventDefault();
            return false;
        }
      });
      writeText.addEventListener('keydown', () => {
    if(writeText.value.length < 300) {
            writeText.style.borderColor = '#256407'
            errorText.classList.add('d-none')
        }
      });

      submitReview.addEventListener('click', () => {
        writeForm.classList.add('d-none');
        writeForm.nextElementSibling.classList.remove('d-none')
      });

      writeFormClose.addEventListener('click', () => {
        reviewCompany.classList.remove('d-none');
        writeReview.classList.add('d-none');
        leaveFeedback.classList.remove('d-none');
      });
      
      leaveFeedback.addEventListener('click', () => {
        reviewCompany.classList.add('d-none');
        writeReview.classList.remove('d-none');
        leaveFeedback.classList.add('d-none');
      })


      // reviews show 
      if($(window).width() < 991) {
         $('.reviews-box').removeClass('tab-info')
      } 


      const sorting = document.querySelectorAll('.sorting-list li');

      sorting.forEach(list => {
        list.addEventListener('click', () => {
          list.parentElement.parentElement.previousElementSibling.children[0].children[1].textContent = list.textContent
        })
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

    