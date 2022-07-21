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
import { unlockEl } from './interfaceWork';

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
let watchedBtn;
let queueBtn;

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
    modalMarkup(movie);
    buttonTextContent();
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
  console.log(e);
  console.log(e.code);
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
  backdrop.style.background = `url(${
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

let watchedArrCurrentLang = [];
let watchedArrAltLang = [];
let queueArrCurrentLang = [];
let queueArrAltLang = [];

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
function buttonTextContent() {
  const modalButtons = document.querySelector('.container-btn');
  watchedBtn = modalButtons.children[0];
  queueBtn = modalButtons.children[1];
  if (watchedArrCurrentLang.some(value => value.id === ID)) {
    watchedBtn.textContent = 'delete from watched';
    return;
  } else {
    watchedBtn.textContent = 'add to watched';
  }
  if (queueArrCurrentLang.some(value => value.id === ID)) {
    queueBtn.textContent = 'delete from queue';
    return;
  } else {
    queueBtn.textContent = 'add to queue';
  }
}
////// ADD TO WATCHED   ///////
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

  if (watchedArrCurrentLang.some(value => value.id === ID)) {
    console.log('этот фильм уже есть, удаляем');
    watchedBtn.textContent = 'add to watched';
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

  watchedArrCurrentLang.push(filtrCurrentData(movieToAdd));
  localStorage.setItem(dataCurrentKey, JSON.stringify(watchedArrCurrentLang));
  console.log('watched:');
  const altLangData = await fetchAltLangByID(ID, altLang);
  watchedArrAltLang.push(altLangData);
  localStorage.setItem(dataAltKey, JSON.stringify(watchedArrAltLang));
  watchedBtn.textContent = 'delete from watched';
}

/////////// ADD TO QUEUE

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

  if (queueArrCurrentLang.some(value => value.id === ID)) {
    console.log('этот фильм уже есть, удаляем');
    queueBtn.innerHTML = 'add to queue';
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

  queueArrCurrentLang.push(filtrCurrentData(movieToAdd));
  localStorage.setItem(dataCurrentKey, JSON.stringify(queueArrCurrentLang));
  console.log('queue:');
  const altLangData = await fetchAltLangByID(ID, altLang);
  queueArrAltLang.push(altLangData);
  localStorage.setItem(dataAltKey, JSON.stringify(queueArrAltLang));
  queueBtn.innerHTML = 'delete from queue';
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
