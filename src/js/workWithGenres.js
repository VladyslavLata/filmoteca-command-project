import { Movie } from './fetchMovie';
import { keyLS } from './languageSwitch';
import { getLanguageFromLS } from './languageSwitch';

export async function genreLoad(classInstance) {
  try {
    const genre = localStorage.getItem(keyLS.LS_GENRE_KEY_EN);
    if (!genre) {
      classInstance.langCurrent = Movie.language.ENGLISH;
      const dataEN = await classInstance.fetchGenre();

      localStorage.setItem(
        keyLS.LS_GENRE_KEY_EN,
        JSON.stringify(dataEN.genres)
      );

      classInstance.langCurrent = Movie.language.UKRAINIAN;
      const dataUA = await classInstance.fetchGenre();

      localStorage.setItem(
        keyLS.LS_GENRE_KEY_UA,
        JSON.stringify(dataUA.genres)
      );
    }
    classInstance.langCurrent = getLanguageFromLS();
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
  console.log(langGenre);
  console.log(genreLS);
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
