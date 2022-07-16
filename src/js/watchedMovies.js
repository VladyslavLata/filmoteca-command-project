
const watchedMovieBtnEl = document.querySelector('.watched');
const galleryEl = document.querySelector('.gallery');
let watchedFilms = null;
let watchedFilmsLength = 0;

watchedMovieBtnEl.addEventListener('click', onClickWatchedBtnMarkupFilms);

function onClickWatchedBtnMarkupFilms() {
  galleryEl.innerHTML = '';
  watchedFilms = getWatchedFilmsLocalStorage();
  if (watchedFilms === null) {
    return;
  } else if (watchedFilms === undefined) {
    noFilmsMessage();
    return;
  } else {
    watchedFilmsLength = watchedFilms.length;
    console.log(watchedFilmsLength);
  }
}


function getWatchedFilmsLocalStorage() { 
  try {
    const getWatchedFilms = localStorage.getItem("FILMS");
    return getWatchedFilms === null ? undefined : JSON.parse(getWatchedFilms);
  } catch (error) {
    console.error("Get state error: ", error.message);
    errorMessage();
  }
}

function noFilmsMessage() {
  boxEl.innerHTML = '<p class="message">Your watch films list is empty.</p>';
}

function errorMessage() {
   boxEl.innerHTML = '<b class="error">Unknown error. Watched movies cannot be displayed.</b>';
}