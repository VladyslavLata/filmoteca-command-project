import { Movie } from './fetchMovie';
import { fetchTrendAndMarkup } from './fetchAndMarkup';
import {
  keyLS,
  setLanguageToLS,
  getLanguageFromLS,
  switchBtnLang,
  setCurrentPageToLS,
} from './languageSwitch';
import { keyword } from './moviesKeyword';
import { switchBtnTrendTime } from './trendTime';
import Loader from './loader';

const loader = new Loader();
console.log(loader.refs.preloader);

export let trendMovie;

if (keyword === null) {
  startPageVisit();
}

function startPageVisit() {
  loader.refs.preloader.classList.remove('is-off');
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
  setCurrentPageToLS(keyLS.VALUE_PAGE_INDEX);
}
