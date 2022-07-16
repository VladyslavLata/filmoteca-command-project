
// const watchedMovieBtnEl = document.querySelector('.watched');
let watchedFilms = null;
// let watchedFilmsLength = 0;

// watchedMovieBtnEl.addEventListener('click', onClickWatchedBtnMarkupFilms);

// function onClickWatchedBtnMarkupFilms() {
//   boxEl.innerHTML = '';
//   watchedFilms = getWatchedFilmsLocalStorage();
//   if (watchedFilms === null) {
//     return;
//   } else if (watchedFilms === undefined) {
//     noFilmsMessage();
//     return;
//   } else {
//     watchedFilmsLength = watchedFilms.length;
//   }
// }


// function getWatchedFilmsLocalStorage() { 
//   try { const getWatchedFilms = localStorage.getItem("key")
//     return getWatchedFilms === null ? undefined : JSON.parse(getWatchedFilms);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//     errorMessage();
//   }
// }

// function noFilmsMessage() {
//   boxEl.innerHTML = '<p class="message">Your watch films list is empty.</p>';
// }

// function errorMessage() {
//    boxEl.innerHTML = '<b class="error">Unknown error. Watched movies cannot be displayed.</b>';
// }