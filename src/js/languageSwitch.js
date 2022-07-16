import { Movie } from './fetchMovie';
import { trendMovie, fetchAndMarkup } from './HomePageAndGenreFetch';
import { disabledEl, unlockEl } from './interfaceWork';

const LS_LANGUAGE_KEY = 'themoviedb-current-language';
const refs = {
  btnSwitchEN: document.querySelector('.switch-EN'),
  btnSwitchUA: document.querySelector('.switch-UA'),
};

refs.btnSwitchEN.addEventListener('click', onClickEN);
refs.btnSwitchUA.addEventListener('click', onClickUA);

function onClickEN() {
  workClassIstance = trendMovie;

  workClassIstance.langCurrent = setLanguageToLS(Movie.language.ENGLISH);
  fetchAndMarkup(workClassIstance);
}

function onClickUA() {
  workClassIstance = trendMovie;

  workClassIstance.langCurrent = setLanguageToLS(Movie.language.UKRAINIAN);
  fetchAndMarkup(workClassIstance);
}

export function setLanguageToLS(newLanguage) {
  localStorage.setItem(LS_LANGUAGE_KEY, JSON.stringify(newLanguage));
  switchBtnLang(newLanguage);
  return newLanguage;
}

export function getLanguageFromLS() {
  return JSON.parse(localStorage.getItem(LS_LANGUAGE_KEY));
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
