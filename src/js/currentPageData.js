import { Movie } from './fetchMovie';
import {
  keyLS,
  getLanguageFromLS,
  getCurrentPageFromLS,
} from './languageSwitch';

const LS_CURRENT_DATA_KEY = 'themoviedb-current-data';

export function setCurrenDataToLS(data) {
  localStorage.setItem(LS_CURRENT_DATA_KEY, JSON.stringify(data));
}

export function getCurrenDataFromLS(data) {
  return JSON.parse(localStorage.getItem(LS_CURRENT_DATA_KEY));
}

export function getDataFromLibraryLS(currentLanguage) {
  const currentPage = getCurrentPageFromLS();
  switch (currentLanguage) {
    case Movie.language.ENGLISH:
      if (currentPage === keyLS.VALUE_PAGE_LIBRARY_Q) {
        return JSON.parse(localStorage.getItem(keyLS.LS_QUEUE_EN_DATA_KEY));
      } else {
        return JSON.parse(localStorage.getItem(keyLS.LS_WATHED_EN_DATA_KEY));
      }

    case Movie.language.UKRAINIAN:
      if (currentPage === keyLS.VALUE_PAGE_LIBRARY_Q) {
        return JSON.parse(localStorage.getItem(keyLS.LS_QUEUE_UA_DATA_KEY));
      } else {
        return JSON.parse(localStorage.getItem(keyLS.LS_WATHED_UA_DATA_KEY));
      }
  }
}
