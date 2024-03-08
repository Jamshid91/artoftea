const sendAgainCount = document.querySelector('.send-again'),
      loginInBtn = document.querySelectorAll('.regis_btn'),
      regisBtn = document.querySelector('.form .regis'),
      loginIn = document.querySelector('.popUp-login .login-in'),
      loginRegis = document.querySelector('.popUp-login .login-regis'),
      popUpLogin = document.querySelector('.popUp-login'),
      showPass = document.querySelectorAll('.show_pass'),
      getLoginReg = document.querySelector('.login__btn'),
      forgotPass = document.querySelector('.forgot-pass'),
      loginCode = document.querySelector('.popUp-login .login-send-code');


loginInBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    popUpLogin.classList.remove('d-none');
    loginIn.classList.remove('d-none');
    loginRegis.classList.add('d-none');
    loginCode.classList.add('d-none');
});
});

regisBtn.addEventListener('click', () => {
  loginIn.classList.add('d-none');
  loginRegis.classList.remove('d-none');
});

getLoginReg.addEventListener('click', () => {
    loginIn.classList.remove('d-none');
    loginRegis.classList.add('d-none');
});

forgotPass.addEventListener('click', () => {
  loginIn.classList.add('d-none');
  loginRegis.classList.add('d-none');
  loginCode.classList.remove('d-none');
});





function startTime() {
    const timerFunc = (count) => {
      if (!count) {
        sendAgainCount.value = "Отправить ещё раз";
        sendAgainCount.disabled = false;
        // код после setInterval
      } else {
        sendAgainCount.value = "Отправить ещё раз - " + "(" + count + ")";
        setTimeout(timerFunc, 1000, --count);
      }
    }
    
    sendAgainCount.disabled = true;
    timerFunc(60);
  }
  startTime()

  sendAgainCount.addEventListener('click', () => {
    startTime()
  });



  const loginIn_pass = document.getElementById('login-in-pass'),
        loginIn_email = document.getElementById('login-in-email'),
        submitBtn_loginIn = document.querySelector('.login-in .submit__btn'),
        loginReg_pass = document.getElementById('login-regis-pass'),
        loginReg_email = document.getElementById('login-regis-email'),
        loginReg_name = document.getElementById('login-regis-name'),
        loginReg_phone = document.getElementById('login-regis-phone'),
        return_pass = document.getElementById('return-pass'),
        submitBtn_loginReg = document.querySelector('.login-regis .submit__btn');


// login in
submitBtn_loginIn.addEventListener('click', () => {
checkInputsForm()
let successEmail = loginIn_email.parentElement.children[2].classList,
    successPass = loginIn_pass.parentElement.children[2].classList;

if(successEmail == 'success' && successPass == 'success') {
  submitBtn_loginIn.type = 'submit'  
    setTimeout(() => {
        window.location.reload()
    }, 1000);
}
});
// login
function checkInputsForm() {
const loginIn_emailValue = loginIn_email.value.trim(),
      loginIn_passValue = loginIn_pass.value.trim();

if(loginIn_emailValue === '') {
  setErrorFor(loginIn_email, '1px solid #E47169')
}
 else {
  setSuccesFor(loginIn_email)
  loginIn_email.parentElement.children[2].classList.add('success')
}

if(loginIn_passValue === '') {
  setErrorFor(loginIn_pass, '1px solid #E47169')
} else {
  setSuccesFor(loginIn_pass)
  loginIn_pass.parentElement.children[2].classList.add('success')
}
}

// login regis
submitBtn_loginReg.addEventListener('click', () => {
    checkInputsFormReg()
    let successEmailReg = loginReg_email.parentElement.children[2].classList,
        successPassReg = loginReg_pass.parentElement.children[2].classList,
        successPassReturnReg = return_pass.parentElement.children[2].classList,
        successNameReg = loginReg_name.parentElement.children[2].classList,
        successPhoneReg = loginReg_phone.parentElement.children[2].classList;
    
    if(successEmailReg == 'success' && successPassReg == 'success' && successPassReturnReg == 'success' && successNameReg == 'success' && successPhoneReg == 'success') {
      submitBtn_loginIn.type = 'submit'  
      setTimeout(() => {
          window.location.reload()
      }, 1000);
    }
    });
    // login
    function checkInputsFormReg() {
    const loginReg_emailValue = loginReg_email.value.trim(),
          loginReg_passValue = loginReg_pass.value.trim(),
          loginReg_nameValue = loginReg_name.value.trim(),
          loginReg_phonelValue = loginReg_phone.value.trim(),
          loginReg_passRetValue = return_pass.value.trim();
    
    
    if(loginReg_nameValue === '') {
      setErrorFor(loginReg_name, '1px solid #E47169')
    } else {
      setSuccesFor(loginReg_name)
      loginReg_name.parentElement.children[2].classList.add('success')
    }
    
    if(loginReg_phonelValue === '') {
      setErrorFor(loginReg_phone, '1px solid #E47169')
    } else {
      setSuccesFor(loginReg_phone)
      loginReg_phone.parentElement.children[2].classList.add('success')
    }
    
    if(loginReg_emailValue === '') {
      setErrorFor(loginReg_email, '1px solid #E47169')
    }
    else if(!isEmail(loginReg_emailValue)) {
      setErrorFor(loginReg_email, '1px solid #E47169')
    }
     else {
      setSuccesFor(loginReg_email)
      loginReg_email.parentElement.children[2].classList.add('success')
    }
    
    if(loginReg_passValue === '') {
      setErrorFor(loginReg_pass, '1px solid #E47169')
    } else {
      setSuccesFor(loginReg_pass)
      loginReg_pass.parentElement.children[2].classList.add('success')
    }
    if(loginReg_passRetValue === '' || loginReg_passRetValue != loginReg_passValue) {
      setErrorFor(return_pass, '1px solid #E47169')
    } else {
      setSuccesFor(return_pass)
      return_pass.parentElement.children[2].classList.add('success')
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
$("#login-regis-phone").inputmask({"mask": "+7(999) 999-99-99"});


// view password
showPass.forEach(show => {
    show.addEventListener('click', () => {
      let elem = show.parentElement.children[1];
      if(elem.type === 'password') {
        elem.type = 'text';
        show.classList.add('showPass')
      } else {
        elem.type = 'password';
        show.classList.remove('showPass')
      }
    });
  });