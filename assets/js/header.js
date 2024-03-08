const menuBtn = document.querySelector('.menu-btn'),
      catalogBtn = document.querySelector('.catalog-btn'),
      catalogNavClose = document.querySelector('.catalog-nav__close'),
      catalogNav = document.querySelector('.header-catalog-nav'),
      callBtn = document.querySelector('.call-btn'),
      socialCloseBtn = document.querySelector('.socal__close'),
      popUpSocial = document.querySelector('.popUp-social'),
      body = document.querySelector('body');

catalogBtn.addEventListener('click', () => {
    catalogBtn.parentElement.classList.toggle('showCatalogNav');
});

menuBtn.addEventListener('click', () => {
    catalogNav.classList.add('d-block');
    body.classList.add('bodyStopScroll')
});

catalogNavClose.addEventListener('click', () => {
    catalogNav.classList.remove('d-block');
    body.classList.remove('bodyStopScroll')
});

document.addEventListener('click', function (e) {
    catalogBtn.parentElement.contains(e.target)||catalogBtn.parentElement.classList.remove('showCatalogNav')
});

callBtn.addEventListener('click', () => {
    popUpSocial.classList.remove('d-none')
});

socialCloseBtn.addEventListener('click', () => {
    popUpSocial.classList.add('d-none')
});