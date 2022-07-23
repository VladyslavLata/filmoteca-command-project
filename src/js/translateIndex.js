import { getLanguageFromLS } from './languageSwitch';
import { refs } from './languageSwitch';
import { refsTrendTime } from './trendTime';

const refsTranslate = {
  linkHome: document.querySelector('.js-homeLink-text'),
  linkMyLibrary: document.querySelector('.js-myLibrary-text'),
  btnSignUp: document.querySelector('.js-signUp-text'),
  btnLogIn: document.querySelector('.js-logIn-text'),
  searchPlaceholder: document.querySelector('.search-form__input'),
  textUpFirst: document.querySelector('.js-footer-text__up--first'),
  textUpSecond: document.querySelector('.js-footer-text__up--second'),
  textUpThird: document.querySelector('.js-footer-text__up--third'),
  textLink: document.querySelector('.js-footer-text__link')
};

const { linkHome, linkMyLibrary, btnSignUp, btnLogIn, searchPlaceholder, textUpFirst, textUpSecond, textUpThird, textLink } = refsTranslate;

export async function translatePage() {
  const lang = await getLanguageFromLS();

  if (lang === 'en-US') {
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
    textUpFirst.textContent = `All Rights Reserved`;
    textUpSecond.textContent = `Developed with`;
    textUpThird.textContent = `by`;
    textLink.textContent = `GoIT Students`;
  }

  if (lang === 'uk-UA') {
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
    textUpFirst.textContent = `Всі права захищені`;
    textUpSecond.textContent = `Зроблено з`;
    textUpThird.textContent = ``;
    textLink.textContent = `Студентами GoIT`;
  }
}

translatePage();