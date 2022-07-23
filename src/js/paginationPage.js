import { Movie } from './fetchMovie';
import { fetchTrendAndMarkup, fetchSearchAndMarkup } from './fetchAndMarkup';
import { trendMovie } from './homePage';
import { keyword, keywordMovies } from './moviesKeyword';
import { handleButtonClick as goToStart } from './up-btnAndSwitcher';

import Loader from './loader';

const loader = new Loader();

const paginationContainer = document.querySelector('.pagination-container');
paginationContainer.addEventListener('click', onClickPagination);
console.log(paginationContainer);

// const refs = {
// btnLoadPrevious: document.querySelector('.pagination-page__btn-previous'),
// btnLoadNext: document.querySelector('.pagination-page__btn-next'),
// };

// refs.btnLoadPrevious.addEventListener('click', onClickPrevious);
// refs.btnLoadNext.addEventListener('click', onClickNext);
// refs.paginationList.addEventListener('click', onClickPagination);

// const { prev, numb, next } = {
//   prev: document.querySelector('.prev'),
//   numb: document.querySelectorAll('.numb'),
//   next: document.querySelector('.next'),
// };

// function makePagination(targetFetch) {
//   renderPagination(targetFetch);

//   numb.forEach(el => {
//     el.addEventListener('click', e => {
//       loader.enable('loader');
//       const selectedPage = e.target.textContent;
//       targetFetch.page = selectedPage;
//       onFetchAndMarkup(targetFetch);
//       makePagination(targetFetch);
//     });
//   });
//   if (prev) {
//     prev.addEventListener('click', () => {
//       targetFetch.page -= 1;
//       onFetchAndMarkup(targetFetch);
//       makePagination(targetFetch);
//     });
//   }
//   if (next) {
//     next.addEventListener('click', () => {
//       targetFetch.page += 1;
//       onFetchAndMarkup(targetFetch);
//       makePagination(targetFetch);
//     });
//   }
// }

function onClickPagination(evt) {
  const refs = {
    elPaginationList: document.querySelector('.pagination-list'),
  };

  const currentPage = refs.elPaginationList.dataset.current;
  const lastPage = refs.elPaginationList.dataset.last;

  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  const activePage = evt.target.dataset.page;

  if (activePage === currentPage) {
    return;
  }

  setPageNum(activePage);
  onFetchAndMarkup();
  goToStart();
}

// function onClickPrevious() {
//   loader.disable();
//   if (keyword === null ? trendMovie.page === 1 : keywordMovies.page === 1) {
//     loader.enable();
//     return;
//   }
//   setPagePrevious();
//   onFetchAndMarkup();
//   goToStart();
// }

// function onClickNext() {
//   if (
//     keyword === null
//       ? trendMovie.page === trendMovie.lastPage
//       : keywordMovies.page === keywordMovies.lastPage
//   ) {
//     return;
//   }
//   setPageNext();
//   onFetchAndMarkup();
//   goToStart();
// }

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
// function onClickPrevious() {
//   if (keyword === null) {
//     setPagePrevious(trendMovie);
//     fetchTrendAndMarkup(trendMovie);
//   } else {
//     setPagePrevious(keywordMovies);
//     fetchSearchAndMarkup(keywordMovies);
//   }
// }

// function onClickNext() {
//   if (keyword === null) {
//     setPageNext(trendMovie);
//     fetchTrendAndMarkup(trendMovie);
//   } else {
//     setPageNext(keywordMovies);
//     fetchSearchAndMarkup(keywordMovies);
//   }
// }

// function setPagePrevious(classIstance) {
//   if (classIstance.page === 1) {
//     return;
//   }
//   classIstance.page -= 1;
//   document
//     .querySelector('.scroll-area')
//     .scrollIntoView({ block: 'center', behavior: 'smooth' });
// }

// function setPageNext(classIstance) {
//   if (classIstance.page === classIstance.lastPage) {
//     return;
//   }
//   classIstance.page += 1;
//   document
//     .querySelector('.scroll-area')
//     .scrollIntoView({ block: 'center', behavior: 'smooth' });
