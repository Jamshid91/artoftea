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


// Способ доставки
const getPoint = document.getElementById('get-point'),
      checkMap = document.querySelector('.check-map'),
      address = document.getElementById('address'),
      post = document.getElementById('post'),
      courier = document.getElementById('courier');
      courier_comp = document.getElementById('courier-comp');

getPoint.addEventListener('click', () => {
  if(getPoint.checked = true) {
    checkMap.classList.remove('d-none');
    deliveryAddress.classList.add('d-none')
  } 
});

address.addEventListener('click', () => {
  if(address.checked = true) {
    checkMap.classList.add('d-none');
    deliveryAddress.classList.add('d-none')
  } 
});

post.addEventListener('click', () => {
  if(post.checked = true) {
    checkMap.classList.add('d-none');
    deliveryAddress.classList.remove('d-none')
  } 
});

courier.addEventListener('click', () => {
  if(courier.checked = true) {
    checkMap.classList.add('d-none');
    deliveryAddress.classList.remove('d-none')
  } 
});

courier_comp.addEventListener('click', () => {
  if(courier_comp.checked = true) {
    checkMap.classList.add('d-none');
    deliveryAddress.classList.remove('d-none')
  } 
});

const headItem = document.querySelectorAll('.head-item');

headItem.forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('showInfo')
  })
})



const deliveryMethod_btn = document.querySelector('.delivery-method .continue-btn'),
      deliveryMethod = document.querySelector('.delivery-method'),
      recipientInformation = document.querySelector('.recipient-information')

deliveryMethod_btn.addEventListener('click', () => {
  if(getPoint.checked != true && address.checked != true) {
    checkMap.classList.add('d-none');
    deliveryAddress.classList.remove('order-step');
    deliveryAddress.children[1].classList.remove('d-none');
    deliveryMethod.classList.add('hideInfo')
  } 
  else if(courier_comp.checked != true && post.checked != true  && courier.checked != true) {
    checkMap.classList.add('d-none');
    recipientInformation.classList.remove('order-step');
    recipientInformation.children[1].classList.remove('d-none');
    deliveryMethod.classList.add('hideInfo')
  }
});


// Выбрать ПВЗ на карте
const chooseMap = document.querySelector('.choose-btn'),
      popUpMap = document.querySelector('.popUp-map');

chooseMap.addEventListener('click', () => {
  popUpMap.classList.remove('d-none');
  body.classList.add('bodyStopScroll');
});





// Данные получателя
const organizationCheck = document.getElementById('organization-check'),
      recipientCheck = document.getElementById('recipient-check'),
      general = document.querySelector('.information-general'),
      organization = document.querySelector('.information-organization'),
      recipient = document.querySelector('.information-recipient');



organizationCheck.addEventListener('click', () => {
  organization.classList.remove('d-none');
  general.classList.add('d-none');
  recipient.classList.add('d-none');
});

recipientCheck.addEventListener('click', () => {
  recipient.classList.remove('d-none');
  general.classList.add('d-none');
  organization.classList.add('d-none');
});

// Адрес доставки
const deliveryAddress = document.querySelector('.delivery-address');


// copy
const copyBtn = document.querySelector('.copy-btn');
const copytext = document.querySelector('.order-num');

copyBtn.addEventListener('click', () => {
    str = copytext.innerHTML;
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.classList.remove('copied');
    }, 1500);
});




// <!-- Данные получателя -->
const fio = document.getElementById('fio'),
      email = document.getElementById('email'),
      phone = document.getElementById('phone'),
      organiz = document.getElementById('organization'),
      inn = document.getElementById('inn'),
      kpp = document.getElementById('kpp'),
      fio_recipient = document.getElementById('fio-recipient'),
      phone_recipient = document.getElementById('phone-recipient'),
      organization_check = document.getElementById('organization-check'),
      recipient_check = document.getElementById('recipient-check'),
      recipient_information = document.querySelector('.recipient-information'),
      recipient_btn = document.querySelector('.recipient-information .continue-btn');



      
      recipient_btn.addEventListener('click', () => {
        checkInputsRecipient();
        checkInputsOrganiz();
        checkInputsRecip();

        let successName = fio.parentElement.nextElementSibling.classList,
            successEmail = email.parentElement.nextElementSibling.classList,
            successPhone = phone.parentElement.nextElementSibling.classList,
            successOrganiz = organiz.parentElement.nextElementSibling.classList,
            successInn = inn.parentElement.nextElementSibling.classList,
            successKpp = kpp.parentElement.nextElementSibling.classList,
            successFio_recipient = fio_recipient.parentElement.nextElementSibling.classList,
            successPhone_recipient = phone_recipient.parentElement.nextElementSibling.classList;

            if(successName == 'success' && successEmail == 'success' && successPhone == 'success') {
                payment_method.classList.remove('order-step');
                payment_method.children[1].classList.remove('d-none');

                recipient_information.classList.add('hideInfo')
            } else if(successOrganiz == 'success' && successInn == 'success' && successKpp == 'success') {
                payment_method.classList.remove('order-step');
                payment_method.children[1].classList.remove('d-none');

                recipient_information.classList.add('hideInfo')
            } else if(successFio_recipient == 'success' && successPhone_recipient == 'success') {
                payment_method.classList.remove('order-step');
                payment_method.children[1].classList.remove('d-none');

                recipient_information.classList.add('hideInfo')
            }


      })



      function checkInputsRecipient() {
        let fio_value = fio.value.trim(),
              email_value = email.value.trim(),
              phone_value = phone.value.trim();
        
        
            if(fio_value === '') {
            setErrorFor(fio, '1px solid #E47169')
            } else {
            setSuccesFor(fio)
            fio.parentElement.nextElementSibling.classList.add('success');
            fio.nextElementSibling.classList.add('successInp');
            }

            if(email_value === '') {
                setErrorFor(email, '1px solid #E47169')
            }
            else if(!isEmail(email_value)) {
                setErrorFor(email, '1px solid #E47169')
            }
            else {
                setSuccesFor(email)
                email.parentElement.nextElementSibling.classList.add('success');
                email.nextElementSibling.classList.add('successInp');
            }

            
            if(phone_value === '') {
                setErrorFor(phone, '1px solid #E47169')
            } else {
                setSuccesFor(phone)
                phone.parentElement.nextElementSibling.classList.add('success');
                phone.nextElementSibling.classList.add('successInp');
            }
        
    }

    function checkInputsOrganiz() {
        let organiz_value = organiz.value.trim(),
              inn_value = inn.value.trim(),
              kpp_value = kpp.value.trim();
        
        
           if(organization_check.checked == true) {
            if(organiz_value === '') {
                setErrorFor(organiz, '1px solid #E47169')
                } else {
                setSuccesFor(organiz)
                    organiz.parentElement.nextElementSibling.classList.add('success');
                    organiz.nextElementSibling.classList.add('successInp');
                }
    
                if(inn_value === '') {
                    setErrorFor(inn, '1px solid #E47169')
                    } else {
                    setSuccesFor(inn)
                    inn.parentElement.nextElementSibling.classList.add('success');
                    inn.nextElementSibling.classList.add('successInp');
                }
    
                if(kpp_value === '') {
                    setErrorFor(kpp, '1px solid #E47169')
                    } else {
                    setSuccesFor(kpp)
                    kpp.parentElement.nextElementSibling.classList.add('success');
                    kpp.nextElementSibling.classList.add('successInp');
                }
           }
        
    }

    function checkInputsRecip() {
        let fio_recipient_value = fio_recipient.value.trim(),
        phone_recipient_value = phone_recipient.value.trim();
        
        
           if(recipient_check.checked == true) {
            if(fio_recipient_value === '') {
                setErrorFor(fio_recipient, '1px solid #E47169')
                } else {
                setSuccesFor(fio_recipient)
                fio_recipient.parentElement.nextElementSibling.classList.add('success');
                fio_recipient.nextElementSibling.classList.add('successInp');
                }
    
                if(phone_recipient_value === '') {
                    setErrorFor(phone_recipient, '1px solid #E47169')
                    } else {
                    setSuccesFor(phone_recipient)
                    phone_recipient.parentElement.nextElementSibling.classList.add('success');
                    fio_recipient.nextElementSibling.classList.add('successInp');
                }
           }
        
    }



// Способ оплаты
const payment_method = document.querySelector('.payment-method'),
      payment = document.getElementById('payment'),
      loader = document.querySelector('.loader'),
      popUp_successfully = document.querySelector('.popUp-successfully'),
      payment_btn = document.querySelector('.payment-method .continue-btn');


      payment_btn.addEventListener('click', () => {
        checkInputsPayment();
        let successPayment = payment.parentElement.children[2].classList;

            if(successPayment == 'success') {
                loader.classList.remove('d-none')
                setTimeout(() => {
                    loader.classList.add('d-none')
                    popUp_successfully.classList.remove('d-none')
                }, 2000);
            }
      })



      function checkInputsPayment() {
        if(payment.checked == true) {
            payment.parentElement.children[2].classList.add('success');
        }
    }

// Адрес доставки
const delivery_address = document.querySelector('.delivery-address'),
    city = document.getElementById('city'),
    street = document.getElementById('street'),
    apartment = document.getElementById('apartment'),
    entrance = document.getElementById('entrance'),
    floor = document.getElementById('floor'),
    comment = document.getElementById('comment'),
    address_btn = document.querySelector('.delivery-address .continue-btn');


address_btn.addEventListener('click', () => {
  checkInputsAddress();
  let successCity = city.parentElement.nextElementSibling.classList,
      successStreet = street.parentElement.nextElementSibling.classList,
      successApartment = apartment.parentElement.nextElementSibling.classList,
      successEntrance = entrance.parentElement.nextElementSibling.classList,
      successFloor = floor.parentElement.nextElementSibling.classList,
      successComment = comment.parentElement.children[2].classList;

      if(successCity == 'success' && successStreet == 'success' && successApartment == 'success' && successEntrance == 'success' && successFloor == 'success' && successComment == 'success') {
        recipientInformation.classList.remove('order-step');
        recipientInformation.children[1].classList.remove('d-none');
        deliveryAddress.classList.add('hideInfo')
      }
})



function checkInputsAddress() {
    let city_value = city.value.trim(),
        street_value = street.value.trim(),
        apartment_value = apartment.value.trim(),
        entrance_value = entrance.value.trim(),
        floor_value = floor.value.trim(),
        comment_value = comment.value.trim();

    if(city_value === '') {
        setErrorFor(city, '1px solid #E47169')
        } else {
        setSuccesFor(city)
        city.parentElement.nextElementSibling.classList.add('success');
        city.nextElementSibling.classList.add('successInp');
    }
    if(street_value === '') {
        setErrorFor(street, '1px solid #E47169')
        } else {
        setSuccesFor(street)
        street.parentElement.nextElementSibling.classList.add('success');
        street.nextElementSibling.classList.add('successInp');
    }
    if(apartment_value === '') {
        setErrorFor(apartment, '1px solid #E47169')
        } else {
        setSuccesFor(apartment)
        apartment.parentElement.nextElementSibling.classList.add('success');
        apartment.nextElementSibling.classList.add('successInp');
    }
    if(entrance_value === '') {
        setErrorFor(entrance, '1px solid #E47169')
        } else {
        setSuccesFor(entrance)
        entrance.parentElement.nextElementSibling.classList.add('success');
        entrance.nextElementSibling.classList.add('successInp');
    }
    if(floor_value === '') {
        setErrorFor(floor, '1px solid #E47169')
        } else {
        setSuccesFor(floor)
        floor.parentElement.nextElementSibling.classList.add('success');
        floor.nextElementSibling.classList.add('successInp');
    }
    if(comment_value === '') {
        setErrorFor(comment, '1px solid #E47169')
        } else {
        setSuccesFor(comment)
        comment.parentElement.children[2].classList.add('success');
        comment.nextElementSibling.classList.add('successInp');
    }
}



// validate
      function setErrorFor(input, border) {
        input.style.border = border
        }
        
        function setSuccesFor(input) {
        input.style.border = `1px solid #30BC57`;
        } 
        
        function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }     
        
        
        // input mask
        $("#phone").inputmask({"mask": "+8(999) 999-99-99"});
        $("#phone-recipient").inputmask({"mask": "+8(999) 999-99-99"});


        const communication = document.querySelectorAll('.communication-list li');

        communication.forEach(list => {
          list.addEventListener('click', () => {
            list.parentElement.parentElement.previousElementSibling.children[0].children[1].textContent = list.textContent
          })
        });
