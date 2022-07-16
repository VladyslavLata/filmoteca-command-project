import { Movie } from './fetchMovie';
import { makeMarkupCard } from './cardMarkup';
import {
  setLanguageToLS,
  getLanguageFromLS,
  switchBtnLang,
} from './languageSwitch';

const gallery = document.querySelector('.gallery');
console.log('~ gallery', gallery);

const LS_GENRE_KEY_EN = 'themoviedb-genre-EN';
const LS_GENRE_KEY_UA = 'themoviedb-genre-UA';

export let trendMovie;

startPageVisit();

function startPageVisit() {
  trendMovie = new Movie();
  const language = getLanguageFromLS();
  if (!language) {
    trendMovie.langCurrent = setLanguageToLS(Movie.language.ENGLISH);
  } else {
    trendMovie.langCurrent = language;
    switchBtnLang(trendMovie.langCurrent);
  }
  fetchAndMarkup(trendMovie);
}

export async function fetchAndMarkup(classIstance) {
  await genreLoad(classIstance);
  await classIstance
    .fetchTrend()
    .then(data => {
      console.log(data);
      makeMarkupCard(data, classIstance.langCurrent);
    })
    .catch(error => console.log(error));
}

async function genreLoad(classInstance) {
  const pageLang = classInstance.langCurrent;
  let GENRE_KEY = LS_GENRE_KEY_EN;

  switch (pageLang) {
    case Movie.language.ENGLISH:
      GENRE_KEY = LS_GENRE_KEY_EN;
      break;

    case Movie.language.UKRAINIAN:
      GENRE_KEY = LS_GENRE_KEY_UA;
      break;
  }

  const genre = localStorage.getItem(GENRE_KEY);
  if (!genre) {
    await classInstance
      .fetchGenre()
      .then(data => {
        localStorage.setItem(GENRE_KEY, JSON.stringify(data.genres));
      })
      .catch(error => console.log(error));
  }
}

export function genreFind(genreList = [], langGenre = Movie.language.ENGLISH) {
  let genreLS = localStorage.getItem(LS_GENRE_KEY_EN);
  let noGenre = 'No genres';
  let genreOther = 'Other';

  switch (langGenre) {
    case Movie.language.ENGLISH:
      genreLS = localStorage.getItem(LS_GENRE_KEY_EN);
      noGenre = 'No genres';
      genreOther = 'Other';
      break;

    case Movie.language.UKRAINIAN:
      genreLS = localStorage.getItem(LS_GENRE_KEY_UA);
      noGenre = 'Жанри відсутні';
      genreOther = 'Інщі';
      break;
  }

  if (!genreLS || genreList.length === 0) {
    return noGenre;
  }
  const genreArray = JSON.parse(genreLS);
  const genreResult = genreArray.reduce((previousValue, element) => {
    if (genreList.includes(element.id)) {
      previousValue.push(element.name);
    }
    return previousValue;
  }, []);

  if (genreResult.length === 0) {
    return noGenre;
  } else if (genreResult.length > 3) {
    return `${genreResult[0]}, ${genreResult[1]}, ${genreOther}`;
  } else {
    return genreResult.join(', ');
  }
}
