import { Movie } from './fetchMovie';
import { genreFind, noYearVariableLang } from './genresAndYearFind'
// import { genreFind } from './workWithGenres';
// import {keyLS } from './languageSwitch';
// import {  getLanguageFromLS  } from './languageSwitch';
// import { genreFind } from './workWithGenres';
// import { noYearVariableLang } from './languageSwitch';


const filmLocal = [
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '1Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '',
    release_date: '',
    title: '2Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '3Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '4Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '5Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '6Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '7Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '8Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '9Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
  {
    adult: false,
    backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    genre_ids: [12, 28, 878],
    length: 3,
    id: 507086,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      'Культова франшиза продовжиться! Нова глава з життя динозаврів у ХХІ столітті. Давні ящери і сучасні люди намагаються співіснувати в одній екосистемі. Та час це призводить до фатальних наслідків.',
    popularity: 6252.796,
    poster_path: '/bm7TuFVqUBLZ2nPMiVm2zBYnNuL.jpg',
    release_date: '2022-06-01',
    title: '10Світ Юрського періоду 3: Домініон',
    video: false,
    vote_average: 6.877,
    vote_count: 1416,
  },
];

localStorage.setItem('FILM', JSON.stringify(filmLocal));

const mediaQueryMob = window.matchMedia('(max-width: 767px)');
const mediaQueryTab = window.matchMedia(
  '(min-width: 768px) and (max-width: 1279px)'
);
const mediaQueryDesk = window.matchMedia('(min-width: 1280px)');

const DESKTOP_FILMS = 9;
const TABLET_FILMS = 8;
const MOBILE_FILMS = 4;
let currentTotalFilmsInPage = 9;

const watchedMovieBtnEl = document.querySelector('.watched');
const galleryEl = document.querySelector('.gallery');
let watchedFilms = null;
let watchedFilmsLength = 0;
let currentPage = 1;

mediaQueryMob.addListener(handledChangeMobile);
mediaQueryTab.addListener(handledChangeTablet);
mediaQueryDesk.addListener(handledChangeDeskTop);
watchedMovieBtnEl.addEventListener('click', onClickWatchedBtnMarkupFilms);

handledChangeMobile(mediaQueryMob);
handledChangeTablet(mediaQueryTab);
handledChangeDeskTop(mediaQueryDesk);

function onClickWatchedBtnMarkupFilms() {
  clearGallery();
  createMarkupFilms();
}

function createMarkupFilms() {
  watchedFilms = getWatchedFilmsLocalStorage();
  console.log('2', watchedFilms);
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
    console.log(watchedFilmsLength);
    console.log(`log 3`, watchedFilms);
    galleryEl.innerHTML = markupCards(filmsFormCurrentPage);
  }
}

function getWatchedFilmsLocalStorage() {
  try {
    const getWatchedFilms = localStorage.getItem('FILM');
      return getWatchedFilms === null ? null : JSON.parse(getWatchedFilms);
  } catch (error) {
    errorMessage();
    console.error('Get state error: ', error.message);
  }
}

function markupCards(datas) {
  return datas
    .map(movieItem => {
      return `<li class="card">
          <a class="card__link" href="">
            <img data-id="${movieItem.id}" class="card__img" src="${
        movieItem.poster_path
          ? Movie.IMG_PATH + movieItem.poster_path
          : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
      }" alt="${movieItem.title}" />
            <p class="card__name">${movieItem.title.toUpperCase()}</p>
            <p class="card__description">
       ${genreFind(movieItem.genre_ids)}
      |${noYearVariableLang(movieItem.release_date)}
            <span class="card__vote">${
              Math.round(movieItem.vote_average * 10) / 10
            }</span>
            </p>
          </a>
        </li>`;
    })
    .join('');
}

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
    createMarkupFilms();
    console.log('Media Query M = ', e.matches);
  }
}

function handledChangeTablet(e) {
  if (e.matches) {
    currentTotalFilmsInPage = TABLET_FILMS;
    clearGallery();
    createMarkupFilms();
    console.log('Media Query T = ', e.matches);
  }
}

function handledChangeDeskTop(e) {
  if (e.matches) {
    currentTotalFilmsInPage = DESKTOP_FILMS;
    clearGallery();
    createMarkupFilms();
    console.log('Media Query D = ', e.matches);
  }
}


