const userName = document.getElementById('name'),
      city = document.getElementById('city'),
      address = document.getElementById('address'),
      apartment = document.getElementById('apartment'),
      phone = document.getElementById('phone'),
      userEmail = document.getElementById('email'),
      orderBtn = document.querySelector('.form-order__btn');



orderBtn.addEventListener('click', () => {
    checkOrderForm();
    let successName = userName.parentElement.children[2].classList,
    successCity = city.parentElement.children[2].classList,
    successAdd = address.parentElement.children[2].classList,
    successApart = apartment.parentElement.children[2].classList,
    successPhone = phone.parentElement.children[2].classList;
    successEmail = userEmail.parentElement.children[2].classList;

if(successName == 'success' && successCity == 'success' && successAdd == 'success' && successApart == 'success' && successPhone == 'success' && successEmail == 'success') {
    orderBtn.type = 'submit'  
  setTimeout(() => {
      window.location.reload()
  }, 1000);
}
});

function checkOrderForm() {
    const nameValue = userName.value.trim(),
          cityValue = city.value.trim(),
          addressValue = address.value.trim(),
          apartmentValue = apartment.value.trim(),
          phoneValue = phone.value.trim(),
          emailValue = userEmail.value.trim();
    
          if(emailValue === '') {
            setErrorFor(userEmail, '1px solid #E47169')
          }
          else if(!isEmail(emailValue)) {
            setErrorFor(userEmail, '1px solid #E47169')
          }
           else {
            setSuccesFor(userEmail)
            userEmail.parentElement.children[2].classList.add('success')
          }
    
    if(nameValue === '') {
      setErrorFor(userName, '1px solid #E47169')
    } else {
      setSuccesFor(userName)
      userName.parentElement.children[2].classList.add('success')
    }
    
    if(cityValue === '') {
      setErrorFor(city, '1px solid #E47169')
    } else {
      setSuccesFor(city)
      city.parentElement.children[2].classList.add('success')
    }
    
    if(addressValue === '') {
      setErrorFor(address, '1px solid #E47169')
    } else {
      setSuccesFor(address)
      address.parentElement.children[2].classList.add('success')
    }
    
    if(apartmentValue === '') {
      setErrorFor(apartment, '1px solid #E47169')
    } else {
      setSuccesFor(apartment)
      apartment.parentElement.children[2].classList.add('success')
    }
    
    if(phoneValue === '') {
      setErrorFor(phone, '1px solid #E47169')
    } else {
      setSuccesFor(phone)
      phone.parentElement.children[2].classList.add('success')
    }
}

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
    $("#phone").inputmask({"mask": "+7(999) 999-99-99"});