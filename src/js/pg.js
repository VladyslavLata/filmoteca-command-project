// import { currentTotalFilmsInPage, currentLSWatchedFilms, totalPages, currentPage, createMarkupFilms } from "./watchedMovies";

// export const boxMainBbtnsEl = document.querySelector('.box-main-btns');
// export const boxFirstBtnEl = document.querySelector('.first-box-btn');
// export const boxLastBtnEl = document.querySelector('.last-box-btn');


// boxMainBbtnsEl.addEventListener('click', onClickBtnInMainBoxChangePage);
// boxFirstBtnEl.addEventListener('click', onClickBtnInFirstBoxChangePage);
// boxLastBtnEl.addEventListener('click', onClickBtnInLastBoxChangePage);

// makeMarkupBtns(totalPages);
// createNumberLastBtn();

// export function onClickBtnInMainBoxChangePage() {
//     if (event.target.nodeName !== "BUTTON") { 
//     return;  } 
//   currentPage = Number(event.target.textContent);
//   createMarkupFilms(currentLSWatchedFilms);
//   makeMarkupBtns(totalPages);
// }

// export function onClickBtnInFirstBoxChangePage() {
//   if (event.target.nodeName !== "BUTTON") {
//     return; } 
//   currentPage = 1;
//   createMarkupFilms(currentLSWatchedFilms);
//   makeMarkupBtns(totalPages);
// }

// export function onClickBtnInLastBoxChangePage() {
//   if (event.target.nodeName !== "BUTTON") { 
//     return;  } 
//   currentPage = Number(event.target.textContent);
//   createMarkupFilms(currentLSWatchedFilms);
//   makeMarkupBtns(totalPages);
// }



// function markupBtn() {
//   return `<button type="button" class="main-btn btn-pg"></button>`;
// }

// export function makeMarkupBtns(totalPages) {
//   let markupBtns = '';
//   let totalBtn = 0;
//   if (totalPages <= 9) {
//     boxFirstBtnEl.classList.add('btn-hidden');
//     boxLastBtnEl.classList.add('btn-hidden');
//     totalBtn = totalPages;
//     for (let i = 1; i <= totalBtn; i += 1) {
//       markupBtns += markupBtn();
//     }
//     addMarkupBtns(markupBtns);
//     [...boxMainBbtnsEl.children].map((btn, i) => {
//       btn.textContent = i + 1;
//     });
//         return;
//   }
//   else if (totalPages > 9 && currentPage > 5 && currentPage <= (totalPages - 5)) {
//     boxFirstBtnEl.classList.remove('btn-hidden');
//     boxLastBtnEl.classList.remove('btn-hidden');
//     totalBtn = 5;
//     for (let i = 1; i <= totalBtn; i += 1) {
//       markupBtns += markupBtn();
//     }
//     addMarkupBtns(markupBtns);
//       [...boxMainBbtnsEl.children].map((btn, i) => {
//       btn.textContent = currentPage - 2 + i;
//     });
//     return ;
//   } 
//   else if (totalPages > 9 && currentPage <= 5 )  {
//       boxFirstBtnEl.classList.add('btn-hidden');
//       boxLastBtnEl.classList.remove('btn-hidden');
  
//       totalBtn = 7;
//     for (let i = 1; i <= totalBtn; i += 1) {
//       markupBtns += markupBtn();
//     }
//     addMarkupBtns(markupBtns);
//       [...boxMainBbtnsEl.children].map((btn, i) => {
//       btn.textContent = i + 1;
//     });
//     return ;
//   }
//   else if (totalPages > 9 && currentPage > (totalPages - 5)) {
//     boxFirstBtnEl.classList.remove('btn-hidden');
//     boxLastBtnEl.classList.add('btn-hidden');
//          totalBtn = 7;
//     for (let i = 1; i <= totalBtn; i += 1) {
//       markupBtns += markupBtn();
//     }
//     addMarkupBtns(markupBtns);
//       [...boxMainBbtnsEl.children].map((btn, i) => {
//       btn.textContent = totalPages - 6 + i;
//     });
//     return ;
//   }
// }

// function addMarkupBtns(markupBtns) {
//   boxMainBbtnsEl.innerHTML = markupBtns;
// }

// function createNumberLastBtn() {
//   boxLastBtnEl.lastElementChild.textContent = totalPages;
// }

// function pickOutCurrentPage(currentPage) {
//   [...boxMainBbtnsEl.children].find(el => {
//     if (el.textContent === String(currentPage)) {
//      el.classList.add('btn-current-pages')}
//   });
// }
// // pickOutCurrentPage(currentPage);

// console.log('klkl', [...boxMainBbtnsEl.children]);

// export function getTotalPages(watchedFilmsLength, currentTotalFilmsInPage) {
//   return Math.ceil(watchedFilmsLength / currentTotalFilmsInPage);
// }


// console.log('222', boxMainBbtnsEl.children);
// console.log(currentTotalFilmsInPage);
// console.log(totalPages);