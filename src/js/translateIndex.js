import { getLanguageFromLS } from './languageSwitch';
import { refs } from './languageSwitch';
import { refsTrendTime } from './trendTime';
import { Movie } from './fetchMovie';

export const refsTranslate = {
  linkHome: document.querySelector('.js-homeLink-text'),
  linkMyLibrary: document.querySelector('.js-myLibrary-text'),
  btnSignUp: document.querySelector('.js-signUp-text'),
  btnLogIn: document.querySelector('.js-logIn-text'),
  searchPlaceholder: document.querySelector('.search-form__input'),
};

const { linkHome, linkMyLibrary, btnSignUp, btnLogIn, searchPlaceholder } =
  refsTranslate;

export async function translatePage() {
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
    searchPlaceholder.placeholder = 'Movie search';
    refs.btnSwitchEN.textContent = 'en';
    refs.btnSwitchUA.textContent = 'ua';
    refsTrendTime.btnSwitchDay.textContent = 'day';
    refsTrendTime.btnSwitchWeek.textContent = 'week';
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
    searchPlaceholder.placeholder = 'Пошук фільму';
    refs.btnSwitchEN.textContent = 'англ';
    refs.btnSwitchUA.textContent = 'укр';
    refsTrendTime.btnSwitchDay.textContent = 'день';
    refsTrendTime.btnSwitchWeek.textContent = 'тиждень';
  }
}

translatePage();
