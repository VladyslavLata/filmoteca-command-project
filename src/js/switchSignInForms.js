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
const regUserMobileBtn = document.querySelector('.registration__button');

switchFormLinkLogin.addEventListener('click', onChangeLinkClick);
switchFormLinkSignUp.addEventListener('click', onChangeLinkClick);
closeBtn.addEventListener('click', onCloseModal);
loginCloseBtn.addEventListener('click', onCloseModal);
loginBtn.addEventListener('click', onLoginOpen);
signupBtn.addEventListener('click', onSignupOpen);
regUserMobileBtn.addEventListener('click', onLoginOpen);
signupOverlay.addEventListener('click', onCloseClickBackdrop);
loginOverlay.addEventListener('click', onCloseClickBackdrop);

function onChangeLinkClick(e) {
  e.preventDefault();
  loginOverlay.classList.toggle('log-in__overlay--hidden');
  signupOverlay.classList.toggle('sign-up__overlay--hidden');
}

function onCloseModal(e) {
  window.removeEventListener('keydown', onEscKeyPress);
  body.classList.remove('modal-open');
  loginOverlay.classList.add('log-in__overlay--hidden');
  signupOverlay.classList.add('sign-up__overlay--hidden');
}

function onLoginOpen(e) {
  window.addEventListener('keydown', onEscKeyPress);
  loginOverlay.classList.remove('log-in__overlay--hidden');
  body.classList.add('modal-open');
}

function onSignupOpen(e) {
  window.addEventListener('keydown', onEscKeyPress);
  signupOverlay.classList.remove('sign-up__overlay--hidden');
  body.classList.add('modal-open');
}

function onCloseClickBackdrop(e) {
  if (e.target == e.currentTarget) {
    body.classList.remove('modal-open');
    loginOverlay.classList.add('log-in__overlay--hidden');
    signupOverlay.classList.add('sign-up__overlay--hidden');
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
