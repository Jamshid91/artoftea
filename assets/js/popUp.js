const popUp = document.querySelectorAll('.popUp'),
      popUpClose = document.querySelectorAll('.popUp__close');

window.addEventListener('click', (e) => {
    popUp.forEach(popup => {
      if(e.target == popup) {
        popup.children[0].classList.add('popUpHide')
        setTimeout(() => {
          popup.classList.add('d-none')
          popup.children[0].classList.remove('popUpHide')
        }, 450);
    }
    })
});

popUpClose.forEach(close => {
    close.addEventListener('click', () => {
      popUp.forEach(popup => {
        popup.children[0].classList.add('popUpHide')
        setTimeout(() => {
          popup.classList.add('d-none')
          popup.children[0].classList.remove('popUpHide')
        }, 450);
      })
    });
})