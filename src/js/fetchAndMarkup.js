import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';
import { genreLoad } from './workWithGenres';
import { setCurrenDataToLS, getCurrenDataFromLS } from './currentPageData';

export async function fetchTrendAndMarkup(classIstance) {
  await genreLoad(classIstance);
  await classIstance
    .fetchTrend()
    .then(data => {
      console.log(data);
      setCurrenDataToLS(data.results);
      makeMarkupCard(data, classIstance.langCurrent);
    })
    .catch(error => console.log(error));
}

export async function fetchSearchAndMarkup(classIstance) {
  await genreLoad(classIstance);
  await classIstance
    .fetchSearch()
    .then(data => {
      console.log(data);
      setCurrenDataToLS(data.results);
      makeMarkupCard(data, classIstance.langCurrent);
    })
    .catch(error => console.log(error));
}
