const hiddenElement = document.querySelector('.scroll-area');
const goToBtn = document.querySelector('.up-btn');
const themeSwitcherBtn = document.querySelector('.icon__button');

export function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
goToBtn.addEventListener('click', handleButtonClick);

window.addEventListener('scroll', () => {
  if (scrollY > 230) {
    themeSwitcherBtn.classList.add('icon__button--opacity');
    themeSwitcherBtn.style.position = 'fixed';
  }
  if (scrollY < 230) {
    themeSwitcherBtn.classList.remove('icon__button--opacity');
    themeSwitcherBtn.style.position = 'absolute';
  }
  if (scrollY > 300) {
    goToBtn.classList.remove('is-hidden');
  } else if (scrollY < 300) {
    goToBtn.classList.add('is-hidden');
  }
});
