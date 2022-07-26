import Swal from 'sweetalert2';
import { Movie } from './fetchMovie';
import { genreFindForModal } from './workWithGenres';
import { getCurrenDataFromLS, getDataFromLibraryLS } from './currentPageData';
import { LS_LOGIN_KEY } from './authAndLogIn';
import { updateUserData } from './authAndLogIn';
import {
  keyLS,
  getLanguageFromLS,
  getCurrentPageFromLS,
} from './languageSwitch';
import { Movie } from './fetchMovie';
import { async } from '@firebase/util';
// import { unlockEl } from './interfaceWork';

const btnText = {
  WATCHED_DEL_EN: 'remove from watched',
  WATCHED_ADD_EN: 'add to watched',
  QUEUE_DEL_EN: 'remove from queue',
  QUEUE_ADD_EN: 'add to queue',
  WATCHED_DEL_UA: 'видалити з переглянутого',
  WATCHED_ADD_UA: 'додати до переглянутого',
  QUEUE_DEL_UA: 'видалити з черги',
  QUEUE_ADD_UA: 'додати до черги',
};

const textInfoTitle = {
  VOTE_EN: 'Vote / Votes',
  POPULARITY_EN: 'Popularity',
  ORIGINAL_TITLE_EN: 'Original Title',
  GENRE_EN: 'Genre',
  ABOUT_EN: 'About',
  OVERVIEW_EN: 'No information',
  VOTE_UA: 'Оцінка / Голосували',
  POPULARITY_UA: 'Популярність',
  ORIGINAL_TITLE_UA: 'Оригінальна назва',
  GENRE_UA: 'Жанр',
  ABOUT_UA: 'Опис',
  OVERVIEW_UA: 'Опис відсутній',
};

const dataActionKey = {
  DEL: 'del',
  ADD: 'add',
};

export const btnNameKey = {
  WATCHED: 'watched',
  QUEUE: 'queue',
};

const body = document.querySelector('body');

// console.log('~ username', username);

const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal__button');
export const modal = document.querySelector('.modal-info__container');
// const modalWindow = document.querySelector('.modal');

let ID = 0;
let movieToAdd = {};
let movies = '';
let watchedBtn = '';
let queueBtn = '';
let watchedDataAttr = dataActionKey.ADD;
let queueDataAttr = dataActionKey.ADD;
const currentInfoTitle = {
  VOTE: textInfoTitle.VOTE_EN,
  POPULARITY: textInfoTitle.POPULARITY_EN,
  ORIGINAL_TITLE: textInfoTitle.ORIGINAL_TITLE_EN,
  GENRE: textInfoTitle.GENRE_EN,
  ABOUT: textInfoTitle.ABOUT_EN,
  OVERVIEW: textInfoTitle.ABOUT_EN,
};

gallery.addEventListener('click', onImageClick);
modalBtn.addEventListener('click', onCloseClick);
modal.addEventListener('click', onBtnClick);
backdrop.addEventListener('click', onCloseClickBackdrop);

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
    buttonTextContent(ID);
    modalTextInfoTitle();
    modalMarkup(movie);

    movieToAdd = movie;
  });

  if (e.target !== e.currentTarget) {
    window.addEventListener('keydown', onEscKeyPress);
    body.classList.add('modal-open');
    backdrop.classList.remove('is-hidden');
  }
}

function onCloseClickBackdrop(e) {
  if (e.target == e.currentTarget) {
    body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
  }
}

function onCloseClick(e) {
  window.removeEventListener('keydown', onEscKeyPress);
  body.classList.remove('modal-open');
  backdrop.classList.add('is-hidden');
}

function onEscKeyPress(e) {
  // console.log(e);
  // console.log(e.code);
  if (e.code === 'Escape') {
    onCloseClick();
  }
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
  backdrop.style.background = `linear-gradient(#0000004d, #000000b3), url(${
    poster_path
      ? Movie.IMG_PATH + poster_path
      : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
  })`;
  backdrop.style.backgroundRepeat = 'no-repeat';
  backdrop.style.backgroundSize = 'cover';
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
                <th class="modal-info__title">${currentInfoTitle.VOTE}</th>
                <th class="modal-info__content"><span class="modal-info__content-color"> ${
                  Math.round(vote_average * 10) / 10
                } </span> / <span class="modal-info__content-color modal-info__content-color--votes">${vote_count}</span></th>
              </tr>
              <tr class="modal-info__item">
                <td class="modal-info__title">${
                  currentInfoTitle.POPULARITY
                }</td>
                <td class="modal-info__content">${popularity.toFixed(1)}
                </td>
              </tr>
              <tr class="modal-info__item">
                <td class="modal-info__title">${
                  currentInfoTitle.ORIGINAL_TITLE
                }</td>
                <td class="modal-info__content modal-info__content--text">${original_title.toUpperCase()}</td>
              </tr>
              <tr class="modal-info__item">
                <td class="modal-info__title">${currentInfoTitle.GENRE}</td>
                <td class="modal-info__content">${genreFindForModal(
                  genre_ids
                )}</td>
              </tr>
              </table>            
                  <p class="modal-info__article-title">${
                    currentInfoTitle.ABOUT
                  }</p>
                  <p class="modal-info__article">${
                    overview || currentInfoTitle.OVERVIEW
                  }</p>
                  <div class="container-btn">
            <button type="button" class="btn" name="${
              btnNameKey.WATCHED
            }" data-action="${watchedDataAttr}">${watchedBtn}</button>
            <button type="button" class="btn" name="${
              btnNameKey.QUEUE
            }" data-action="${queueDataAttr}">${queueBtn}</button>
        </div>`;
  return (modal.innerHTML = makeMarkupModal);
}

let watchedArrCurrentLang = [];
let watchedArrAltLang = [];
let queueArrCurrentLang = [];
let queueArrAltLang = [];

// const LS_WATHED_DATA_KEY = 'themovie-watched-lib';
// const LS_QUEUE_DATA_KEY = 'themovie-queue-lib';
export const username = localStorage.getItem(LS_LOGIN_KEY);
export const usernameSS = sessionStorage.getItem(LS_LOGIN_KEY);

async function onBtnClick(evt) {
  const username = localStorage.getItem(LS_LOGIN_KEY);
  const usernameSS = sessionStorage.getItem(LS_LOGIN_KEY);
  if (evt.target.name === 'watched') {
    if ((username !== '' && username) || (usernameSS !== '' && usernameSS)) {
      await addToWatched(evt);
      const UID = localStorage.getItem('UID');
      updateUserData(UID);
    } else {
      notLoggedInWatchedMessage();
    }
  }
  if (evt.target.name === btnNameKey.QUEUE) {
    if ((username !== '' && username) || (usernameSS !== '' && usernameSS)) {
      const UID = localStorage.getItem('UID');
      await addToQueue(evt);
      updateUserData(UID);
    } else {
      notLoggedInQueueMessage();
    }
  }
}

async function notLoggedInWatchedMessage() {
  const lang = await getLanguageFromLS();
  if (lang === Movie.language.ENGLISH) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Warning!',
      text: 'If you want to add movie to "Watched" then you have to log in first.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Warning!',
        text: 'If you want to add movie to "Watched" then you have to log in first.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }
  if (lang === Movie.language.UKRAINIAN) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Ой!',
      text: 'Для того, щоб додати фільм до переглянутих, Ви маєте увійти у свій обліковий запис.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Ой!',
        text: 'Для того, щоб додати фільм до переглянутих, Ви маєте увійти у свій обліковий запис.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }
}

async function notLoggedInQueueMessage() {
  const lang = await getLanguageFromLS();
  if (lang === Movie.language.ENGLISH) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Warning!',
      text: 'If you want to add movie to "Queue" then you have to log in first.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Warning!',
        text: 'If you want to add movie to "Queue" then you have to log in first.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }
  if (lang === Movie.language.UKRAINIAN) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Ой!',
      text: 'Для того, щоб додати фільм до перегляду, Ви маєте увійти у свій обліковий запис.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Ой!',
        text: 'Для того, щоб додати фільм до перегляду, Ви маєте увійти у свій обліковий запис.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }
}

function buttonTextContent(currentID) {
  const currentLanguage = getLanguageFromLS();
  const isUA = currentLanguage === Movie.language.UKRAINIAN;
  const watchedArr =
    JSON.parse(localStorage.getItem(keyLS.LS_WATHED_EN_DATA_KEY)) || [];
  const queueArr =
    JSON.parse(localStorage.getItem(keyLS.LS_QUEUE_EN_DATA_KEY)) || [];

  if (watchedArr.some(value => value.id === currentID)) {
    watchedDataAttr = dataActionKey.DEL;
    watchedBtn = isUA ? btnText.WATCHED_DEL_UA : btnText.WATCHED_DEL_EN;
  } else {
    watchedDataAttr = dataActionKey.ADD;
    watchedBtn = isUA ? btnText.WATCHED_ADD_UA : btnText.WATCHED_ADD_EN;
  }

  if (queueArr.some(value => value.id === currentID)) {
    queueDataAttr = dataActionKey.DEL;
    queueBtn = isUA ? btnText.QUEUE_DEL_UA : btnText.QUEUE_DEL_EN;
  } else {
    queueDataAttr = dataActionKey.ADD;
    queueBtn = isUA ? btnText.QUEUE_ADD_UA : btnText.QUEUE_ADD_EN;
  }
}

function modalTextInfoTitle() {
  const currentLanguage = getLanguageFromLS();
  const isUA = currentLanguage === Movie.language.UKRAINIAN;
  currentInfoTitle.VOTE = isUA ? textInfoTitle.VOTE_UA : textInfoTitle.VOTE_EN;
  currentInfoTitle.POPULARITY = isUA
    ? textInfoTitle.POPULARITY_UA
    : textInfoTitle.POPULARITY_EN;
  currentInfoTitle.ORIGINAL_TITLE = isUA
    ? textInfoTitle.ORIGINAL_TITLE_UA
    : textInfoTitle.ORIGINAL_TITLE_EN;
  currentInfoTitle.GENRE = isUA
    ? textInfoTitle.GENRE_UA
    : textInfoTitle.GENRE_EN;
  currentInfoTitle.ABOUT = isUA
    ? textInfoTitle.ABOUT_UA
    : textInfoTitle.ABOUT_EN;
  currentInfoTitle.OVERVIEW = isUA
    ? textInfoTitle.OVERVIEW_UA
    : textInfoTitle.OVERVIEW_EN;
}
// function buttonTextContent() {
//   const modalButtons = document.querySelector('.container-btn');
//   watchedBtn = modalButtons.children[0];
//   queueBtn = modalButtons.children[1];
//   if (watchedArrCurrentLang.some(value => value.id === ID)) {
//     watchedBtn.textContent = 'delete from watched';
//     return;
//   } else {
//     watchedBtn.textContent = 'add to watched';
//   }
//   if (queueArrCurrentLang.some(value => value.id === ID)) {
//     queueBtn.textContent = 'delete from queue';
//     return;
//   } else {
//     queueBtn.textContent = 'add to queue';
//   }
// }
////// ADD TO WATCHED   ///////
async function addToWatched(evt) {
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
  // del
  if (watchedArrCurrentLang.some(value => value.id === ID)) {
    // console.log('этот фильм уже есть, удаляем');
    // watchedBtn.textContent = 'add to watched';
    evt.target.textContent =
      currentLanguage === Movie.language.UKRAINIAN
        ? btnText.WATCHED_ADD_UA
        : btnText.WATCHED_ADD_EN;
    evt.target.dataset.action = dataActionKey.ADD;
    const filteredWatchedArr = watchedArrCurrentLang.filter(
      value => value.id !== ID
    );
    localStorage.setItem(dataCurrentKey, JSON.stringify(filteredWatchedArr));
    const filteredWatchedArrAlt = watchedArrAltLang.filter(
      value => value.id !== ID
    );
    localStorage.setItem(dataAltKey, JSON.stringify(filteredWatchedArrAlt));
    return;
  }
  // add
  watchedArrCurrentLang.push(filtrCurrentData(movieToAdd));
  localStorage.setItem(dataCurrentKey, JSON.stringify(watchedArrCurrentLang));
  // console.log('watched:');
  const altLangData = await fetchAltLangByID(ID, altLang);
  watchedArrAltLang.push(altLangData);
  localStorage.setItem(dataAltKey, JSON.stringify(watchedArrAltLang));
  // watchedBtn.textContent = 'delete from watched';
  evt.target.textContent =
    currentLanguage === Movie.language.UKRAINIAN
      ? btnText.WATCHED_DEL_UA
      : btnText.WATCHED_DEL_EN;
  evt.target.dataset.action = dataActionKey.DEL;
}

/////////// ADD TO QUEUE

async function addToQueue(evt) {
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
  // del
  if (queueArrCurrentLang.some(value => value.id === ID)) {
    // console.log('этот фильм уже есть, удаляем');
    // queueBtn.innerHTML = 'add to queue';
    evt.target.textContent =
      currentLanguage === Movie.language.UKRAINIAN
        ? btnText.QUEUE_ADD_UA
        : btnText.QUEUE_ADD_EN;
    evt.target.dataset.action = dataActionKey.ADD;
    const filteredQueueArr = queueArrCurrentLang.filter(
      value => value.id !== ID
    );
    localStorage.setItem(dataCurrentKey, JSON.stringify(filteredQueueArr));
    const filteredQueueArrAlt = queueArrAltLang.filter(
      value => value.id !== ID
    );
    localStorage.setItem(dataAltKey, JSON.stringify(filteredQueueArrAlt));
    return;
  }
  // add
  queueArrCurrentLang.push(filtrCurrentData(movieToAdd));
  localStorage.setItem(dataCurrentKey, JSON.stringify(queueArrCurrentLang));
  // console.log('queue:');
  const altLangData = await fetchAltLangByID(ID, altLang);
  queueArrAltLang.push(altLangData);
  localStorage.setItem(dataAltKey, JSON.stringify(queueArrAltLang));
  // queueBtn.innerHTML = 'delete from queue';
  evt.target.textContent =
    currentLanguage === Movie.language.UKRAINIAN
      ? btnText.QUEUE_DEL_UA
      : btnText.QUEUE_DEL_EN;
  evt.target.dataset.action = dataActionKey.DEL;
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
