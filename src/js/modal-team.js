import { getLanguageFromLS } from './languageSwitch';
import { Movie } from './fetchMovie';

const team = document.querySelector('.footer-text__link');
const backdropTeam = document.querySelector('.backdrop-team');
const closeTeam = document.querySelector('.modal-team__button');
const body = document.querySelector('body');
const modalTeam = document.querySelector('.modal-team__container');
const heartIcon = document.querySelector('.footer-text__icon');

const ref = {
  lead: document.querySelector('.js-role-lead'),
  scrum: document.querySelector('.js-role-scrum'),
  developer: document.querySelectorAll('.js-role-developer'),
  mentor: document.querySelector('.js-role-mentor'),

  sainchuk: document.querySelector('.js-name-sainchuk'),
  kurka: document.querySelector('.js-name-kurka'),
  tikka: document.querySelector('.js-name-tikka'),
  velychko: document.querySelector('.js-name-velychko'),
  tsiukh: document.querySelector('.js-name-tsiukh'),
  boiko: document.querySelector('.js-name-boiko'),
  konovalova: document.querySelector('.js-name-konovalova'),
  lata: document.querySelector('.js-name-lata'),
  muzalevskiy: document.querySelector('.js-name-muzalevskiy'),
  diachenko: document.querySelector('.js-name-diachenko'),
  malynovska: document.querySelector('.js-name-malynovska'),
  garnyk: document.querySelector('.js-name-garnyk'),

  imgSainchuk: document.querySelector('.team__img-js-sainchuk'),
  imgKurka: document.querySelector('.team__img-js-kurka'),
  imgTikka: document.querySelector('.team__img-js-tikka'),
  imgVelychko: document.querySelector('.team__img-js-velychko'),
  imgTsiukh: document.querySelector('.team__img-js-tsiukh'),
  imgBoiko: document.querySelector('.team__img-js-boiko'),
  imgKonovalova: document.querySelector('.team__img-js-konovalova'),
  imgLata: document.querySelector('.team__img-js-lata'),
  imgMuzalevskiy: document.querySelector('.team__img-js-muzalevskiy'),
  imgDiachenko: document.querySelector('.team__img-js-diachenko'),
  imgMalynovska: document.querySelector('.team__img-js-malynovska'),
  imgGarnyk: document.querySelector('.team__img-js-garnyk'),
};

team.addEventListener('click', onTeamClick);
closeTeam.addEventListener('click', onCloseTeamClick);
backdropTeam.addEventListener('click', onCloseClickBackdrop);

function onTeamClick(e) {
  e.preventDefault();
  backdropTeam.classList.remove('is-hidden');
  body.classList.add('modal-open');
  modalTeamMarkup();
  heartIcon.classList.remove('animate__heartBeat');

  if (e.target !== e.currentTarget) {
    window.addEventListener('keydown', onEscKeyPress);
    body.classList.add('modal-open');
    backdropTeam.classList.remove('is-hidden');
  }
}

function onCloseTeamClick(e) {
  window.removeEventListener('keydown', onEscKeyPress);
  backdropTeam.classList.add('is-hidden');
  body.classList.remove('modal-open');
  heartIcon.classList.add('animate__heartBeat');
}

function onCloseClickBackdrop(e) {
  if (e.target == e.currentTarget) {
    body.classList.remove('modal-open');
    backdropTeam.classList.add('is-hidden');
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseTeamClick();
    console.log('yup');
  }
}

function modalTeamMarkup() {
  const currentLanguage = getLanguageFromLS();
  let langUS = currentLanguage === Movie.language.ENGLISH;
  let teamLead = langUS ? 'Team Lead' : 'Лідер команди';
  let scrumMaster = langUS ? 'Scrum master' : 'Скрам-майстер';
  let developer = langUS ? 'Developer' : 'Розробник';
  let mentor = langUS ? 'Mentor' : 'Ментор';
  let sainchuk = langUS ? 'Oleksandr Sainchuk' : 'Олександр Саінчук';
  let kurka = langUS ? 'Andrii Kurka' : 'Андрій Курка';
  let tikka = langUS ? 'Oleksandr Tikka' : 'Олександр Тікка';
  let velychko = langUS ? 'Svitlana Velychko' : 'Світлана Величко';
  let tsiukh = langUS ? 'Roman Tsiukh' : 'Роман Цюх';
  let boiko = langUS ? 'Serhii Boiko' : 'Сергій Бойко';
  let konovalova = langUS ? 'Kateryna Konovalova' : 'Катерина Коновалова';
  let lata = langUS ? 'Vladyslav Lata' : 'Владислав Лата';
  let muzalevskiy = langUS ? 'Evgeniy Muzalevskiy' : 'Євген Музалевський';
  let diachenko = langUS ? 'Olena Diachenko' : 'Олена Дяченко';
  let malynovska = langUS ? 'Natalia Malynovska' : 'Наталя Малиновська';
  let garnyk = langUS ? 'Alyona Garnyk' : 'Альона Гарнюк';
  let photoWith = langUS ? 'photo with' : 'на фото';

  ref.lead.textContent = teamLead;
  ref.scrum.textContent = scrumMaster;
  ref.mentor.textContent = mentor;
  ref.sainchuk.textContent = sainchuk;
  ref.kurka.textContent = kurka;
  ref.tikka.textContent = tikka;
  ref.velychko.textContent = velychko;
  ref.tsiukh.textContent = tsiukh;
  ref.boiko.textContent = boiko;
  ref.konovalova.textContent = konovalova;
  ref.lata.textContent = lata;
  ref.muzalevskiy.textContent = muzalevskiy;
  ref.diachenko.textContent = diachenko;
  ref.malynovska.textContent = malynovska;
  ref.garnyk.textContent = garnyk;
  ref.developer.forEach(item => {
    item.textContent = developer;
  });
  ref.imgSainchuk.alt = `${photoWith} ${sainchuk}`;
  ref.imgKurka.alt = `${photoWith} ${kurka}`;
  ref.imgTikka.alt = `${photoWith} ${tikka}`;
  ref.imgVelychko.alt = `${photoWith} ${velychko}`;
  ref.imgTsiukh.alt = `${photoWith} ${tsiukh}`;
  ref.imgBoiko.alt = `${photoWith} ${boiko}`;
  ref.imgKonovalova.alt = `${photoWith} ${konovalova}`;
  ref.imgLata.alt = `${photoWith} ${lata}`;
  ref.imgMuzalevskiy.alt = `${photoWith} ${muzalevskiy}`;
  ref.imgDiachenko.alt = `${photoWith} ${diachenko}`;
  ref.imgMalynovska.alt = `${photoWith} ${malynovska}`;
  ref.imgGarnyk.alt = `${photoWith} ${garnyk}`;
}
