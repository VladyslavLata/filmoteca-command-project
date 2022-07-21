import { Movie } from './fetchMovie';
import { disabledEl, unlockEl } from './interfaceWork';

export const keyLS = {
  LS_LANGUAGE_KEY: 'themoviedb-current-language',
  LS_GENRE_KEY_EN: 'themoviedb-genre-EN',
  LS_GENRE_KEY_UA: 'themoviedb-genre-UA',
  LS_WATHED_EN_DATA_KEY: 'themovie-watched-EN-lib',
  LS_WATHED_UA_DATA_KEY: 'themovie-watched-UA-lib',
  LS_QUEUE_EN_DATA_KEY: 'themovie-queue-EN-lib',
  LS_QUEUE_UA_DATA_KEY: 'themovie-queue-UA-lib',
  LS_CURRENT_PAGE: 'themovie-current-page',
  VALUE_PAGE_INDEX: 'index',
  VALUE_PAGE_LIBRARY_W: 'library-watched',
  VALUE_PAGE_LIBRARY_Q: 'library-queue',
};
export const refs = {
  btnSwitchEN: document.querySelector('.switch-EN'),
  btnSwitchUA: document.querySelector('.switch-UA'),
};

export function setLanguageToLS(newLanguage) {
  localStorage.setItem(keyLS.LS_LANGUAGE_KEY, JSON.stringify(newLanguage));
  switchBtnLang(newLanguage);
  return newLanguage;
}

export function getLanguageFromLS() {
  return JSON.parse(localStorage.getItem(keyLS.LS_LANGUAGE_KEY));
}

export function setCurrentPageToLS(newPage) {
  localStorage.setItem(keyLS.LS_CURRENT_PAGE, JSON.stringify(newPage));
}

export function getCurrentPageFromLS() {
  return JSON.parse(localStorage.getItem(keyLS.LS_CURRENT_PAGE));
}

export function switchBtnLang(currentLang) {
  switch (currentLang) {
    case Movie.language.ENGLISH:
      disabledEl(refs.btnSwitchEN);
      unlockEl(refs.btnSwitchUA);
      break;

    case Movie.language.UKRAINIAN:
      disabledEl(refs.btnSwitchUA);
      unlockEl(refs.btnSwitchEN);
      break;
  }
}

export function noYearVariableLang(yearValue) {
  const currentLang = getLanguageFromLS();
  switch (currentLang) {
    case Movie.language.ENGLISH:
      return !yearValue ? 'No year' : parseInt(yearValue, 10);

    case Movie.language.UKRAINIAN:
      return !yearValue ? 'Немає року' : parseInt(yearValue, 10);
  }
  return parseInt(yearValue, 10);
}
