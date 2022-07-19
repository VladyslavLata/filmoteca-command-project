import { Movie } from './fetchMovie';
import { genreFind } from './workWithGenres';
import { getCurrenDataFromLS } from './currentPageData';
import { noYearVariableLang } from './languageSwitch';

const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal-info__container');

let ID = 0;
let movieToAdd = {};


gallery.addEventListener('click', onImageClick);
modalBtn.addEventListener('click', onCloseClick);
modal.addEventListener('click', onBtnClick);

function onImageClick(e) {
  const movies = getCurrenDataFromLS();
  e.preventDefault();
  ID = Number(e.target.dataset.id);

  movies.map(movie => {
    if (movie.id !== ID) {
      return; 
    }
    modalMarkup(movie);
    movieToAdd = movie;
  });

  if (e.target !== e.currentTarget) {
    backdrop.classList.remove('is-hidden');
  }
}

function onCloseClick(e) {
  backdrop.classList.add('is-hidden');
}

function modalMarkup({
  poster_path,
  title,
  original_title,
  genre_ids,
  release_date,
  overview,
  vote_count,
  vote_average,
  popularity,
}) {
  const makeMarkupModal = `
      <img src="${
        // ?
        Movie.IMG_PATH + poster_path
        // : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
      }" alt="${title}" class="modal-info__img">
      <div class="modal-info">
          <h2 class="modal-info__movie-name">${title.toUpperCase()}</h2>
              <ul class="modal-info__list">
              <li class="modal-info__item">
                    <p class="modal-info__title">Vote / Votes<p>
                    <div class="modal-info__content">
                        <span class="modal-info__content-color"> ${
                          Math.round(vote_average * 10) / 10
                        } </span> / ${vote_count} 
                    </div>
                </li>
                <li class="modal-info__item">
                    <p class="modal-info__title">Popularity</p>
                    <div class="modal-info__content">${popularity.toFixed(
                      1
                    )}</div>
                </li>
                  <li class="modal-info__item">
                      <p class="modal-info__title">Original Title</p>
                      <div class="modal-info__content modal-info__content--text ">${original_title.toUpperCase()}</div>
                  </li>
                  <li class="modal-info__item">
                      <p class="modal-info__title">Genre</p>
                      <div class="modal-info__content modal-info__content--text">${genreFind(
                        genre_ids
                      )} | ${noYearVariableLang(release_date)}</div>
                  </li>
              </ul>
                  <p class="modal-info__article-title">${original_title.toUpperCase()}</p>
                  <p class="modal-info__article">${overview}</p>
                  <div class="container-btn">
            <button type="button" class="btn" name="watched">add to watched</button>
            <button type="button" class="btn" name="queue">add to queue</button>
        </div>`;
  return (modal.innerHTML = makeMarkupModal);
}

let watchedArr = [];
let queueArr = [];

const LS_WATHED_DATA_KEY = 'themovie-watched-lib';
const LS_QUEUE_DATA_KEY = 'themovie-queue-lib'

function onBtnClick(evt) {
  if (evt.target.name === "watched") {
    addToWatched();
  } else
    if (evt.target.name === "queue") {
      addToQueue();
    }
}

const addToWatched = () => {
      
  watchedArr = JSON.parse(localStorage.getItem(LS_WATHED_DATA_KEY)) || [];
  const watchedArrId = [];
  
  watchedArr.map(mov => {
    return watchedArrId.push(mov.id);
  });

  if (watchedArrId.includes(ID)) {
    return;
  }
  watchedArr.push(movieToAdd);
  localStorage.setItem(LS_WATHED_DATA_KEY, JSON.stringify(watchedArr));
  console.log('watched:  '+ watchedArrId)
 }
  
const addToQueue = () => {

  queueArr = JSON.parse(localStorage.getItem(LS_QUEUE_DATA_KEY)) || [];
  const queueArrId = [];
  queueArr.map(mov => {
    return queueArrId.push(mov.id);
  });

  if (queueArrId.includes(ID)) {
    console.log('есть уже')
    return
  }
  queueArr.push(movieToAdd);
  localStorage.setItem(LS_QUEUE_DATA_KEY, JSON.stringify(queueArr));
  console.log('queue:  '+ queueArrId);
}

