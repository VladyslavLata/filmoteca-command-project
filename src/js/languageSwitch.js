import { Movie } from './fetchMovie';
import { disabledEl, unlockEl } from './interfaceWork';

export const keyLS = {
  LS_LANGUAGE_KEY: 'themoviedb-current-language',
  LS_GENRE_KEY_EN: 'themoviedb-genre-EN',
  LS_GENRE_KEY_UA: 'themoviedb-genre-UA',
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
