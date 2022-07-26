import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';
import { getLanguageFromLS } from './languageSwitch';
import { unlockBtnTrendTime } from './trendTime';
import { setCurrenDataToLS } from './currentPageData';
import { renderPagination } from './renderPagination';
import { oldTrendMovie, resetOldTrendMovie } from './fetchAndMarkup';
import { setOldTrendMovie } from './homePage';
import Loader from './loader';

const loader = new Loader();
export const refs = {
  formEl: document.querySelector('.search-form'),
  paragraphEl: document.querySelector('.warning-notification'),
};

export let keyword = null;
export let keywordMovies;
let oldKeywordMovies = undefined;

refs.formEl.addEventListener('submit', onClickSubmit);

async function onClickSubmit(event) {
  try {
    loader.enable('loader');
    event.preventDefault();
    keyword = event.target.query.value.trim();
    const lang = await getLanguageFromLS();

    if (keyword === '') {
      if(lang === Movie.language.ENGLISH){
        refs.paragraphEl.innerHTML = `Enter the name in the search field.`
      } else {
        refs.paragraphEl.innerHTML = `Введіть назву в поле пошуку.`
      };
      loader.disable('loader');
      return;
    };

    keywordMovies = new Movie(keyword);
    keywordMovies.langCurrent = getLanguageFromLS();
    const data = await keywordMovies.fetchSearch();

    if (data.total_results === 0) {
      event.target.reset();
      if(lang === Movie.language.ENGLISH){
        refs.paragraphEl.innerHTML = `Search result not successful. Enter the correct movie name and try again.`
      } else {
        refs.paragraphEl.innerHTML = `Результат пошуку невдалий. Введіть правильну назву фільму та повторіть спробу.`
      };

      loader.disable('loader');
      if (oldTrendMovie) {
        resetKeyword();
        setOldTrendMovie(oldTrendMovie);
      };
      if (oldKeywordMovies) {
        keywordMovies = oldKeywordMovies;
      };
      return;
    };

    makeMarkupCard(data);
    renderPagination(data);
    event.target.reset();
    resetTextAlertSearch();

    console.log(data);
    keywordMovies.lastPage = data.total_pages;
    setCurrenDataToLS(data.results);
    unlockBtnTrendTime();
    oldKeywordMovies = keywordMovies;
    resetOldTrendMovie();
  } catch (error) {
    console.log(error.message);
  };
};

export function resetKeyword() {
  keyword = null;
  oldKeywordMovies = undefined;
};

export function resetTextAlertSearch() {
  refs.paragraphEl.innerHTML = '';
};
