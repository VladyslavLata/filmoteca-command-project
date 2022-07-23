import { Movie } from './fetchMovie';
import { fetchTrendAndMarkup, fetchSearchAndMarkup } from './fetchAndMarkup';
import { trendMovie } from './homePage';
import { keyword, keywordMovies } from './moviesKeyword';
import { refs, setLanguageToLS } from './languageSwitch';
import Loader from './loader';
import { renderFooter } from './footerTranslation';
import { translatePage } from './translateIndex';

const loader = new Loader();

refs.btnSwitchEN.addEventListener('click', onClickEN);
refs.btnSwitchUA.addEventListener('click', onClickUA);

function onClickEN() {
  loader.enable('loader');
  if (keyword === null) {
    trendMovie.langCurrent = setLanguageToLS(Movie.language.ENGLISH);
    fetchTrendAndMarkup(trendMovie);
  } else {
    keywordMovies.langCurrent = setLanguageToLS(Movie.language.ENGLISH);
    fetchSearchAndMarkup(keywordMovies);
  }
  translatePage();
  renderFooter();
}

function onClickUA() {
  loader.enable('loader');
  if (keyword === null) {
    trendMovie.langCurrent = setLanguageToLS(Movie.language.UKRAINIAN);
    fetchTrendAndMarkup(trendMovie);
  } else {
    keywordMovies.langCurrent = setLanguageToLS(Movie.language.UKRAINIAN);
    fetchSearchAndMarkup(keywordMovies);
  }
  translatePage();
  renderFooter();
}
