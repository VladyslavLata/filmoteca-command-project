const team = document.querySelector('.footer-text__link');
const backdropTeam = document.querySelector('.backdrop-team');
const closeTeam = document.querySelector('.modal-team__button');

team.addEventListener('click', onTeamClick);
closeTeam.addEventListener('click', onCloseTeamClick);



function onTeamClick(e) {
    e.preventDefault();
    backdropTeam.classList.remove('is-hidden');

};

function onCloseTeamClick(e) {
    e.preventDefault();
    backdropTeam.classList.add('is-hidden');
    };