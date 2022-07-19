import { Movie } from './fetchMovie';
import {
  refs,
  setLanguageToLS,
  getLanguageFromLS,
  switchBtnLang,
} from './languageSwitch';

refs.btnSwitchEN.addEventListener('click', onClickEN);
refs.btnSwitchUA.addEventListener('click', onClickUA);

libraryStart();

function onClickEN() {
  setLanguageToLS(Movie.language.ENGLISH);
}

function onClickUA() {
  setLanguageToLS(Movie.language.UKRAINIAN);
}

function libraryStart() {
  const language = getLanguageFromLS();
  if (!language) {
    setLanguageToLS(Movie.language.ENGLISH);
  }
  switchBtnLang(language);
}
