import { getLanguageFromLS } from './languageSwitch';
import { Movie } from './fetchMovie';

const refs = {
  textUpFirst: document.querySelector('.js-footer-text__up--first'),
  textUpSecond: document.querySelector('.js-footer-text__up--second'),
  textUpThird: document.querySelector('.js-footer-text__up--third'),
  textLink: document.querySelector('.js-footer-text__link'),
};

const { textUpFirst, textUpSecond, textUpThird, textLink } = refs;

export async function renderFooter() {
  const lang = await getLanguageFromLS();

  // if (lang === 'en-US') {
  if (lang === Movie.language.ENGLISH) {
    textUpFirst.textContent = `All Rights Reserved`;
    textUpSecond.textContent = `Developed with`;
    textUpThird.textContent = `by`;
    textLink.textContent = `GoIT Students`;
  }

  // if (lang === 'uk-UA') {
  if (lang === Movie.language.UKRAINIAN) {
    textUpFirst.textContent = `Всі права захищені`;
    textUpSecond.textContent = `Зроблено з`;
    textUpThird.textContent = ``;
    textLink.textContent = `Студентами GoIT`;
  }
}

renderFooter();
