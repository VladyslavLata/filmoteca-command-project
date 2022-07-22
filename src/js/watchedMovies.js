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
  getCurrentPageFromLS,
} from './languageSwitch';
// import { genreFind } from './workWithGenres';
import { makeMarkupCard } from './cardMarkup';
import { modal } from './modal';
// import Loader from './loader';

modal.addEventListener('click', refreshLibraryOnClickBtnModal);
// const loader = new Loader();
// console.log(loader.refs.preloader);
// =======
// import Loader from './loader';

// const loader = new Loader();

// loader.enable('preloader');
// >>>>>>> bfecc52972b9ce995683c2b6c793f851334dce1a

// const filmLocal = [
//   {
//     adult: false,
//     backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
//     genre_ids: [12, 28, 878],
//     length: 3,
//     id: 507086,
//     media_type: 'movie',
//     original_language: 'en',
//     original_title: 'Jurassic World Dominion',
//     overview:
//       'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
//     popularity: 6252.796,
//     poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
//     release_date: '2022-06-01',
//     title: '1 WATHED_UA',
//     video: false,
//     vote_average: 6.877,
//     vote_count: 1416,
//   },
//   {
//     adult: false,
//     backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
//     genre_ids: [12, 28, 878],
//     length: 3,
//     id: 507086,
//     media_type: 'movie',
//     original_language: 'en',
//     original_title: 'Jurassic World Dominion',
//     overview:
//       'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
//     popularity: 6252.796,
//     poster_path: '',
//     release_date: '',
//     title: '2 WATHED_UA',
//     video: false,
//     vote_average: 6.877,
//     vote_count: 1416,
//   },
//   {
//     adult: false,
//     backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
//     genre_ids: [12, 28, 878],
//     length: 3,
//     id: 507086,
//     media_type: 'movie',
//     original_language: 'en',
//     original_title: 'Jurassic World Dominion',
//     overview:
//       'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
//     popularity: 6252.796,
//     poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
//     release_date: '2022-06-01',
//     title: '3 WATHED_UA',
//     video: false,
//     vote_average: 6.877,
//     vote_count: 1416,
//   },
// ];

// const filmLocalUA = [
//   {
//     adult: false,
//     backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
//     genre_ids: [12, 28, 878],
//     length: 3,
//     id: 507086,
//     media_type: 'movie',
//     original_language: 'en',
//     original_title: 'Jurassic World Dominion',
//     overview:
//       'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
//     popularity: 6252.796,
//     poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
//     release_date: '2022-06-01',
//     title: '1 QUEUE_UA',
//     video: false,
//     vote_average: 6.877,
//     vote_count: 1416,
//   },
//   {
//     adult: false,
//     backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
//     genre_ids: [12, 28, 878],
//     length: 3,
//     id: 507086,
//     media_type: 'movie',
//     original_language: 'en',
//     original_title: 'Jurassic World Dominion',
//     overview:
//       'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
//     popularity: 6252.796,
//     poster_path: '',
//     release_date: '',
//     title: '2 QUEUE_UA',
//     video: false,
//     vote_average: 6.877,
//     vote_count: 1416,
//   },
//   {
//     adult: false,
//     backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
//     genre_ids: [12, 28, 878],
//     length: 3,
//     id: 507086,
//     media_type: 'movie',
//     original_language: 'en',
//     original_title: 'Jurassic World Dominion',
//     overview:
//       'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
//     popularity: 6252.796,
//     poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
//     release_date: '2022-06-01',
//     title: '3 QUEUE_UA',
//     video: false,
//     vote_average: 6.877,
//     vote_count: 1416,
//   },
// ];

// localStorage.setItem('WATHED_UA', JSON.stringify(filmLocal));
// localStorage.setItem('QUEUE_UA', JSON.stringify(filmLocalUA));
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
let currentTotalFilmsInPage = 9;
// let currentLangLibrary = Movie.language.ENGLISH;
// let currentLSWatchedFilms = keyLS.LS_WATHED_DATA_KEY;
let currentLangLibrary = getLanguageFromLS();
let currentLSWatchedFilms = keyLS.LS_WATHED_EN_DATA_KEY;

const watchedMovieBtnEl = document.querySelector('.watched');
const queueMovieBtnEl = document.querySelector('.queue');
// const btnENEl = document.querySelector('.switch-EN');
// const btnUAEl = document.querySelector('.switch-UA');
const galleryEl = document.querySelector('.gallery');
let watchedFilms = null;
let watchedFilmsLength = 0;
let currentPage = 1;

mediaQueryMob.addListener(handledChangeMobile);
mediaQueryTab.addListener(handledChangeTablet);
mediaQueryDesk.addListener(handledChangeDeskTop);
watchedMovieBtnEl.addEventListener('click', onClickWatchedBtnMarkupFilms);
queueMovieBtnEl.addEventListener('click', onClickQueueBtnMarkupFilms);
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
  loader.enable('loader');
  currentLSWatchedFilms =
    currentLSWatchedFilms === keyLS.LS_WATHED_EN_DATA_KEY ||
    currentLSWatchedFilms === keyLS.LS_WATHED_UA_DATA_KEY
      ? keyLS.LS_WATHED_EN_DATA_KEY
      : keyLS.LS_QUEUE_EN_DATA_KEY;
  createMarkupFilms(currentLSWatchedFilms);
}

export function onClickUABtnMarkupFilms() {
  loader.enable('loader');
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
  loader.enable('loader');
  currentLangLibrary = getLanguageFromLS();
  getCurrentLSWatchedFilms();
  clearGallery();
  createMarkupFilms(currentLSWatchedFilms);
  setCurrentPageToLS(keyLS.VALUE_PAGE_LIBRARY_W);
  watchedMovieBtnEl.classList.add('is-active');
  queueMovieBtnEl.classList.remove('is-active');
}

function onClickQueueBtnMarkupFilms() {
  loader.enable('loader');
  currentLangLibrary = getLanguageFromLS();
  getCurrentLSQueueFilms();
  clearGallery();
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

function createMarkupFilms(currentLSWatchedFilms) {
  watchedFilms = getWatchedFilmsLocalStorage(currentLSWatchedFilms);
  if (watchedFilms === null) {
    noFilmsMessage();
    return;
  } else if (watchedFilms === undefined) {
    return;
  } else if (watchedFilms) {
    watchedFilmsLength = watchedFilms.length;
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
    '<p class="message">Your watch films list is empty.</p>';
}

function errorMessage() {
  galleryEl.innerHTML =
    '<p class="error">Unknown error. Watched movies cannot be displayed.</p>';
}

function clearGallery() {
  galleryEl.innerHTML = '';
}

function handledChangeMobile(e) {
  if (e.matches) {
    currentTotalFilmsInPage = MOBILE_FILMS;
    clearGallery();
    createMarkupFilms(currentLSWatchedFilms);
  }
}

function handledChangeTablet(e) {
  if (e.matches) {
    currentTotalFilmsInPage = TABLET_FILMS;
    clearGallery();
    createMarkupFilms(currentLSWatchedFilms);
  }
}

function handledChangeDeskTop(e) {
  if (e.matches) {
    currentTotalFilmsInPage = DESKTOP_FILMS;
    clearGallery();
    createMarkupFilms(currentLSWatchedFilms);
  }
}

function refreshLibraryOnClickBtnModal(evt) {
  const currentPage = getCurrentPageFromLS();
  if (evt.target.name === 'watched') {
    if (currentPage === keyLS.VALUE_PAGE_LIBRARY_W) {
      onClickWatchedBtnMarkupFilms();
    }
  }
  if (evt.target.name === 'queue') {
    if (currentPage === keyLS.VALUE_PAGE_LIBRARY_Q) {
      onClickQueueBtnMarkupFilms();
    }
  }
}
