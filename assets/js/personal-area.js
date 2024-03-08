
$(document).ready(function() {
  $('.tab-box').hide();
  $('.tab-box:first-child').show();
  $('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().parent().removeClass('showTabItem');

    let pageInfo = $(this).attr('data-personal');
    $('.tab-box').hide();
    $('.' + pageInfo).show();
  })
});

// input mask
$("#personal-phone").inputmask({"mask": "+7(999) 999-99-99"});

const profileBtn = document.querySelector('.profile_btn'),
      personalTabBtn = document.querySelector('.personal-area-tab .tab-left');

profileBtn.addEventListener('click', () => {
  personalTabBtn.classList.toggle('showTabItem')
});



const personal_name = document.getElementById('personal-name'),
personal_email = document.getElementById('personal-email'),
personal_phone = document.getElementById('personal-phone'),
personal_pass = document.getElementById('personal-pass'),
personal_pass_new = document.getElementById('personal-pass-new'),
personal_pass_return = document.getElementById('personal-pass-return'),
delivery_city = document.getElementById('delivery-city'),
delivery_address = document.getElementById('delivery-address'),
delivery_home = document.getElementById('delivery-home'),
form_save__btn = document.querySelector('.form-save__btn'),
save_new__address = document.querySelector('.save-new-address');


form_save__btn.addEventListener('click', () => {
  checkInputsFormPersonal()
  let successEmailPer = personal_email.parentElement.children[2].classList,
      successNamePer = personal_name.parentElement.children[2].classList,
      successPhonePer = personal_phone.parentElement.children[2].classList,
      successPassPer = personal_pass.parentElement.children[2].classList,
      successPassNewPer = personal_pass_new.parentElement.children[2].classList,
      successPassReturnPer = personal_pass_return.parentElement.children[2].classList;
  
  if(successEmailPer == 'success' && successNamePer == 'success' && successPhonePer == 'success' && successPassPer == 'success' && successPassNewPer == 'success' && successPassReturnPer == 'success') {
    form_save__btn.type = 'submit'  
    setTimeout(() => {
        window.location.reload()
    }, 1000);
  }
  });
  function checkInputsFormPersonal() {
  const per_emailValue = personal_email.value.trim(),
        per_nameValue = personal_name.value.trim(),
        per_phoneValue = personal_phone.value.trim(),
        per_passlValue = personal_pass.value.trim(),
        per_passNewValue = personal_pass_new.value.trim(),
        per_passRetValue = personal_pass_return.value.trim();
  
  
  if(per_nameValue === '') {
    setErrorFor(personal_name, '1px solid #E47169')
  } else {
    setSuccesFor(personal_name)
    personal_name.parentElement.children[2].classList.add('success')
  }
  
  if(per_phoneValue === '') {
    setErrorFor(personal_phone, '1px solid #E47169')
  } else {
    setSuccesFor(personal_phone)
    personal_phone.parentElement.children[2].classList.add('success')
  }
  
  if(per_emailValue === '') {
    setErrorFor(personal_email, '1px solid #E47169')
  }
  else if(!isEmail(per_emailValue)) {
    setErrorFor(personal_email, '1px solid #E47169')
  }
   else {
    setSuccesFor(personal_email)
    personal_email.parentElement.children[2].classList.add('success')
  }
  
  if(per_passlValue === '') {
    setErrorFor(personal_pass, '1px solid #E47169')
  } else {
    setSuccesFor(personal_pass)
    personal_pass.parentElement.children[2].classList.add('success')
  }
  
  if(per_passNewValue === '') {
    setErrorFor(personal_pass_new, '1px solid #E47169')
  } else {
    setSuccesFor(personal_pass_new)
    personal_pass_new.parentElement.children[2].classList.add('success')
  }
  if(per_passRetValue === '' || per_passRetValue != per_passNewValue) {
    setErrorFor(personal_pass_return, '1px solid #E47169')
  } else {
    setSuccesFor(personal_pass_return)
    personal_pass_return.parentElement.children[2].classList.add('success')
  }
  }



  save_new__address.addEventListener('click', () => {
    checkInputsPersonalLast()
    let successCity = delivery_city.parentElement.children[2].classList,
        successAdd = delivery_address.parentElement.children[2].classList,
        successHome = delivery_home.parentElement.children[2].classList;
    
    if(successCity == 'success' && successAdd == 'success' && successHome == 'success') {
      save_new__address.type = 'submit'  
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
    });
    // login
    function checkInputsPersonalLast() {
    const delivery_cityValue = delivery_city.value.trim(),
          delivery_addressValue = delivery_address.value.trim(),
          delivery_homeValue = delivery_home.value.trim();
    
    if(delivery_cityValue === '') {
      setErrorFor(delivery_city, '1px solid #E47169')
    }
     else {
      setSuccesFor(delivery_city)
      delivery_city.parentElement.children[2].classList.add('success')
    }
    
    if(delivery_addressValue === '') {
      setErrorFor(delivery_address, '1px solid #E47169')
    } else {
      setSuccesFor(delivery_address)
      delivery_address.parentElement.children[2].classList.add('success')
    }
    
    if(delivery_homeValue === '') {
      setErrorFor(delivery_home, '1px solid #E47169')
    } else {
      setSuccesFor(delivery_home)
      delivery_home.parentElement.children[2].classList.add('success')
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