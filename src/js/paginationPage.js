import { Movie } from './fetchMovie';
import { fetchTrendAndMarkup, fetchSearchAndMarkup } from './fetchAndMarkup';
import { trendMovie } from './homePage';
import { keyword, keywordMovies } from './moviesKeyword';
import { handleButtonClick as goToStart } from './up-btnAndSwitcher';
import Loader from './loader';

const loader = new Loader();

const refs = {
  btnLoadPrevious: document.querySelector('.pagination-page__btn-previous'),
  btnLoadNext: document.querySelector('.pagination-page__btn-next'),
 };

refs.btnLoadPrevious.addEventListener('click', onClickPrevious);
refs.btnLoadNext.addEventListener('click', onClickNext);

const element = document.querySelector('.pagination ul');

function pagination(targetFetch) {
  let perPages = 20;
  let currentPage = 1;
  
  createPaginMarkup(perPages, targetFetch.page);

    const { prev, numb, next } = {
    prev: document.querySelector('.prev'),
    numb: document.querySelectorAll('.numb'),
    next: document.querySelector('.next'),
  };
   numb.forEach(el => {
     el.addEventListener('click', (e) => {
       loader.enable('loader');
       const selectedPage = e.target.textContent;
       targetFetch.page = selectedPage;
       onFetchAndMarkup(targetFetch);
       pagination(targetFetch);
    });
   });
  if (prev) {
    prev.addEventListener('click', () => {
      targetFetch.page -= 1;
       onFetchAndMarkup(targetFetch);
       pagination(targetFetch);
    })
  }
  if (next) {
    next.addEventListener('click', () => {
        targetFetch.page += 1;
       onFetchAndMarkup(targetFetch);
       pagination(targetFetch);
    })
  }
}
pagination(trendMovie)
loader.disable('loader');



function createPaginMarkup(perPages, page) {
  
  let liTag = '';
  let active;
  let prevPage = page - 1;
  let nextPage = page + 1;
  

  if (page > 1) {
    liTag += `<li class="btn prev"><span><<</span></li>`;
  }

  if (page > 2) {
    if (perPages > 3) {
      liTag += `<li class="first numb"><span>1</span></li>`;
    }
    // if (page > 3) {
    //   liTag += `<li class="dots"><span>...</span></li>`;
    // }
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }


  if (perPages > 2) {
    nextPage += 1;
  }

  if (page == perPages) {
    prevPage -= 2;
  } else if (page == perPages - 1) {
    prevPage -= 1;
  } else if (perPages == 1) {
    prevPage = 1;
  }

  for (var plength = prevPage; plength <= nextPage; plength++) {
    if (plength > perPages) {
      continue;
    }

    if (plength < 1) {
      plength = 1;
    }

    if (page == plength) {
      active = 'active';
    } else {
      active = '';
    }
    liTag += `<li class="numb ${active}"><span>${plength}</span></li>`;
  }

  if (page < perPages - 1) {
    if (page < perPages- 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    if (perPages > 3) {
      liTag += `<li class="last numb"><span>${perPages}</span></li>`;
    }
  }

  if (page < perPages) {
    liTag += `<li class="btn next"><span>>></span></li>`;
  }
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', liTag); 
  return liTag; 
}



function onClickPrevious() {
  loader.enable('loader');
  if (keyword === null ? trendMovie.page === 1 : keywordMovies.page === 1)
  {
    return;
  }
  setPagePrevious();
  onFetchAndMarkup();
  goToStart();
}

function onClickNext() {
  loader.enable('loader');
  if (
    keyword === null
      ? trendMovie.page === trendMovie.lastPage
      : keywordMovies.page === keywordMovies.lastPage
  ) {
    return;
  }
  setPageNext();
  onFetchAndMarkup();
  goToStart();
}

function setPagePrevious() {
  if (keyword === null) {
    trendMovie.page -= 1;
  } else {
    keywordMovies.page -= 1;
  }
}

function setPageNext() {
  if (keyword === null) {
    trendMovie.page += 1;
  } else {
    keywordMovies.page += 1;
  }
}

function onFetchAndMarkup() {
  if (keyword === null) {
    fetchTrendAndMarkup(trendMovie);
  } else {
    fetchSearchAndMarkup(keywordMovies);
  }
}

// function onClickPrevious() {
//   if (keyword === null) {
//     setPagePrevious(trendMovie);
//     fetchTrendAndMarkup(trendMovie);
//   } else {
//     setPagePrevious(keywordMovies);
//     fetchSearchAndMarkup(keywordMovies);
//   }
// }

// function onClickNext() {
//   if (keyword === null) {
//     setPageNext(trendMovie);
//     fetchTrendAndMarkup(trendMovie);
//   } else {
//     setPageNext(keywordMovies);
//     fetchSearchAndMarkup(keywordMovies);
//   }
// }

// function setPagePrevious(classIstance) {
//   if (classIstance.page === 1) {
//     return;
//   }
//   classIstance.page -= 1;
//   document
//     .querySelector('.scroll-area')
//     .scrollIntoView({ block: 'center', behavior: 'smooth' });
// }

// function setPageNext(classIstance) {
//   if (classIstance.page === classIstance.lastPage) {
//     return;
//   }
//   classIstance.page += 1;
//   document
//     .querySelector('.scroll-area')
//     .scrollIntoView({ block: 'center', behavior: 'smooth' });
// }
