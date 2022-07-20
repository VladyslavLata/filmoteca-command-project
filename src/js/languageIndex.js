import { Movie } from './fetchMovie';
import { fetchTrendAndMarkup, fetchSearchAndMarkup } from './fetchAndMarkup';
import { trendMovie } from './homePage';
import { keyword, keywordMovies } from './moviesKeyword';
import { refs, setLanguageToLS } from './languageSwitch';

refs.btnSwitchEN.addEventListener('click', onClickEN);
refs.btnSwitchUA.addEventListener('click', onClickUA);

function onClickEN() {
  if (keyword === null) {
    trendMovie.langCurrent = setLanguageToLS(Movie.language.ENGLISH);
    fetchTrendAndMarkup(trendMovie);
  } else {
    keywordMovies.langCurrent = setLanguageToLS(Movie.language.ENGLISH);
    fetchSearchAndMarkup(keywordMovies);
  }
}

function onClickUA() {
  if (keyword === null) {
    trendMovie.langCurrent = setLanguageToLS(Movie.language.UKRAINIAN);
    fetchTrendAndMarkup(trendMovie);
  } else {
    keywordMovies.langCurrent = setLanguageToLS(Movie.language.UKRAINIAN);
    fetchSearchAndMarkup(keywordMovies);
  }
}
