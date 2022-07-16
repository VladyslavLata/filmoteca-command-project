import { Movie } from './fetchMovie';
import { trendMovie, fetchAndMarkup } from './HomePageAndGenreFetch';

const refs = {
  btnLoadPrevious: document.querySelector('.pagination-page__btn-previous'),
  btnLoadNext: document.querySelector('.pagination-page__btn-next'),
};

refs.btnLoadPrevious.addEventListener('click', onClickPrevious);
refs.btnLoadNext.addEventListener('click', onClickNext);

function onClickPrevious() {
  const workClassIstance = trendMovie;

  if (workClassIstance.page === 1) {
    return;
  }
  workClassIstance.page -= 1;
  fetchAndMarkup(workClassIstance);
}

function onClickNext() {
  const workClassIstance = trendMovie;

  workClassIstance.page += 1;
  fetchAndMarkup(workClassIstance);
}
