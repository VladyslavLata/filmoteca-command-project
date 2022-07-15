import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';

let keyword = '';

refs = {
    formEl: document.querySelector('.search-form'),
}

refs.formEl.addEventListener('submit', onClickSubmit);

async function onClickSubmit(event) {
    event.preventDefault();
    keyword = event.target.query.value;

    keywordMovies = new Movie (keyword);
    await keywordMovies
        .fetchSearch()
        .then(data => {
            console.log(data);
            makeMarkupCard(data);
      })
      .catch(error => console.log(error));
}