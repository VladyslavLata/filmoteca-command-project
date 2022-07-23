const paginationClass = {
  ACTIVE: 'active',
  BTN: 'btn',
  NUMB: 'numb',
  PREV_PAGE: 'prev-page',
  NEXT_PAGE: 'next-page',
  FIRST_PAGE: 'first-page',
  LAST_PAGE: 'last-page',
  DOTS: 'dots',
};

function createPaginationMarkup(pages, page) {
  if (pages < 2) {
    return '';
  }
  let str = `<ul class="pagination-list" data-last="${pages}" data-current="${page}">`;
  let active;
  let firstPage;
  let prevPage = page - 1;
  let nextPage = page + 1;

  if (page > 1) {
    str += `<li class="${paginationClass.BTN} ${
      paginationClass.PREV_PAGE
    }" data-page="${page - 1}"><span><<</span></li>`;
  }

  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page === p ? paginationClass.ACTIVE : '';
      str += `<li class="${paginationClass.NUMB} ${active}" data-page="${p}"><span>${p}</span></li>`;
    }
  } else {
    if (page > 2) {
      str += `<li class="${paginationClass.NUMB} ${paginationClass.FIRST_PAGE}" data-page="1"><span>1</span></li>`;
      if (page > 3) {
        str += `<li class="${paginationClass.DOTS}"><span>...</span></li>`;
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      nextPage += 2;
    } else if (page === 2) {
      nextPage += 1;
    }

    if (page === pages) {
      prevPage -= 2;
    } else if (page === pages - 1) {
      prevPage -= 1;
    }

    for (let p = prevPage; p <= nextPage; p++) {
      if (p === 0) {
        p += 1;
      }
      if (p > pages) {
        continue;
      }
      active = page === p ? paginationClass.ACTIVE : '';
      str += `<li class="${paginationClass.NUMB} ${active}" data-page="${p}"><span>${p}</span></li>`;
    }

    if (page < pages - 1) {
      if (page < pages - 2) {
        str += `<li class="${paginationClass.DOTS}"><spank">...</span></li>`;
      }
      str += `<li class="${paginationClass.NUMB} ${paginationClass.LAST_PAGE}" data-page="${pages}"><span>${pages}</span></li>`;
    }
  }

  if (page < pages) {
    str += `<li class="${paginationClass.BTN} ${
      paginationClass.NEXT_PAGE
    }" data-page="${page + 1}">>></span></li>`;
  }
  str += '</ul>';

  // document.querySelector('.pagination').innerHTML = str;
  return str;
}

export function renderPagination(data) {
  const currentPage = data.page;
  const lastPage = data.total_pages;
  document.querySelector('.pagination-container').innerHTML =
    createPaginationMarkup(lastPage, currentPage);
}
