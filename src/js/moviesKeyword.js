import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';
import { getLanguageFromLS } from './languageSwitch';
import { unlockBtnTrendTime } from './trendTime';

const refs = {
  formEl: document.querySelector('.search-form'),
  paragraphEl: document.querySelector('.warning-notification'),
};

export let keyword = null;
export let keywordMovies;

refs.formEl.addEventListener('submit', onClickSubmit);

async function onClickSubmit(event) {
  try {
    event.preventDefault();
    keyword = event.target.query.value.trim();

    if (keyword === '') {
      refs.paragraphEl.innerHTML = `Enter the name in the search field`;
      return;
    }

    keywordMovies = new Movie(keyword);
    keywordMovies.langCurrent = getLanguageFromLS();
    const data = await keywordMovies.fetchSearch();

    if (data.total_results === 0) {
      event.target.reset();
      refs.paragraphEl.innerHTML = `Search result not successful. Enter the correct movie name and try again.`;
      return;
    }

    makeMarkupCard(data);
    event.target.reset();
    refs.paragraphEl.innerHTML = '';
    unlockBtnTrendTime();
  } catch (error) {
    console.log(error.message);
  }
}

export function resetKeyword() {
  keyword = null;
}
