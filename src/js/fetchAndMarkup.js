import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';
import { genreLoad } from './workWithGenres';
import { setCurrenDataToLS, getCurrenDataFromLS } from './currentPageData';
import { renderPagination } from './renderPagination';

export async function fetchTrendAndMarkup(classIstance) {
  try {
    await genreLoad(classIstance);
    const data = await classIstance.fetchTrend();
    console.log(data);
    setCurrenDataToLS(data.results);
    makeMarkupCard(data);
    renderPagination(data);
    classIstance.lastPage = data.total_pages;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchAndMarkup(classIstance) {
  try {
    await genreLoad(classIstance);
    const data = await classIstance.fetchSearch();
    console.log(data);
    setCurrenDataToLS(data.results);
    makeMarkupCard(data);
    renderPagination(data);
    classIstance.lastPage = data.total_pages;
  } catch (error) {
    console.log(error);
  }
}
