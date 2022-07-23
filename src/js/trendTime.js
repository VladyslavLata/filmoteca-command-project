import { Movie } from './fetchMovie';
import { trendMovie } from './homePage';
import { resetKeyword } from './moviesKeyword';
import { fetchTrendAndMarkup } from './fetchAndMarkup';
import { disabledEl, unlockEl } from './interfaceWork';
import Loader from './loader';

const loader = new Loader();
export const refsTrendTime = {
  btnSwitchDay: document.querySelector('.time-switch-day'),
  btnSwitchWeek: document.querySelector('.time-switch-week'),
};

refsTrendTime.btnSwitchDay.addEventListener('click', onClickDay);
refsTrendTime.btnSwitchWeek.addEventListener('click', onClickWeek);

function onClickDay() {
  loader.enable('loader');
  trendMovie.page = 1;
  trendMovie.currentTrendTime = Movie.trendTime.DAY;
  fetchTrendAndMarkup(trendMovie);
  switchBtnTrendTime(Movie.trendTime.DAY);
  resetKeyword();
}

function onClickWeek() {
  loader.enable('loader');
  trendMovie.page = 1;
  trendMovie.currentTrendTime = Movie.trendTime.WEEK;
  fetchTrendAndMarkup(trendMovie);
  switchBtnTrendTime(Movie.trendTime.WEEK);
  resetKeyword();
}

export function switchBtnTrendTime(currentTime) {
  switch (currentTime) {
    case Movie.trendTime.DAY:
      disabledEl(refsTrendTime.btnSwitchDay);
      unlockEl(refsTrendTime.btnSwitchWeek);
      break;

    case Movie.trendTime.WEEK:
      disabledEl(refsTrendTime.btnSwitchWeek);
      unlockEl(refsTrendTime.btnSwitchDay);
      break;
  }
}

export function unlockBtnTrendTime() {
  unlockEl(refsTrendTime.btnSwitchDay);
  unlockEl(refsTrendTime.btnSwitchWeek);
}
