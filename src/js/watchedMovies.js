import { makeMarkupCard } from './cardMarkup';

const watchedMovieBtnEl = document.querySelector('.watched');
const galleryEl = document.querySelector('.gallery');
let watchedFilms = null;
let watchedFilmsLength = 0;
let page = 1;

watchedMovieBtnEl.addEventListener('click', onClickWatchedBtnMarkupFilms);

function onClickWatchedBtnMarkupFilms() {
  galleryEl.innerHTML = '';
  watchedFilms = getWatchedFilmsLocalStorage();
  console.log('2', watchedFilms);
  if (watchedFilms === null) {
    noFilmsMessage();
    return;
  } else if (watchedFilms === undefined) {
    return;
  } else if (watchedFilms){
    watchedFilmsLength = watchedFilms.length;
    console.log(watchedFilmsLength);
    console.log(watchedFilms);
    makeMarkupCard(watchedFilms);
  }
}

function getWatchedFilmsLocalStorage() {
  try {
    const getWatchedFilms = localStorage.getItem('FILMS');
    console.log('1:', getWatchedFilms);
    return getWatchedFilms === null ? null : JSON.parse(getWatchedFilms);
  } catch (error) {
    errorMessage();
    console.error('Get state error: ', error.message);
  }
}

function noFilmsMessage() {
  galleryEl.innerHTML =
    '<p class="message">Your watch films list is empty.</p>';
}

function errorMessage() {
  galleryEl.innerHTML =
    '<p class="error">Unknown error. Watched movies cannot be displayed.</p>';
}
