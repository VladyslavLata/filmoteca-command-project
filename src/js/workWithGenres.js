import { Movie } from './fetchMovie';
import { keyLS } from './languageSwitch';
import { getLanguageFromLS } from './languageSwitch';

export async function genreLoad(classInstance) {
  try {
    const pageLang = classInstance.langCurrent;
    let GENRE_KEY = keyLS.LS_GENRE_KEY_EN;

    switch (pageLang) {
      case Movie.language.ENGLISH:
        GENRE_KEY = keyLS.LS_GENRE_KEY_EN;
        break;

      case Movie.language.UKRAINIAN:
        GENRE_KEY = keyLS.LS_GENRE_KEY_UA;
        break;
    }

    const genre = localStorage.getItem(GENRE_KEY);
    if (!genre) {
      const data = await classInstance.fetchGenre();
      localStorage.setItem(GENRE_KEY, JSON.stringify(data.genres));
    }
  } catch (error) {
    console.log(error);
  }
}

export function genreFind(genreList = []) {
  let genreLS = localStorage.getItem(keyLS.LS_GENRE_KEY_EN);
  let noGenre = 'No genres';
  let genreOther = 'Other';
  const langGenre = getLanguageFromLS();

  switch (langGenre) {
    case Movie.language.ENGLISH:
      genreLS = localStorage.getItem(keyLS.LS_GENRE_KEY_EN);
      noGenre = 'No genres';
      genreOther = 'Other';
      break;

    case Movie.language.UKRAINIAN:
      genreLS = localStorage.getItem(keyLS.LS_GENRE_KEY_UA);
      noGenre = 'Жанри відсутні';
      genreOther = 'Інші';
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
