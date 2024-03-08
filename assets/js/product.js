products = new Swiper('.swiper-products', {
    loop: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.products-next',
      prevEl: '.products-prev',
    },
    breakpoints: {
      0: {
          slidesPerView: 2,
          grid: {
              rows: 4,
              fill: 'row'
            },
      },
      992: {
        slidesPerView: 3, 
        grid: {
            rows: 4,
            fill: 'row'
          },
      },
      1200: {
        slidesPerView: 4, 
        grid: {
            rows: 3,
            fill: 'row'
          },
      },
  }
});

const selectHead = document.querySelector('.select-head');
const selectLists = document.querySelectorAll('.select-body li');


selectHead.addEventListener('click', () => {
    selectHead.parentElement.classList.toggle('showCountSelect')
});

selectLists.forEach(list => {
    list.addEventListener('click', () => {
        list.parentElement.parentElement.classList.toggle('showCountSelect');

        selectHead.children[0].textContent = list.textContent
    });
})