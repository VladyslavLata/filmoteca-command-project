import { Movie } from './fetchMovie';
import { genreFind } from './workWithGenres';
import { getCurrenDataFromLS, getDataFromLibraryLS } from './currentPageData';
import { LS_LOGIN_KEY } from './authAndLogIn';
// import { noYearVariableLang } from './languageSwitch';
import {
  keyLS,
  getLanguageFromLS,
  getCurrentPageFromLS,
} from './languageSwitch';

const body = document.querySelector('body');

// console.log('~ username', username);

const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal-info__container');
const modalWindow = document.querySelector('.modal');

let ID = 0;
let movieToAdd = {};
let movies = '';

gallery.addEventListener('click', onImageClick);
modalBtn.addEventListener('click', onCloseClick);
modal.addEventListener('click', onBtnClick);
backdrop.addEventListener('click', onCloseClick);

function onImageClick(e) {
  e.preventDefault();

  const currentPage = getCurrentPageFromLS();
  if (currentPage === keyLS.VALUE_PAGE_INDEX) {
    movies = getCurrenDataFromLS();
  } else {
    const currentLanguage = getLanguageFromLS();
    movies = getDataFromLibraryLS(currentLanguage);
  }

  ID = Number(e.target.dataset.id);

  movies.map(movie => {
    if (movie.id !== ID) {
      return;
    }
    modalMarkup(movie);
    movieToAdd = movie;
  });

  if (e.target !== e.currentTarget) {
    body.classList.add('modal-open');
    backdrop.classList.remove('is-hidden');
  }
}

// function onCloseClickBackdrop(e) {
//   if (e.target === e.currentTarget) {
//     body.classList.remove('modal-open');
//     backdrop.classList.add('is-hidden');
//   }
// }

function onCloseClick(e) {
  if (!modalWindow.contains(e.target) || modalBtn.contains(e.target)) {
    body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
  }
  // body.classList.remove('modal-open');
  // backdrop.classList.add('is-hidden');
}

function modalMarkup({
  poster_path,
  title,
  original_title,
  genre_ids,
  overview,
  vote_count,
  vote_average,
  popularity,
}) {
  const makeMarkupModal = `
      <img src="${
        poster_path
          ? Movie.IMG_PATH + poster_path
          : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
      }" alt="${title}" class="modal-info__img">
      <div class="modal-info">
          <h2 class="modal-info__movie-name">${title.toUpperCase()}</h2>
          <table class="modal-info__list" >
              <tr class="modal-info__item">
                <th class="modal-info__title">Vote / Votes</th>
                <th class="modal-info__content"><span class="modal-info__content-color"> ${
                  Math.round(vote_average * 10) / 10
                } </span> / <span class="modal-info__content-color modal-info__content-color--votes">${vote_count}</span></th>
              </tr>
              <tr class="modal-info__item">
                <td class="modal-info__title">Popularity</td>
                <td class="modal-info__content">${popularity.toFixed(1)}
                </td>
              </tr>
              <tr class="modal-info__item">
                <td class="modal-info__title">Original Title</td>
                <td class="modal-info__content modal-info__content--text">${original_title.toUpperCase()}</td>
              </tr>
              <tr class="modal-info__item">
                <td class="modal-info__title">Genre</td>
                <td class="modal-info__content">${genreFind(genre_ids)}</td>
              </tr>
              </table>            
                  <p class="modal-info__article-title">About</p>
                  <p class="modal-info__article">${overview}</p>
                  <div class="container-btn">
            <button type="button" class="btn" name="watched">add to watched</button>
            <button type="button" class="btn" name="queue">add to queue</button>
        </div>`;
  return (modal.innerHTML = makeMarkupModal);
}

// let watchedArr = [];
// let queueArr = [];
let watchedArrCurrentLang = [];
let watchedArrAltLang = [];
let queueArrCurrentLang = [];
let queueArrAltLang = [];

// const LS_WATHED_DATA_KEY = 'themovie-watched-lib';
// const LS_QUEUE_DATA_KEY = 'themovie-queue-lib';

async function onBtnClick(evt) {
  const username = await localStorage.getItem(LS_LOGIN_KEY);
  const usernameSS = await sessionStorage.getItem(LS_LOGIN_KEY);
  if (evt.target.name === 'watched') {
    if ((username !== '' && username) || (usernameSS !== '' && usernameSS)) {
      addToWatched();
    } else {
      alert(
        'If you want to add movie to "Watched" then you have to log in first.'
      );
    }
  }
  if (evt.target.name === 'queue') {
    if ((username !== '' && username) || (usernameSS !== '' && usernameSS)) {
      addToQueue();
    } else {
      alert(
        'If you want to add movie to "Queue" then you have to log in first.'
      );
    }
  }
}

async function addToWatched() {
  const currentLanguage = getLanguageFromLS();
  let dataCurrentKey = keyLS.LS_WATHED_EN_DATA_KEY;
  let dataAltKey = keyLS.LS_WATHED_UA_DATA_KEY;
  let altLang = Movie.language.UKRAINIAN;

  if (currentLanguage === Movie.language.UKRAINIAN) {
    dataCurrentKey = keyLS.LS_WATHED_UA_DATA_KEY;
    dataAltKey = keyLS.LS_WATHED_EN_DATA_KEY;
    altLang = Movie.language.ENGLISH;
  } else {
    dataCurrentKey = keyLS.LS_WATHED_EN_DATA_KEY;
    dataAltKey = keyLS.LS_WATHED_UA_DATA_KEY;
    altLang = Movie.language.UKRAINIAN;
  }

  watchedArrCurrentLang =
    JSON.parse(localStorage.getItem(dataCurrentKey)) || [];
  watchedArrAltLang = JSON.parse(localStorage.getItem(dataAltKey)) || [];
  const watchedArrId = [];

  watchedArrCurrentLang.map(mov => {
    return watchedArrId.push(mov.id);
  });

  if (watchedArrId.includes(ID)) {
    return;
  }
  watchedArrCurrentLang.push(filtrCurrentData(movieToAdd));
  localStorage.setItem(dataCurrentKey, JSON.stringify(watchedArrCurrentLang));

  const altLangData = await fetchAltLangByID(ID, altLang);
  watchedArrAltLang.push(altLangData);
  localStorage.setItem(dataAltKey, JSON.stringify(watchedArrAltLang));
}

async function addToQueue() {
  const currentLanguage = getLanguageFromLS();
  let dataCurrentKey = keyLS.LS_QUEUE_EN_DATA_KEY;
  let dataAltKey = keyLS.LS_QUEUE_UA_DATA_KEY;
  let altLang = Movie.language.UKRAINIAN;

  if (currentLanguage === Movie.language.UKRAINIAN) {
    dataCurrentKey = keyLS.LS_QUEUE_UA_DATA_KEY;
    dataAltKey = keyLS.LS_QUEUE_EN_DATA_KEY;
    altLang = Movie.language.ENGLISH;
  } else {
    dataCurrentKey = keyLS.LS_QUEUE_EN_DATA_KEY;
    dataAltKey = keyLS.LS_QUEUE_UA_DATA_KEY;
    altLang = Movie.language.UKRAINIAN;
  }

  queueArrCurrentLang = JSON.parse(localStorage.getItem(dataCurrentKey)) || [];
  queueArrAltLang = JSON.parse(localStorage.getItem(dataAltKey)) || [];
  const queueArrId = [];
  queueArrCurrentLang.map(mov => {
    return queueArrId.push(mov.id);
  });

  if (queueArrId.includes(ID)) {
    return;
  }
  queueArrCurrentLang.push(filtrCurrentData(movieToAdd));
  localStorage.setItem(dataCurrentKey, JSON.stringify(queueArrCurrentLang));
  console.log('queue:  ' + queueArrId);

  const altLangData = await fetchAltLangByID(ID, altLang);
  queueArrAltLang.push(altLangData);
  localStorage.setItem(dataAltKey, JSON.stringify(queueArrAltLang));
}

async function fetchAltLangByID(movieID, language) {
  try {
    const movieByID = new Movie();
    movieByID.langCurrent = language;
    const data = await movieByID.fetchById(movieID);
    return filtrAltData(data);
  } catch (error) {
    console.log(error);
  }
}

function filtrCurrentData({
  id,
  poster_path,
  title,
  original_title,
  genre_ids,
  overview,
  vote_count,
  vote_average,
  popularity,
  release_date,
}) {
  return {
    id,
    poster_path,
    title,
    original_title,
    genre_ids,
    overview,
    vote_count,
    vote_average,
    popularity,
    release_date,
  };
}

function filtrAltData({
  id,
  poster_path,
  title,
  original_title,
  genres,
  overview,
  vote_count,
  vote_average,
  popularity,
  release_date,
}) {
  const genre_ids = [];
  genres.map(item => {
    genre_ids.push(item.id);
  });
  return {
    id,
    poster_path,
    title,
    original_title,
    genre_ids,
    overview,
    vote_count,
    vote_average,
    popularity,
    release_date,
  };
}

// const addToWatched = () => {
//   watchedArr = JSON.parse(localStorage.getItem(LS_WATHED_DATA_KEY)) || [];
//   const watchedArrId = [];

//   watchedArr.map(mov => {
//     return watchedArrId.push(mov.id);
//   });

//   if (watchedArrId.includes(ID)) {
//     return;
//   }
//   watchedArr.push(movieToAdd);
//   localStorage.setItem(LS_WATHED_DATA_KEY, JSON.stringify(watchedArr));
//   console.log('watched:  ' + watchedArrId);
// };

// const addToQueue = () => {
//   queueArr = JSON.parse(localStorage.getItem(LS_QUEUE_DATA_KEY)) || [];
//   const queueArrId = [];
//   queueArr.map(mov => {
//     return queueArrId.push(mov.id);
//   });

//   if (queueArrId.includes(ID)) {
//     console.log('есть уже');
//     return;
//   }
//   queueArr.push(movieToAdd);
//   localStorage.setItem(LS_QUEUE_DATA_KEY, JSON.stringify(queueArr));
//   console.log('queue:  ' + queueArrId);
// };
