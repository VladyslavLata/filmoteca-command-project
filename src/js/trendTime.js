import { Movie } from './fetchMovie';
import { trendMovie } from './homePage';
import { resetKeyword } from './moviesKeyword';
import { fetchTrendAndMarkup } from './fetchAndMarkup';
import { disabledEl, unlockEl } from './interfaceWork';

const refs = {
  btnSwitchDay: document.querySelector('.time-switch-day'),
  btnSwitchWeek: document.querySelector('.time-switch-week'),
};

refs.btnSwitchDay.addEventListener('click', onClickDay);
refs.btnSwitchWeek.addEventListener('click', onClickWeek);

function onClickDay() {
  trendMovie.page = 1;
  trendMovie.currentTrendTime = Movie.trendTime.DAY;
  fetchTrendAndMarkup(trendMovie);
  switchBtnTrendTime(Movie.trendTime.DAY);
  resetKeyword();
}

function onClickWeek() {
  trendMovie.page = 1;
  trendMovie.currentTrendTime = Movie.trendTime.WEEK;
  fetchTrendAndMarkup(trendMovie);
  switchBtnTrendTime(Movie.trendTime.WEEK);
  resetKeyword();
}

export function switchBtnTrendTime(currentTime) {
  switch (currentTime) {
    case Movie.trendTime.DAY:
      disabledEl(refs.btnSwitchDay);
      unlockEl(refs.btnSwitchWeek);
      break;

    case Movie.trendTime.WEEK:
      disabledEl(refs.btnSwitchWeek);
      unlockEl(refs.btnSwitchDay);
      break;
  }
}

export function unlockBtnTrendTime() {
  unlockEl(refs.btnSwitchDay);
  unlockEl(refs.btnSwitchWeek);
}
