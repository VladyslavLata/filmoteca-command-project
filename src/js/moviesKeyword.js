import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';

let keyword = '';

const refs = {
  formEl: document.querySelector('.search-form'),
};

refs.formEl.addEventListener('submit', onClickSubmit);

async function onClickSubmit(event) {
  event.preventDefault();
  keyword = event.target.query.value.trim();

  const keywordMovies = new Movie(keyword);
  await keywordMovies
    .fetchSearch()
    .then(data => {
      console.log(data);
      makeMarkupCard(data);
    })
    .catch(error => console.log(error));
}

// try {
//   event.preventDefault();
//   keyword = event.target.query.value.trim();

//   keywordMovies = new Movie(keyword);
//   const data = await keywordMovies.fetchSearch();
//   console.log(data);
//   await makeMarkupCard(data);
//   event.target.reset();
// } catch (error) {
//   console.log(error.message);
// }
