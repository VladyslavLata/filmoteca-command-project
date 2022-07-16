const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal__button');

gallery.addEventListener('click', onImageClick);
modalBtn.addEventListener('click', onCloseClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    backdrop.classList.remove('is-hidden');
  }
}

function onCloseClick(e) {
  backdrop.classList.add('is-hidden');
}
