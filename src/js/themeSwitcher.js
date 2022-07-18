const body = document.querySelector('body');
const iconLink = document.querySelector('.icon__button');
const iconSun = document.querySelector('.icon__sun');
const iconMoon = document.querySelector('.icon__moon');
// let darkMode = localStorage.getItem('dark-mode');
export const themeKey = {
  LS_KEY: 'theme-mode',
  LIGHT: 'light',
  DARK: 'dark',
};

iconLink.addEventListener('click', toggleTheme);

const enableDarkMode = () => {
  body.classList.add('dark__theme');
  iconMoon.classList.add('icon__item--hidden');
  iconSun.classList.remove('icon__item--hidden');
};

const enableLightMode = () => {
  body.classList.remove('dark__theme');
  iconMoon.classList.remove('icon__item--hidden');
  iconSun.classList.add('icon__item--hidden');
};

startTheme();

function toggleTheme(e) {
  const themeMode = localStorage.getItem(themeKey.LS_KEY);
  if (themeMode === themeKey.LIGHT) {
    enableDarkMode();
    localStorage.setItem(themeKey.LS_KEY, themeKey.DARK);
  } else {
    enableLightMode();
    localStorage.setItem(themeKey.LS_KEY, themeKey.LIGHT);
  }
}

function startTheme() {
  const themeMode = localStorage.getItem(themeKey.LS_KEY);
  if (!themeMode) {
    enableLightMode();
    localStorage.setItem(themeKey.LS_KEY, themeKey.LIGHT);
    return;
  }
  switch (themeMode) {
    case themeKey.LIGHT:
      enableLightMode();
      break;

    case themeKey.DARK:
      enableDarkMode();
      break;
  }
}

// const enableDarkMode = () => {
//   body.classList.add('dark__theme');
//   iconMoon.classList.add('icon__item--hidden');
//   iconSun.classList.remove('icon__item--hidden');
//   localStorage.setItem('dark-mode', 'enabled');
// };

// const disableDarkMode = () => {
//   body.classList.remove('dark__theme');
//   iconMoon.classList.remove('icon__item--hidden');
//   iconSun.classList.add('icon__item--hidden');
//   localStorage.setItem('dark-mode', 'disabled');
// };

// if (darkMode === 'enabled') {
//   enableDarkMode();
// }

// function toggleTheme(e) {
//   darkMode = localStorage.getItem('dark-mode');
//   if (darkMode === 'disabled') {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// }
