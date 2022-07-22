import { getLanguageFromLS } from './languageSwitch';
import { Movie } from './fetchMovie';

const team = document.querySelector('.footer-text__link');
const backdropTeam = document.querySelector('.backdrop-team');
const closeTeam = document.querySelector('.modal-team__button');
const body = document.querySelector('body');
const modalTeam = document.querySelector('.modal-team__container');
const heartIcon = document.querySelector('.footer-text__icon');

team.addEventListener('click', onTeamClick);
closeTeam.addEventListener('click', onCloseTeamClick);

function onTeamClick(e) {
  e.preventDefault();
  backdropTeam.classList.remove('is-hidden');
  body.classList.add('modal-team-open');
  modalTeamMarkup();
  heartIcon.classList.remove('animate__heartBeat');
}

function onCloseTeamClick(e) {
  backdropTeam.classList.add('is-hidden');
  body.classList.remove('modal-team-open');
  heartIcon.classList.add('animate__heartBeat');
}

function modalTeamMarkup() {
  const currentLanguage = getLanguageFromLS();
  let langUS = currentLanguage === Movie.language.ENGLISH;
  let TeamLead = langUS ? 'Team Lead' : 'Лідер команди';
  let ScrumMaster = langUS ? 'Scrum master' : 'Скрам-майстер';
  let Developer = langUS ? 'Developer' : 'Розробник';
  let Mentor = langUS ? 'Mentor' : 'Ментор';
  let Sainchuk = langUS ? 'Oleksandr Sainchuk' : 'Олександр Саінчук';
  let Kurka = langUS ? 'Andrii Kurka' : 'Андрій Курка';
  let Tikka = langUS ? 'Oleksandr Tikka' : 'Олександр Тікка';
  let Velychko = langUS ? 'Svitlana Velychko' : 'Світлана Величко';
  let Tsiukh = langUS ? 'Roman Tsiukh' : 'Роман Цюх';
  let Boiko = langUS ? 'Serhii Boiko' : 'Сергій Бойко';
  let Konovalova = langUS ? 'Kateryna Konovalova' : 'Катерина Коновалова';
  let Lata = langUS ? 'Vladyslav Lata' : 'Владислав Лата';
  let Muzalevskiy = langUS ? 'Evgeniy Muzalevskiy' : 'Євгеній Музалєвський';
  let Diachenko = langUS ? 'Olena Diachenko' : 'Олена Дяченко';
  let Malynovska = langUS ? 'Natalia Malynovska' : 'Наталя Малиновська';
  let Garnyk = langUS ? 'Alyona Garnyk' : 'Альона Гарнюк';

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
              src="./images/team/Natat.jpg"
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
}

/* <ul class="team__list">
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="https://ca.slack-edge.com/T03ANNS1UBS-U03KXCM677Z-46aad6e7193c-512"
        alt="Oleksandr Sainchuk"
      />
    </div>
    <p class="team__name">Oleksandr Sainchuk</p>
    <p class="team__role">Team lead</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img class="team__img" src="./images/andrii.jpg" alt="Andrii Kurka" />
    </div>
    <p class="team__name">Andrii Kurka</p>
    <p class="team__role">Scrum master</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="./images/oleksandr.jpg"
        alt="Oleksandr Tikka"
      />
    </div>
    <p class="team__name">Oleksandr Tikka</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="https://ca.slack-edge.com/T03ANNS1UBS-U03AHHL83HV-c974944bd586-512"
        alt="Svitlana Velychko"
      />
    </div>
    <p class="team__name">Svitlana Velychko</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img class="team__img" src="./images/roman.jpg" alt="Roman Tsiukh" />
    </div>
    <p class="team__name">Roman Tsiukh</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="https://passport-photo.online/assets/merged/4DxnP8jh3rOBcxc4zFNc.webp"
        alt="Serhii Boiko"
      />
    </div>
    <p class="team__name">Serhii Boiko</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="https://passport-photo.online/assets/merged/4DxnP8jh3rOBcxc4zFNc.webp"
        alt="Kateryna Konovalova"
      />
    </div>
    <p class="team__name">Kateryna Konovalova</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="https://passport-photo.online/assets/merged/4DxnP8jh3rOBcxc4zFNc.webp"
        alt="Vladyslav Lata"
      />
    </div>
    <p class="team__name">Vladyslav Lata</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="./images/team/evgeniy.jpg"
        alt="Evgeniy Muzalevskiy"
      />
    </div>
    <p class="team__name">Evgeniy Muzalevskiy</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="https://passport-photo.online/assets/merged/4DxnP8jh3rOBcxc4zFNc.webp"
        alt="Olena"
      />
    </div>
    <p class="team__name">Olena</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="./images/team/Natat.jpg"
        alt="Natalia Malynovska"
      />
    </div>
    <p class="team__name">Natalia Malynovska</p>
    <p class="team__role">Developer</p>
  </li>
  <li class="team__item">
    <div class="team__wrapper">
      <img
        class="team__img"
        src="https://ca.slack-edge.com/T03ANNS1UBS-U03PJ16BLQ2-13fdebbd13dc-512"
        alt="Alyona Garnyk"
      />
    </div>
    <p class="team__name">Alyona Garnyk</p>
    <p class="team__role">Mentor</p>
  </li>
</ul>; */
