const hiddenElement = document.querySelector('.scroll-area');
const goToBtn = document.querySelector('.up-btn');

    function handleButtonClick() {
        hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    goToBtn.addEventListener('click', handleButtonClick);


window.addEventListener('scroll', () => {
    if (scrollY > 300) {
        goToBtn.classList.remove('is-hidden');
    } else if (scrollY < 300) {
        goToBtn.classList.add('is-hidden')
    }
});


