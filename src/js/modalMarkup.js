import { getCurrenDataFromLS } from './currentPageData';
// Получить id ссылки при клике на карточку из data-id

const cards = document.querySelector('.card__link');
console.log(cards)
cards.addEventListener('click', (card) => {
let ID = card.dataset.id;
console.log(ID)})

// console.log([].map.call(document.querySelectorAll('.card__link[data-id]'), function(el) {
//   return el.dataset.id;
// }));
// Найти (find) в массиве LocalStorage объект с нужным id
// это массив объектов LocalStorage
const movies = getCurrenDataFromLS();
console.log (movies);
// ищем 
// movies.find((movie) => {
  // let movieItem = {}
//   if (movie.id === ID) {
//   let movieItem = movie; }
// });// 
// movies.find(movie=> movie.id === ID);
export function modalMarkup(data) {
  const modal = document.querySelector('.modal-info__container');
  const makeMarkupModal = 
  // JSmovieItemON.parse(localStorage.getItem('themoviedb-current-data')).map
  (movieItem => {
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
    });
  modal.innerHTML(makeMarkupModal)
}
