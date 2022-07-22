import { Movie } from './fetchMovie';
import { refs, setLanguageToLS } from './languageSwitch';
import {
  onClickENBtnMarkupFilms,
  onClickUABtnMarkupFilms,
} from './watchedMovies';

refs.btnSwitchEN.addEventListener('click', onClickEN);
refs.btnSwitchUA.addEventListener('click', onClickUA);

function onClickEN() {
  setLanguageToLS(Movie.language.ENGLISH);
  onClickENBtnMarkupFilms();
}

function onClickUA() {
  setLanguageToLS(Movie.language.UKRAINIAN);
  onClickUABtnMarkupFilms();
}
