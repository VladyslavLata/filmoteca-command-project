import { Movie } from './fetchMovie';
import { keyLS } from './languageSwitch';
import { getLanguageFromLS } from './languageSwitch';

export async function genreLoad(classInstance) {
  const genre = localStorage.getItem(keyLS.LS_GENRE_KEY_EN);
  if (!genre) {
    classInstance.langCurrent = keyLS.LS_GENRE_KEY_EN;
    classInstance
      .fetchGenre()
      .then(data => {
        localStorage.setItem(
          keyLS.LS_GENRE_KEY_EN,
          JSON.stringify(data.genres)
        );
      })
      .catch(error => console.log(error));

    classInstance.langCurrent = keyLS.LS_GENRE_KEY_UA;
    classInstance
      .fetchGenre()
      .then(data => {
        localStorage.setItem(
          keyLS.LS_GENRE_KEY_UA,
          JSON.stringify(data.genres)
        );
      })
      .catch(error => console.log(error));
  }
  classInstance.langCurrent = getLanguageFromLS();
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
