import { Movie } from './fetchMovie';
import { genreFind } from './workWithGenres';
import { noYearVariableLang } from './languageSwitch';
import Loader from './loader';

const loader = new Loader();

export function makeMarkupCard(data) {
  const gallery = document.querySelector('.gallery');
  const makeMarkupCard = data.results.map(movieItem => {
      return `<li class="card">
          <a class="card__link" href=""  >
            <img data-id="${movieItem.id}" class="card__img" src="${
        movieItem.poster_path
          ? Movie.IMG_PATH + movieItem.poster_path
          : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
      }" alt="${movieItem.title}" loading="lazy"/>
      <div class="card__wrapper">
            <p class="card__name">${movieItem.title.toUpperCase()}</p>
            <p class="card__description">${genreFind(
              movieItem.genre_ids
            )} | ${noYearVariableLang(movieItem.release_date)}
            <span class="card__vote">${
              Math.round(movieItem.vote_average * 10) / 10
            }</span>
            </p>
            </div>
          </a>
        </li>`;
    })
    .join('');
  gallery.innerHTML = makeMarkupCard;
  loader.refs.preloader.classList.add('is-off');
  loader.enable();
}


