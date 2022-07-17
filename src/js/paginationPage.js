import { Movie } from './fetchMovie';
import { fetchTrendAndMarkup, fetchSearchAndMarkup } from './fetchAndMarkup';
import { trendMovie } from './homePage';
import { keyword, keywordMovies } from './moviesKeyword';
import {goToStart} from './up-btn'

const refs = {
  btnLoadPrevious: document.querySelector('.pagination-page__btn-previous'),
  btnLoadNext: document.querySelector('.pagination-page__btn-next'),
};

refs.btnLoadPrevious.addEventListener('click', onClickPrevious);
refs.btnLoadNext.addEventListener('click', onClickNext);

function onClickPrevious() {
  if (keyword === null) {
    setPagePrevious(trendMovie);
    fetchTrendAndMarkup(trendMovie);
  } else {
    setPagePrevious(keywordMovies);
    fetchSearchAndMarkup(keywordMovies);
  }
}

function onClickNext() {
  if (keyword === null) {
    setPageNext(trendMovie);
    fetchTrendAndMarkup(trendMovie);
  } else {
    setPageNext(keywordMovies);
    fetchSearchAndMarkup(keywordMovies);
  }
}

function setPagePrevious(classIstance) {
  if (classIstance.page === 1) {
    return;
  }
  classIstance.page -= 1;
  document.querySelector('.scroll-area').scrollIntoView({ block: "center", behavior: "smooth" });
}

function setPageNext(classIstance) {
  classIstance.page += 1;
  document.querySelector('.scroll-area').scrollIntoView({ block: "center", behavior: "smooth" });
}
