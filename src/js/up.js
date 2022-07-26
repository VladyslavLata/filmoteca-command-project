export default function createPaginMarkup(data) {
  document.querySelector('.pagination li').innerHTML =
    (data.total_pages, data.page);
}
