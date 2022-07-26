import { fetchTrendAndMarkup, fetchSearchAndMarkup } from './fetchAndMarkup';
import { trendMovie } from './homePage';
import { keyword, keywordMovies } from './moviesKeyword';
import { handleButtonClick as goToStart } from './up-btnAndSwitcher';

import Loader from './loader';

const loader = new Loader();

const paginationContainer = document.querySelector('.pagination-container');
paginationContainer.addEventListener('click', onClickPagination);

function onClickPagination(evt) {
  loader.enable('loader');
  const refs = {
    elPaginationList: document.querySelector('.pagination-list'),
  };

  const currentPage = refs.elPaginationList.dataset.current;
  const lastPage = refs.elPaginationList.dataset.last;
  let activePage = 1;

  if (evt.target.nodeName === 'BUTTON') {
    activePage = evt.target.dataset.page;
  } else {
    const dataPageEL = evt.target.closest('[data-page]');
    if (!dataPageEL) {
      return;
    }
    activePage = dataPageEL.dataset.page;
  }

  if (activePage === currentPage) {
    return;
  }

  setPageNum(activePage);
  onFetchAndMarkup();
  goToStart();
}

function setPageNum(numPage) {
  if (keyword === null) {
    trendMovie.page = numPage;
  } else {
    keywordMovies.page = numPage;
  }
}

function onFetchAndMarkup() {
  if (keyword === null) {
    fetchTrendAndMarkup(trendMovie);
  } else {
    fetchSearchAndMarkup(keywordMovies);
  }
}
