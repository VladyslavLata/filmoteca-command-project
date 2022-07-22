import {
  getLanguageFromLS,
} from './languageSwitch';

const team = document.querySelector('.footer-text__link');
const backdropTeam = document.querySelector('.backdrop-team');
const closeTeam = document.querySelector('.modal-team__button');
const body = document.querySelector('body');
const modalTeam = document.querySelector('.modal-team__container')

team.addEventListener('click', onTeamClick);
closeTeam.addEventListener('click', onCloseTeamClick);

function onTeamClick(e) {
  e.preventDefault();
  backdropTeam.classList.remove('is-hidden');
  body.classList.add('modal-team-open');
  modalTeamMarkup();
}

function onCloseTeamClick(e) {
  // e.preventDefault();
  backdropTeam.classList.add('is-hidden');
  body.classList.remove('modal-team-open');
}
const currentLanguage = getLanguageFromLS();
const X = currentLanguage  === "en-US"; 
let TeamLead = X ? "Team Lead" : "Лідер команди";
let ScrumMaster = X ? "Scrum master" : "Скрам-майстер";
let Developer = X ? "Developer" : "Розробник";
let Mentor = X ? "Mentor" : "Ментор";
let Sainchuk = X ? "Oleksandr Sainchuk" : "Олександр Саінчук";
let Kurka = X ? "Andrii Kurka" : "Андрій Курка";
let Tikka = X ? "Oleksandr Tikka" : "Олександр Тікка";
let Velychko = X ? "Svitlana Velychko" : "Світлана Величко";
let Tsiukh = X ? "Roman Tsiukh" : "Роман Цюх";
let Boiko = X ? "Serhii Boiko" : "Сергій Бойко";
let Konovalova = X ? "Kateryna Konovalova" : "Катерина Коновалова";
let Lata = X ? "Vladyslav Lata" : "Владислав Лата";
let Muzalevskiy = X ? "Evgeniy Muzalevskiy" : "Євгеній Музалєвський";
let Diachenko = X ? "Olena Diachenko" : "Олена Дяченко";
let Malynovska = X ? "Natalia Malynovska" : "Наталя Малиновська";
let Garnyk = X ? "Alyona Garnyk" : "Альона Гарнюк";
function modalTeamMarkup() {
  const makeMarkupModalTeam = `<ul class="team__list">
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="https://ca.slack-edge.com/T03ANNS1UBS-U03KXCM677Z-46aad6e7193c-512"
              alt=${Sainchuk}
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/Indisputable09" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/Indisputable09">
                </a>
            </div>
          </div>
          <p class="team__name">${Sainchuk}</p>
          <p class="team__role">${TeamLead}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="./images/andrii.jpg"
              alt=${Kurka}
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/Andrey1914" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/Andrey1914">
                </a>
            </div>
          </div>
          <p class="team__name">${Kurka}</p>
          <p class="team__role">${ScrumMaster}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="./images/oleksandr.jpg"
              alt=${Tikka}
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/AleksandrTikka" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/AleksandrTikka">
                </a>
            </div>
          </div>
          <p class="team__name">${Tikka}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img${Developer}
              class="team__img"
              src="https://ca.slack-edge.com/T03ANNS1UBS-U03AHHL83HV-c974944bd586-512"
              alt=${Velychko}
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/SvitlanaVelychko" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/SvitlanaVelychko">
                </a>
            </div>
          </div>
          <p class="team__name">${Velychko}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="./images/roman.jpg"
              alt=${Tsiukh}
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/RomanTsiukh" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/RomanTsiukh">
                </a>
            </div>
          </div>
          <p class="team__name">${Tsiukh}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="https://focus-online.ru/sites/default/files/photo_doc2.jpg"
              alt=${Boiko}
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/1-Serg-1" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/1-Serg-1">
                </a>
            </div>
          </div>
          <p class="team__name">${Boiko}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="https://static.tildacdn.com/tild3432-3639-4338-b034-666366373331/W-81.jpg"
              alt="${Konovalova}"
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/Konovalova-Kateryna" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/Konovalova-Kateryna">
                </a>
            </div>
          </div>
          <p class="team__name">${Konovalova}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="https://focus-online.ru/sites/default/files/photo_doc2.jpg"
              alt="${Lata}"
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/VladyslavLata" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/VladyslavLata">
                </a>
            </div>
          </div>
          <p class="team__name">${Lata}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="./images/team/evgeniy.jpg"
              alt="${Muzalevskiy}"
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/MEvgeniy21" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/MEvgeniy21">
                </a>
            </div>
          </div>
          <p class="team__name">${Muzalevskiy}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="https://static.tildacdn.com/tild3432-3639-4338-b034-666366373331/W-81.jpg"
              alt="${Diachenko}"
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/ElenaDiachenko" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/ElenaDiachenko">
                </a>
            </div>
          </div>
          <p class="team__name">${Diachenko}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="https://static.tildacdn.com/tild3432-3639-4338-b034-666366373331/W-81.jpg"
              alt="${Malynovska}"
            />
            <div class="team__overlay">
                <a class="team__link" href="https://github.com/NataliaMalynovska" target="_blank">
                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/NataliaMalynovska">
                </a>
            </div>
          </div>
          <p class="team__name">${Malynovska}</p>
          <p class="team__role">${Developer}</p>
        </li>
        <li class="team__item">
          <div class="team__wrapper">
            <img
              class="team__img"
              src="./images/mentor.jpg"
              alt="${Garnyk}"
            />
            <div class="team__overlay">
                <a class="team__link" href="https://indisputable09.github.io/filmoteka-project/" target="_blank">
                    <img class="overlay__img" src="./images/favicon-32x32.png" alt="https://indisputable09.github.io/filmoteka-project/">
                </a>
            </div>
          </div>
          <p class="team__name">${Garnyk}</p>
          <p class="team__role">${Mentor}</p>
        </li>
      </ul > `;
  
    return (modalTeam.innerHTML = makeMarkupModalTeam);  

};