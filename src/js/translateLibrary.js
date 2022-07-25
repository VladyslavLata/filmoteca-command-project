import { getLanguageFromLS } from "./languageSwitch";
import { Movie } from './fetchMovie';
import { refs } from "./languageSwitch";
import {watchedMovieBtnEl, queueMovieBtnEl} from './watchedMovies'

const refsTranslateLibrary = {
  linkHome: document.querySelector('.js-homeLink-text'),
  linkMyLibrary: document.querySelector('.js-myLibrary-text'),
  btnSignUp: document.querySelector('.js-signUp-text'),
  btnLogIn: document.querySelector('.js-logIn-text'),
  notLoggedMessage: document.querySelector('.js-notLoggedMessage')
};


const { linkHome, linkMyLibrary, btnSignUp, btnLogIn, notLoggedMessage } = refsTranslateLibrary;

export async function translatePageLibrary() {
  const lang = await getLanguageFromLS();

  if (lang === Movie.language.ENGLISH) {
    linkHome.textContent = `Home`;
    linkMyLibrary.textContent = `My library`;
    btnSignUp.textContent = `Sign Up`;
    if (btnLogIn.textContent === 'Вхід') {
      btnLogIn.textContent = 'Log In';
    } else if (btnLogIn.textContent === 'Вихід') {
      btnLogIn.textContent = 'Log Out';
    }
    watchedMovieBtnEl.textContent = 'watched';
    queueMovieBtnEl.textContent = 'queue';
    refs.btnSwitchEN.textContent = 'en';
    refs.btnSwitchUA.textContent = 'ua';
    // notLoggedMessage.textContent = 'Here will be your films, after you log in :)';
  }

  if (lang === Movie.language.UKRAINIAN) {
    linkHome.textContent = `Головна`;
    linkMyLibrary.textContent = `Бібліотека`;
    btnSignUp.textContent = `Реєстрація`;
    if (btnLogIn.textContent === 'Log In') {
      btnLogIn.textContent = 'Вхід';
    } else if (btnLogIn.textContent === 'Log Out') {
      btnLogIn.textContent = 'Вихід';
    }
    watchedMovieBtnEl.textContent = 'Переглянуті';
    queueMovieBtnEl.textContent = 'До перегляду';
    refs.btnSwitchEN.textContent = 'англ';
    refs.btnSwitchUA.textContent = 'укр';
    notLoggedMessage.textContent = 'Тут будуть Ваші фільми після реєстрації :)';
  }
}

translatePageLibrary();
