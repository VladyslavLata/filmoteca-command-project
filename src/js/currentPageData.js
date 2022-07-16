const LS_CURRENT_DATA_KEY = 'themoviedb-current-data';

export function setCurrenDataToLS(data) {
  localStorage.setItem(LS_CURRENT_DATA_KEY, JSON.stringify(data));
}

export function getCurrenDataFromLS(data) {
  return JSON.parse(localStorage.getItem(LS_CURRENT_DATA_KEY));
}
