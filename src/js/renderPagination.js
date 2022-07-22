
function createPaginationMarkup(pages, page) {
  if (pages < 2) {
    return '';
  }
  let str = '<ul class="pagination">';
  let active;
  let prevPage = page - 1;
  let nextPage = page + 1;


  if (page > 1) {
    str += '<li class="btn prev"><span><<</span></li>';
  }

  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? 'active' : ' ';
      str += '<li class="numb ' + active + '"><span>' + p + '</span></li>';
    }
  }

  else {

    if (page > 2) {
      str += '<li class="first numb"><span>1</span></li>';
      if (page > 3) {
        str += '<li class="dots"><span>...</span></li>';
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
      active = page == p ? 'active' : '';
      str += '<li class="numb ' + active + '"><span>' + p + '</span></li>';
    }

    if (page < pages - 1) {
      if (page < pages - 2) {
        str += '<li class="dots"><spank">...</span></li>';
      }
      str += '<li class="numb"><span>' + pages + '</span></li>';
    }
  }

  if (page < pages) {
    str += '<li class="btn next"' + (page + 1) + '">>></span></li>';
  }
  str += '</ul>';
 
  document.querySelector('.pagination').innerHTML = str;
  return str;
}

export default function renderPagination(data) {
    document.querySelector('.pagination').innerHTML = createPaginationMarkup(data.total_pages, data.page);
}
