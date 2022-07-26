import { getLanguageFromLS } from './languageSwitch';
import { Movie } from './fetchMovie';
import { LS_LOGIN_KEY } from './authAndLogIn';

const username = localStorage.getItem(LS_LOGIN_KEY);

const refs = {
  signupTitle: document.querySelector('.sign-up__title'),
  liginTitle: document.querySelector('.login__title'),
  ligoutTitle: document.querySelector('.logout__title'),
  loginUsername: document.querySelector('#login-username'),
  loginEmail: document.querySelector('#login-email'),
  loginPassword: document.querySelector('#login-password'),
  signupEmail: document.querySelector('#signup-email'),
  signupPassword: document.querySelector('#signup-password'),
  loginBtn: document.querySelector('#login__button'),
  loginHeaderBtn: document.querySelector('.login__button--form'),
  logoutButton: document.querySelector('.logout__button--form'),
  liginLink: document.querySelector('.login__link'),
  signupLink: document.querySelector('.sign-up__link'),
  signupBtn: document.querySelector('#signup__button'),
  signupBtnHeader: document.querySelector('.signup__button'),
  logoutBtn: document.querySelector('#logout__button'),
  logoutText: document.querySelector('.logout-modal__text'),
  logoutModal: document.querySelector('.logout-modal'),
};

export async function translateAuthForms() {
  const lang = await getLanguageFromLS();
  if (lang === Movie.language.ENGLISH) {
    refs.signupTitle.textContent = 'Sign Up';
    refs.signupEmail.placeholder = 'Email';
    refs.signupPassword.placeholder = 'Password';
    refs.signupBtn.textContent = 'Sign Up';
    refs.signupLink.textContent = 'Already have an account?';
    //   -------LOGIN-------
    refs.liginTitle.textContent = 'Log In';
    refs.loginUsername.placeholder = 'Username';
    refs.loginEmail.placeholder = 'Email';
    refs.loginPassword.placeholder = 'Password';
    refs.loginHeaderBtn.textContent = 'Log In';
    refs.liginLink.textContent = 'Want to create a new account?';
    //   -------LOGOUT-------
    refs.ligoutTitle.textContent = 'Log Out';
    refs.logoutText.textContent = `You are logged in as ${username}`;
    refs.logoutButton.textContent = 'Log Out';
  }

  if (lang === Movie.language.UKRAINIAN) {
    refs.signupTitle.textContent = 'Реєстрація';
    refs.signupEmail.placeholder = 'Пошта';
    refs.signupPassword.placeholder = 'Пароль';
    refs.signupBtn.textContent = 'Реєстрація';
    refs.signupLink.textContent = 'Вже є обліковий запис?';
    //   -------LOGIN-------
    refs.liginTitle.textContent = 'Вхід';
    refs.loginUsername.placeholder = "Ім'я користувача";
    refs.loginEmail.placeholder = 'Пошта';
    refs.loginPassword.placeholder = 'Пароль';
    refs.loginHeaderBtn.textContent = 'Вхід';
    refs.liginLink.textContent = 'Створити новий обліковий запис?';
    //   -------LOGOUT-------
    refs.ligoutTitle.textContent = 'Вихід';
    refs.logoutText.textContent = `Ви увійшли як ${username}`;
    refs.logoutButton.textContent = `Вихід`;
  }
}
translateAuthForms();
