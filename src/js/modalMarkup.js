import { getCurrenDataFromLS } from './currentPageData';
// import { Movie } from './fetchMovie';
// import { genreFind } from './HomePageAndGenreFetch';

console.log(getCurrenDataFromLS());


export function modalMarkup(data) {
  const modal = document.querySelector('.modal-info__container');
  const makeMarkupModal = JSON.parse(localStorage.getItem('themoviedb-current-data'))
    .map(movieItem => {
      return `
      <img src="${
        // ?
        Movie.IMG_PATH + movieItem.poster_path
        // : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
      }" alt="${movieItem.title}" class="modal-info__img">
      <div class="modal-info">  
          <h2 class="modal-info__movie-name">${movieItem.title.toUpperCase()}</h2>
              <ul class="modal-info__list">
                  <li class="modal-info__item">
                      <p class="modal-info__title">Vote / Votes<p>
                      <div class="modal-info__content">
                          <span class="modal-info__content-color">${movieItem.vote_average}</span> / ${movieItem.vote_count}
                      </div>
                  </li>
                  <li class="modal-info__item">
                      <p class="modal-info__title">Popularity</p>
                      <div class="modal-info__content">${movieItem.popularity}</div>
                  </li>
                  <li class="modal-info__item">
                      <p class="modal-info__title">Original Title</p>
                      <div class="modal-info__content modal-info__content--text ">${movieItem.original_title.toUpperCase()}</div>
                  </li>
                  <li class="modal-info__item">
                      <p class="modal-info__title">Genre</p>
                      <div class="modal-info__content modal-info__content--text">${genreFind(
                        movieItem.genre_ids
                      )} | ${parseInt(movieItem.release_date, 10)}</div>
                  </li>
              </ul>
                  <p class="modal-info__article-title">about</p>
                  <p class="modal-info__article">${movieItem.overview}</p>`;
    })
    .join('');
  modal.innerHTML(makeMarkupModal)
}
