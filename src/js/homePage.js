import { Movie } from './fetchMovie';
import { fetchTrendAndMarkup } from './fetchAndMarkup';
import {
  setLanguageToLS,
  getLanguageFromLS,
  switchBtnLang,
} from './languageSwitch';
import { keyword } from './moviesKeyword';
import { switchBtnTrendTime } from './trendTime';
import renderPagination from './renderPagination.js';

export let trendMovie;


if (keyword === null) {
  startPageVisit();
}

function startPageVisit() {
  trendMovie = new Movie();
  const language = getLanguageFromLS();
  if (!language) {
    trendMovie.langCurrent = setLanguageToLS(Movie.language.ENGLISH);
  } else {
    trendMovie.langCurrent = language;
    switchBtnLang(trendMovie.langCurrent);
  }
  fetchTrendAndMarkup(trendMovie);
  switchBtnTrendTime(Movie.trendTime.DAY);
}
