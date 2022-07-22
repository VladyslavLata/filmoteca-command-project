import { doc } from 'firebase/firestore';
import { getLanguageFromLS } from './languageSwitch';

const refs = {
  footerTextUpFirst: document.querySelector('.js-footer-text__up--first'),
};

export async function renderFooter() {
  const lang = await getLanguageFromLS();
  const footer = document.querySelector('.footer-text');
  if (lang === 'en-US') {
    refs.footerTextUpFirst.textContent =
      '"&#169;" 2022 | All Rights Reserved |';
    //   footer.innerHTML = `
    //     <span class="footer-text__up">&#169; 2022 | All Rights Reserved |</span>
    //     <span class="footer-text__up">Developed with
    //         <svg class="footer-text__icon" width="14" height="13"><use href="./images/sprite.svg#icon-heart"></use></svg>
    //         by <a class="footer-text__link" href="">GoIT Students</a></span>
    //     `;
    return;
  }
  if (lang === 'uk-UA') {
    refs.footerTextUpFirst.textContent = `"&#169;" 2022 | Всі права захищені |`;
    //   footer.innerHTML = `
    //     <span class="footer-text__up">&#169; 2022 | Всі права захищені |</span>
    //     <span class="footer-text__up">Розроблено спільно
    //         <svg class="footer-text__icon" width="14" height="13"><use href="./images/sprite.svg#icon-heart"></use></svg>
    //         з <a class="footer-text__link" href="">Студентами GoIT</a></span>
    //     `;
    return;
  }
}

renderFooter();
