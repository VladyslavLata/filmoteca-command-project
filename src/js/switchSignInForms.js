const switchFormLinkLogin = document.querySelector('#switch-form__link-login');
const switchFormLinkSignUp = document.querySelector(
  '#switch-form__link-sign-up'
);
const closeBtn = document.querySelector('.close__button');
const loginCloseBtn = document.querySelector('.close-login__button');
const signupOverlay = document.querySelector('.sign-up__overlay');
const loginOverlay = document.querySelector('.log-in__overlay');
const loginBtn = document.querySelector('.login__button');
const signupBtn = document.querySelector('.signup__button');
const body = document.querySelector('body');

switchFormLinkLogin.addEventListener('click', onChangeLinkClick);
switchFormLinkSignUp.addEventListener('click', onChangeLinkClick);
closeBtn.addEventListener('click', onCloseModal);
loginCloseBtn.addEventListener('click', onCloseModal);
loginBtn.addEventListener('click', onLoginOpen);
signupBtn.addEventListener('click', onSignupOpen);

function onChangeLinkClick(e) {
  e.preventDefault();
  loginOverlay.classList.toggle('log-in__overlay--hidden');
  signupOverlay.classList.toggle('sign-up__overlay--hidden');
}

function onCloseModal(e) {
  loginOverlay.classList.add('log-in__overlay--hidden');
  signupOverlay.classList.add('sign-up__overlay--hidden');
}

function onLoginOpen(e) {
  loginOverlay.classList.remove('log-in__overlay--hidden');
  body.classList.add('modal-open');
}

function onSignupOpen(e) {
  signupOverlay.classList.remove('sign-up__overlay--hidden');
  body.classList.add('modal-open');
}
