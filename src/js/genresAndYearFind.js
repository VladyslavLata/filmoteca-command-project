// import { Movie } from './fetchMovie';

// export const keyLS = {
//   LS_LANGUAGE_KEY: 'themoviedb-current-language',
//   LS_GENRE_KEY_EN: 'themoviedb-genre-EN',
//   LS_GENRE_KEY_UA: 'themoviedb-genre-UA',
//   LS_WATHED_DATA_KEY: 'themovie-watched-lib',
//   LS_QUEUE_DATA_KEY: 'themovie-queue-lib',
// };

// //  genre--------------->

// export function genreFind(genreList = []) {
//   let genreLS = localStorage.getItem(keyLS.LS_GENRE_KEY_EN);
//   let noGenre = 'No genres';
//   let genreOther = 'Other';
//   let langGenre = getLanguageFromLS();

//   switch (langGenre) {
//     case Movie.language.ENGLISH:
//       genreLS = localStorage.getItem(keyLS.LS_GENRE_KEY_EN);
//       noGenre = 'No genres';
//       genreOther = 'Other';
//       break;

//     case Movie.language.UKRAINIAN:
//       genreLS = localStorage.getItem(keyLS.LS_GENRE_KEY_UA);
//       noGenre = 'Жанри відсутні';
//       genreOther = 'Інші';
//       break;
//   }

//   if (!genreLS || genreList.length === 0) {
//     return noGenre;
//   }
//   const genreArray = JSON.parse(genreLS);
//   const genreResult = genreArray.reduce((previousValue, element) => {
//     if (genreList.includes(element.id)) {
//       previousValue.push(element.name);
//     }
//     return previousValue;
//   }, []);

//   if (genreResult.length === 0) {
//     return noGenre;
//   } else if (genreResult.length > 3) {
//     return `${genreResult[0]}, ${genreResult[1]}, ${genreOther}`;
//   } else {
//     return genreResult.join(', ');
//   }
// }
// // <-----------------genre

// export function getLanguageFromLS() {
//   try {
//      return JSON.parse(localStorage.getItem(keyLS.LS_LANGUAGE_KEY));
//   } catch (error) {
//     console.error(error.message);
//   }

// }

// export function noYearVariableLang(yearValue) {
//   const currentLang = getLanguageFromLS();
//   switch (currentLang) {
//     case Movie.language.ENGLISH:
//       return !yearValue ? 'No year' : parseInt(yearValue, 10);

//     case Movie.language.UKRAINIAN:
//       return !yearValue ? 'Немає року' : parseInt(yearValue, 10);
//   }
//   return parseInt(yearValue, 10);
// }
