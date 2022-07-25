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

export let trendMovie;

loader.enable('preloader');

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
  setCurrentPageToLS(keyLS.VALUE_PAGE_INDEX);
}

export function setOldTrendMovie(classIstance) {
  trendMovie = classIstance;
}
