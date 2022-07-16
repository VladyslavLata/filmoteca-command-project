import { Movie } from './fetchMovie';
import { genreFind } from './HomePageAndGenreFetch';

export function makeMarkupCard(data) {
  const gallery = document.querySelector('.gallery');
  const makeMarkupCard = data.results
    .map(movieItem => {
      return `<li class="card">
          <a class="card__link" href="">
            <img class="card__img" src="${
              // ?
              Movie.IMG_PATH + movieItem.poster_path
              // : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
            }" alt="${movieItem.title}" />
            <p class="card__name">${movieItem.title.toUpperCase()}</p>
            <p class="card__description">${genreFind(
              movieItem.genre_ids
            )} | ${parseInt(movieItem.release_date, 10)}
            <span class="card__vote">${movieItem.vote_average}</span>
            </p>
          </a>
        </li>`;
    })
    .join('');
  gallery.innerHTML = makeMarkupCard;
}
