import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';

const refs = {
  formEl: document.querySelector('.search-form'),
  paragraphEl: document.querySelector('.warning-notification'),
};

refs.formEl.addEventListener('submit', onClickSubmit);

async function onClickSubmit(event) {
    try {
      event.preventDefault();
      const keyword = event.target.query.value.trim();

      if(keyword === '') {
        refs.paragraphEl.innerHTML = `Enter the name in the search field`;
        return false;
      };

      const keywordMovies = new Movie(keyword);
      const data = await keywordMovies.fetchSearch();

      if(data.total_results === 0) {
        refs.paragraphEl.innerHTML = `Search result not successful. Enter the correct movie name and`;
        return false;
      };

        makeMarkupCard(data);
        event.target.reset();
        refs.paragraphEl.innerHTML = "";

    } catch (error) {
        console.log(error.message);
    }
};