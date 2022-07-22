import { Movie } from './fetchMovie';

// import {
//   genreFind,
//   noYearVariableLang,
//   getLanguageFromLS,
//   keyLS,
// } from './genresAndYearFind';
import {
  keyLS,
  setLanguageToLS,
  getLanguageFromLS,
  switchBtnLang,
  setCurrentPageToLS,
  // noYearVariableLang,
} from './languageSwitch';
// import { genreFind } from './workWithGenres';
import { makeMarkupCard } from './cardMarkup';
// import Loader from './loader';

// const loader = new Loader();
// console.log(loader.refs.preloader);


// localStorage.setItem(keyLS.LS_WATHED_UA_DATA_KEY, JSON.stringify(filmLocal));
// localStorage.setItem(keyLS.LS_QUEUE_UA_DATA_KEY, JSON.stringify(filmLocalUA));

const mediaQueryMob = window.matchMedia('(max-width: 767px)');
const mediaQueryTab = window.matchMedia(
  '(min-width: 768px) and (max-width: 1279px)'
);
const mediaQueryDesk = window.matchMedia('(min-width: 1280px)');

const DESKTOP_FILMS = 9;
const TABLET_FILMS = 8;
const MOBILE_FILMS = 4;
export let currentTotalFilmsInPage = 9;
// let currentLangLibrary = Movie.language.ENGLISH;
// let currentLSWatchedFilms = keyLS.LS_WATHED_DATA_KEY;
let currentLangLibrary = getLanguageFromLS();
export let currentLSWatchedFilms = keyLS.LS_WATHED_EN_DATA_KEY;

const boxMainBbtnsEl = document.querySelector('.box-main-btnss');
const boxFirstBtnEl = document.querySelector('.first-box-btn');
const boxLastBtnEl = document.querySelector('.last-box-btn');
const btnArrowLeftEl = document.querySelector('.btn-arrow.left');
const btnArrowRightEl = document.querySelector('.btn-arrow.right');

const watchedMovieBtnEl = document.querySelector('.watched');
const queueMovieBtnEl = document.querySelector('.queue');
// const btnENEl = document.querySelector('.switch-EN');
// const btnUAEl = document.querySelector('.switch-UA');
const galleryEl = document.querySelector('.gallery');
let watchedFilms = null;
export let watchedFilmsLength = 0;
export let currentPage = 1;
export let totalPages = 0;

mediaQueryMob.addListener(handledChangeMobile);
mediaQueryTab.addListener(handledChangeTablet);
mediaQueryDesk.addListener(handledChangeDeskTop);
watchedMovieBtnEl.addEventListener('click', onClickWatchedBtnMarkupFilms);
queueMovieBtnEl.addEventListener('click', onClickQueueBtnMarkupFilms);

boxMainBbtnsEl.addEventListener('click', onClickBtnInMainBoxChangePage);
boxFirstBtnEl.addEventListener('click', onClickBtnInFirstBoxChangePage);
boxLastBtnEl.addEventListener('click', onClickBtnInLastBoxChangePage);

btnArrowLeftEl.addEventListener('click', onClickBtnArrowLeftChangePage);
btnArrowRightEl.addEventListener('click', onClickBtnArrowRightChangePage);
// btnENEl.addEventListener('click', onClickENBtnMarkupFilms);
// btnUAEl.addEventListener('click', onClickUABtnMarkupFilms);

// currentLangLibrary = getLanguageFromLS();
libraryStart();
getCurrentLSWatchedFilms();

handledChangeMobile(mediaQueryMob);
handledChangeTablet(mediaQueryTab);
handledChangeDeskTop(mediaQueryDesk);

function libraryStart() {
  if (!currentLangLibrary) {
    currentLangLibrary = setLanguageToLS(Movie.language.ENGLISH);
  }
  if (currentLangLibrary === Movie.language.UKRAINIAN) {
    currentLSWatchedFilms = keyLS.LS_WATHED_UA_DATA_KEY;
  }
  switchBtnLang(currentLangLibrary);
  setCurrentPageToLS(keyLS.VALUE_PAGE_LIBRARY_W);
}

export function onClickENBtnMarkupFilms() {
  currentLSWatchedFilms =
    currentLSWatchedFilms === keyLS.LS_WATHED_EN_DATA_KEY ||
    currentLSWatchedFilms === keyLS.LS_WATHED_UA_DATA_KEY
      ? keyLS.LS_WATHED_EN_DATA_KEY
      : keyLS.LS_QUEUE_EN_DATA_KEY;
  createMarkupFilms(currentLSWatchedFilms);
}

export function onClickUABtnMarkupFilms() {
  currentLSWatchedFilms =
    currentLSWatchedFilms === keyLS.LS_WATHED_EN_DATA_KEY ||
    currentLSWatchedFilms === keyLS.LS_WATHED_UA_DATA_KEY
      ? keyLS.LS_WATHED_UA_DATA_KEY
      : keyLS.LS_QUEUE_UA_DATA_KEY;
  createMarkupFilms(currentLSWatchedFilms);
}

// function onClickENBtnMarkupFilms() {
//   currentLSWatchedFilms =
//     currentLSWatchedFilms === 'WATHED_UA'
//       ? keyLS.LS_WATHED_DATA_KEY
//       : keyLS.LS_QUEUE_DATA_KEY;
//   createMarkupFilms(currentLSWatchedFilms);
// }

// function onClickUABtnMarkupFilms() {
//   currentLSWatchedFilms =
//     currentLSWatchedFilms === keyLS.LS_WATHED_DATA_KEY
//       ? 'WATHED_UA'
//       : 'QUEUE_UA';
//   createMarkupFilms(currentLSWatchedFilms);
// }

function onClickWatchedBtnMarkupFilms() {
  currentLangLibrary = getLanguageFromLS();
  getCurrentLSWatchedFilms();
  // clearGallery();
  currentPage = 1;
  createMarkupFilms(currentLSWatchedFilms);
  setCurrentPageToLS(keyLS.VALUE_PAGE_LIBRARY_W);
  watchedMovieBtnEl.classList.add('is-active');
  queueMovieBtnEl.classList.remove('is-active');
}

function onClickQueueBtnMarkupFilms() {
  currentLangLibrary = getLanguageFromLS();
  getCurrentLSQueueFilms();
  // clearGallery();
  currentPage = 1;
  createMarkupFilms(currentLSWatchedFilms);
  setCurrentPageToLS(keyLS.VALUE_PAGE_LIBRARY_Q);
  queueMovieBtnEl.classList.add('is-active');
  watchedMovieBtnEl.classList.remove('is-active');
}

function getCurrentLSWatchedFilms() {
  if (currentLangLibrary === Movie.language.ENGLISH) {
    currentLSWatchedFilms = keyLS.LS_WATHED_EN_DATA_KEY;
  } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
    currentLSWatchedFilms = keyLS.LS_WATHED_UA_DATA_KEY;
  }
}

function getCurrentLSQueueFilms() {
  if (currentLangLibrary === Movie.language.ENGLISH) {
    currentLSWatchedFilms = keyLS.LS_QUEUE_EN_DATA_KEY;
  } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
    currentLSWatchedFilms = keyLS.LS_QUEUE_UA_DATA_KEY;
  }
}

// function getCurrentLSWatchedFilms() {
//   if (currentLangLibrary === Movie.language.ENGLISH) {
//     currentLSWatchedFilms = keyLS.LS_WATHED_DATA_KEY;
//   } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
//     currentLSWatchedFilms = 'WATHED_UA';
//   }
// }

// function getCurrentLSQueueFilms() {
//   if (currentLangLibrary === Movie.language.ENGLISH) {
//     currentLSWatchedFilms = keyLS.LS_QUEUE_DATA_KEY;
//   } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
//     currentLSWatchedFilms = 'QUEUE_UA';
//   }
// }

export function createMarkupFilms(currentLSWatchedFilms) {
  watchedFilms = getWatchedFilmsLocalStorage(currentLSWatchedFilms);
  if (watchedFilms === null) {
    noFilmsMessage();
    return;
  } else if (watchedFilms === undefined) {
    return;
  } else if (watchedFilms) {
    watchedFilmsLength = watchedFilms.length;
        totalPages = getTotalPages(watchedFilmsLength, currentTotalFilmsInPage);
    makeMarkupBtns(totalPages);
    pickOutCurrentPage(currentPage);
    const filmsFormCurrentPage = watchedFilms.slice(
      (currentPage - 1) * currentTotalFilmsInPage,
      currentPage * currentTotalFilmsInPage
    );
    makeMarkupCard({ results: filmsFormCurrentPage });
  }
}

// function createMarkupFilms(currentLSWatchedFilms) {
//   watchedFilms = getWatchedFilmsLocalStorage(currentLSWatchedFilms);
//   if (watchedFilms === null) {
//     noFilmsMessage();
//     return;
//   } else if (watchedFilms === undefined) {
//     return;
//   } else if (watchedFilms) {
//     watchedFilmsLength = watchedFilms.length;
//     const filmsFormCurrentPage = watchedFilms.slice(
//       (currentPage - 1) * currentTotalFilmsInPage,
//       currentPage * currentTotalFilmsInPage
//     );
//     galleryEl.innerHTML = markupCards(filmsFormCurrentPage);
//   }
// }

function getWatchedFilmsLocalStorage(currentLSWatchedFilms) {
  try {
    const getWatchedFilms = localStorage.getItem(currentLSWatchedFilms);
    return getWatchedFilms === null ? null : JSON.parse(getWatchedFilms);
  } catch (error) {
    errorMessage();
    console.error('Get state error: ', error.message);
  }
}

// function markupCards(datas) {
//   return datas
//     .map(movieItem => {
//       return `<li class="card">
//           <a class="card__link" href=""  >
//             <img data-id="${movieItem.id}" class="card__img" src="${
//         movieItem.poster_path
//           ? Movie.IMG_PATH + movieItem.poster_path
//           : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
//       }" alt="${movieItem.title}" loading="lazy"/>
//       <div class="card__wrapper">
//             <p class="card__name">${movieItem.title.toUpperCase()}</p>
//             <p class="card__description">${genreFind(
//               movieItem.genre_ids
//             )} | ${noYearVariableLang(movieItem.release_date)}
//             <span class="card__vote">${
//               Math.round(movieItem.vote_average * 10) / 10
//             }</span>
//             </p>
//             </div>
//           </a>
//         </li>`;
//     })
//     .join('');
// }

function noFilmsMessage() {
  galleryEl.innerHTML =
    '<p class="message info animate__bounceInDown">Your watch films list is empty.</p>';
}

function errorMessage() {
  galleryEl.innerHTML =
    '<p class="message error animate__bounceInDown">Unknown error. Watched movies cannot be displayed.</p>';
}

function clearGallery() {
  galleryEl.innerHTML = '';
}

function handledChangeMobile(e) {
  if (e.matches) {
    currentTotalFilmsInPage = MOBILE_FILMS;
    // clearGallery();
    createMarkupFilms(currentLSWatchedFilms);
    //  totalPages = getTotalPages(watchedFilmsLength, currentTotalFilmsInPage);
    // makeMarkupBtns(totalPages);
  }
}

function handledChangeTablet(e) {
  if (e.matches) {
    currentTotalFilmsInPage = TABLET_FILMS;
    // clearGallery();
 
    createMarkupFilms(currentLSWatchedFilms);
     if (currentPage > totalPages) {
       currentPage = totalPages;
       createMarkupFilms(currentLSWatchedFilms);
    }
  
    //  totalPages = getTotalPages(watchedFilmsLength, currentTotalFilmsInPage);
    // makeMarkupBtns(totalPages);
  }
}

function handledChangeDeskTop(e) {
  if (e.matches) {
    currentTotalFilmsInPage = DESKTOP_FILMS;
   
    createMarkupFilms(currentLSWatchedFilms);
     if (currentPage > totalPages) {
       currentPage = totalPages;
         createMarkupFilms(currentLSWatchedFilms);
    }
    // totalPages = getTotalPages(watchedFilmsLength, currentTotalFilmsInPage);
    // makeMarkupBtns(totalPages);
  }
}








 function onClickBtnInMainBoxChangePage() {
    if (event.target.nodeName !== "BUTTON") { 
    return;  } 
  currentPage = Number(event.target.textContent);
  createMarkupFilms(currentLSWatchedFilms);
   pickOutCurrentPage(currentPage);
}

 function onClickBtnInFirstBoxChangePage() {
  if (event.target.nodeName !== "BUTTON") {
    return; } 
  currentPage = 1;
  createMarkupFilms(currentLSWatchedFilms);
pickOutCurrentPage(currentPage);
}

 function onClickBtnInLastBoxChangePage() {
  if (event.target.nodeName !== "BUTTON") { 
    return;  } 
  currentPage = Number(event.target.textContent);
  createMarkupFilms(currentLSWatchedFilms);
 pickOutCurrentPage(currentPage);
}

function onClickBtnArrowLeftChangePage() {
  if (currentPage === 1) {
    return;
  }
  currentPage -= 1;
   createMarkupFilms(currentLSWatchedFilms);
 pickOutCurrentPage(currentPage);
}

function onClickBtnArrowRightChangePage() {
  if (currentPage === totalPages) {
    return;
  }
  currentPage += 1;
   createMarkupFilms(currentLSWatchedFilms);
 pickOutCurrentPage(currentPage);
}

function markupBtn() {
  return `<button type="button" class="main-btn btn-pg"></button>`;
}

 function makeMarkupBtns(totalPages) {
  let markupBtns = '';
  let totalBtn = 0;
  if (totalPages <= 9) {
    boxFirstBtnEl.classList.add('btn-hidden');
    boxLastBtnEl.classList.add('btn-hidden');
    totalBtn = totalPages;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.textContent = i + 1;
    });
        return;
  }
  else if (totalPages > 9 && currentPage > 5 && currentPage <= (totalPages - 5)) {
    boxFirstBtnEl.classList.remove('btn-hidden');
    boxLastBtnEl.classList.remove('btn-hidden');
    totalBtn = 5;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
      [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.textContent = currentPage - 2 + i;
    });
    return ;
  } 
  else if (totalPages > 9 && currentPage <= 5 )  {
      boxFirstBtnEl.classList.add('btn-hidden');
      boxLastBtnEl.classList.remove('btn-hidden');
  
      totalBtn = 7;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
      [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.textContent = i + 1;
      });
    createNumberLastBtn();
    return ;
  }
  else if (totalPages > 9 && currentPage > (totalPages - 5)) {
    boxFirstBtnEl.classList.remove('btn-hidden');
    boxLastBtnEl.classList.add('btn-hidden');
         totalBtn = 7;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
      [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.textContent = totalPages - 6 + i;
    });
    return ;
  }
}

function addMarkupBtns(markupBtns) {
  boxMainBbtnsEl.innerHTML = markupBtns;
}

function createNumberLastBtn() {
  boxLastBtnEl.lastElementChild.textContent = totalPages;
}

function pickOutCurrentPage(currentPage) {
  [...boxMainBbtnsEl.children].find(el => {
    if (el.textContent === String(currentPage)) {
     el.classList.add('btn-current-pages')}
  });
}


function getTotalPages(watchedFilmsLength, currentTotalFilmsInPage) {
  return Math.ceil(watchedFilmsLength / currentTotalFilmsInPage);
}
