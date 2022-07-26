import { initializeApp } from 'firebase/app';
import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, set, ref, child, update, get } from 'firebase/database';
import Swal from 'sweetalert2';
import { keyLS, getLanguageFromLS } from './languageSwitch';
import { onLoginOpen } from './switchSignInForms';
import { Movie } from './fetchMovie';

const refs = {
  body: document.querySelector('body'),
  libBtnheader: document.querySelector('.site-nav__item--library__header'),
  libGallery: document.querySelector('.gallery-library'),
  loginForm: document.querySelector('.login__form'),
  loginUsername: document.querySelector('#login-username'),
  loginEmailInput: document.querySelector('#login-email'),
  loginPasswordInput: document.querySelector('#login-password'),
  signupEmailInput: document.querySelector('#signup-email'),
  signupPasswordInput: document.querySelector('#signup-password'),
  loginBtn: document.querySelector('#login__button'),
  loginHeaderBtn: document.querySelector('.login__button'),
  signupBtn: document.querySelector('#signup__button'),
  signupBtnHeader: document.querySelector('.signup__button'),
  logoutBtn: document.querySelector('#logout__button'),
  logoutText: document.querySelector('.logout-modal__text'),
  logoutModal: document.querySelector('.logout-modal'),
  usernick: document.querySelector('.user-nick'),
};

const {
  body,
  libBtnheader,
  libGallery,
  loginForm,
  loginUsername,
  loginEmailInput,
  loginPasswordInput,
  signupEmailInput,
  signupPasswordInput,
  loginBtn,
  loginHeaderBtn,
  signupBtn,
  signupBtnHeader,
  logoutBtn,
  logoutText,
  logoutModal,
  usernick,
} = refs;

export const LS_LOGIN_KEY = 'keep_logged_as';
export const LS_UID_VALUE = 'UID';

sessionStorage.removeItem(LS_LOGIN_KEY);

checkIfLogged();

const firebaseConfig = {
  apiKey: 'AIzaSyDI06G7ldPdrMhSq-FyX2L15PRQF0jVleY',
  authDomain: 'filmoteka-project-f50cc.firebaseapp.com',
  databaseURL: 'https://filmoteka-project-f50cc-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-project-f50cc',
  storageBucket: 'filmoteka-project-f50cc.appspot.com',
  messagingSenderId: '744226297338',
  appId: '1:744226297338:web:8ad6c2023b760eb61bc043',
};

export const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

function writeUserData(userId, name, email) {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email,
    watchedEN: '',
    watchedUA: '',
    queueEN: '',
    queueUA: '',
  });
}

function getDataFromDatabase(userId) {
  const databaseRef = ref(getDatabase(firebaseApp));
  get(child(databaseRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        const dataFromFirebaseWatchedUA = snapshot.val().watchedUA;
        const dataFromFirebaseWatchedEN = snapshot.val().watchedEN;
        const dataFromFirebaseQueueUA = snapshot.val().queueUA;
        const dataFromFirebaseQueueEN = snapshot.val().queueEN;
        localStorage.setItem(
          keyLS.LS_WATHED_UA_DATA_KEY,
          JSON.stringify(dataFromFirebaseWatchedUA)
        );
        localStorage.setItem(
          keyLS.LS_WATHED_EN_DATA_KEY,
          JSON.stringify(dataFromFirebaseWatchedEN)
        );
        localStorage.setItem(
          keyLS.LS_QUEUE_UA_DATA_KEY,
          JSON.stringify(dataFromFirebaseQueueUA)
        );
        localStorage.setItem(
          keyLS.LS_QUEUE_EN_DATA_KEY,
          JSON.stringify(dataFromFirebaseQueueEN)
        );
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export async function updateUserData(userUID) {
  let watchedEN = localStorage.getItem('themovie-watched-EN-lib');
  let watchedUA = localStorage.getItem('themovie-watched-UA-lib');
  let queueEN = localStorage.getItem('themovie-queue-EN-lib');
  let queueUA = localStorage.getItem('themovie-queue-UA-lib');
  const updates = {};
  if (watchedEN.length !== 2) {
    watchedEN = JSON.parse(watchedEN);
  }
  if (watchedUA.length !== 2) {
    watchedUA = JSON.parse(watchedUA);
  }
  if (queueEN.length !== 2) {
    queueEN = JSON.parse(queueEN);
  }
  if (queueUA.length !== 2) {
    queueUA = JSON.parse(queueUA);
  }

  if (watchedEN.length > 0) {
    updates['/users/' + userUID + '/' + 'watchedEN'] = watchedEN;
  }
  if (watchedEN.length == 2 && typeof watchedEN === 'string') {
    updates['/users/' + userUID + '/' + 'watchedEN'] = '';
  }
  if (watchedUA.length > 0) {
    updates['/users/' + userUID + '/' + 'watchedUA'] = watchedUA;
  }
  if (watchedUA.length == 2 && typeof watchedUA === 'string') {
    updates['/users/' + userUID + '/' + 'watchedUA'] = '';
  }
  if (queueEN.length > 0) {
    updates['/users/' + userUID + '/' + 'queueEN'] = queueEN;
  }
  if (queueEN.length == 2 && typeof queueEN === 'string') {
    updates['/users/' + userUID + '/' + 'queueEN'] = '';
  }
  if (queueUA.length > 0) {
    updates['/users/' + userUID + '/' + 'queueUA'] = queueUA;
  }
  if (queueUA.length == 2 && typeof queueUA === 'string') {
    updates['/users/' + userUID + '/' + 'queueUA'] = '';
  }
  return update(ref(database), updates);
}

async function accountCreatedMessage() {
  const lang = await getLanguageFromLS();
  if (lang === Movie.language.ENGLISH) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Success!',
      text: 'You are signed up now. Please, log in.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Success!',
        text: 'You are signed up now. Please, log in.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
  }
  if (lang === Movie.language.UKRAINIAN) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Супер!',
      text: 'Обліковий запис створено. Будь ласка, зайдіть у свій акаунт.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Супер!',
        text: 'Обліковий запис створено. Будь ласка, зайдіть у свій акаунт.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
  }
}

const createAccount = async e => {
  const signupEmail = signupEmailInput.value;
  const signupPassword = signupPasswordInput.value;
  loginEmailInput.value = signupEmail;
  loginPasswordInput.value = signupPassword;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );
    writeUserData(
      userCredential.user.uid,
      userCredential.user.displayName,
      userCredential.user.email
    );
    onLoginOpen();
    accountCreatedMessage();
    resetSignup();
  } catch (error) {
    showLoginError(error);
  }
};

signupBtn.addEventListener('click', createAccount);

async function longUsernameMessage() {
  const lang = await getLanguageFromLS();
  if (lang === Movie.language.ENGLISH) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Warning!',
      text: 'Your nickname is too long. Make it 15 characters maximum.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Warning!',
        text: 'Your nickname is too long. Make it 15 characters maximum.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }
  if (lang === Movie.language.UKRAINIAN) {
    Swal.fire({
      confirmButtonColor: '#ff6b01',
      background: '#303030',
      color: '#ffffff',
      title: 'Ой!',
      text: 'Нікнейм має бути максимум 15 символів.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    if (!body.classList.contains('dark__theme')) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        title: 'Ой!',
        text: 'Нікнейм має бути максимум 15 символів.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }
}

const loginEmailPassword = async () => {
  const loginEmail = loginEmailInput.value;
  const loginPassword = loginPasswordInput.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    if (loginUsername.value.length > 15) {
      longUsernameMessage();
    } else {
      userCredential.user.displayName = loginUsername.value;
      const username = userCredential.user.displayName;
      const userUID = userCredential.user.uid;
      localStorage.setItem(LS_LOGIN_KEY, `${username}`);
      localStorage.setItem(LS_UID_VALUE, `${userUID}`);
      currentLangLogOut();
      signupBtnHeader.style.display = 'none';
      usernick.textContent = `${username}`;
      libBtnheader.style.display = 'block';
      console.log(username);
      getDataFromDatabase(userUID);
      monitorAuthState();
      resetLogin();
    }
  } catch (error) {
    showLoginError(error);
  }
};

async function showLoginError(error) {
  const lang = await getLanguageFromLS();
  if (lang === Movie.language.ENGLISH) {
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        background: '#303030',
        color: '#ffffff',
        title: 'Error!',
        text: 'Wrong password. Try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    if (error.code == AuthErrorCodes.EMAIL_EXISTS) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        background: '#303030',
        color: '#ffffff',
        title: 'Error!',
        text: `This email is already in use.`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    if (error.code == AuthErrorCodes.USER_DELETED) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        background: '#303030',
        color: '#ffffff',
        title: 'Error!',
        text: `User is not found.`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    if (!body.classList.contains('dark__theme')) {
      if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        Swal.fire({
          confirmButtonColor: '#ff6b01',
          title: 'Error!',
          text: 'Wrong password. Try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
      if (error.code == AuthErrorCodes.EMAIL_EXISTS) {
        Swal.fire({
          confirmButtonColor: '#ff6b01',
          title: 'Error!',
          text: `This email is already in use.`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
      if (error.code == AuthErrorCodes.USER_DELETED) {
        Swal.fire({
          confirmButtonColor: '#ff6b01',
          title: 'Error!',
          text: `User is not found.`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  }
  if (lang === Movie.language.UKRAINIAN) {
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        background: '#303030',
        color: '#ffffff',
        title: 'Помилка!',
        text: 'Неправильний пароль. Спробуйте ще раз.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    if (error.code == AuthErrorCodes.EMAIL_EXISTS) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        background: '#303030',
        color: '#ffffff',
        title: 'Помилка!',
        text: `Ця пошта вже використовується.`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    if (error.code == AuthErrorCodes.USER_DELETED) {
      Swal.fire({
        confirmButtonColor: '#ff6b01',
        background: '#303030',
        color: '#ffffff',
        title: 'Error!',
        text: `Користувача не знайдено.`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    if (!body.classList.contains('dark__theme')) {
      if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        Swal.fire({
          confirmButtonColor: '#ff6b01',
          title: 'Помилка!',
          text: 'Неправильний пароль. Спробуйте ще раз.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
      if (error.code == AuthErrorCodes.EMAIL_EXISTS) {
        Swal.fire({
          confirmButtonColor: '#ff6b01',
          title: 'Помилка!',
          text: `Ця пошта вже використовується.`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
      if (error.code == AuthErrorCodes.USER_DELETED) {
        Swal.fire({
          confirmButtonColor: '#ff6b01',
          title: 'Помилка!',
          text: `Користувача не знайдено.`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  }
}

loginBtn.addEventListener('click', loginEmailPassword);

async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    const username = localStorage.getItem(LS_LOGIN_KEY);
    const usernameSS = sessionStorage.getItem(LS_LOGIN_KEY);
    if (libGallery) {
      libGallery.style.display = 'flex';
    }
    if (username) {
      loginForm.classList.add('logout-modal--hidden');
      logoutModal.classList.remove('logout-modal--hidden');
      logoutText.innerHTML = `You are logged in as ${username}`;
    }
  });
}

const logout = async () => {
  await signOut(auth);
  if (
    window.location.pathname === '/library.html' ||
    window.location.pathname === '/filmoteka-project/library.html'
  ) {
    window.location = 'index.html';
  }
  if (libGallery) {
    libGallery.style.display = 'none';
  }
  localStorage.removeItem(keyLS.LS_WATHED_UA_DATA_KEY);
  localStorage.removeItem(keyLS.LS_WATHED_EN_DATA_KEY);
  localStorage.removeItem(keyLS.LS_QUEUE_UA_DATA_KEY);
  localStorage.removeItem(keyLS.LS_QUEUE_EN_DATA_KEY);
  localStorage.removeItem(LS_LOGIN_KEY);
  currentLangLogIn();
  signupBtnHeader.style.display = 'inline-block';
  libBtnheader.style.display = 'none';
  usernick.textContent = ``;
  loginForm.classList.remove('logout-modal--hidden');
  logoutModal.classList.add('logout-modal--hidden');
};

logoutBtn.addEventListener('click', logout);

function checkIfLogged() {
  const username = localStorage.getItem(LS_LOGIN_KEY);
  const usernameSS = sessionStorage.getItem(LS_LOGIN_KEY);
  if (username || usernameSS) {
    libBtnheader.style.display = 'block';
    signupBtnHeader.style.display = 'none';
    if (libGallery) {
      libGallery.style.display = 'flex';
    }
    loginForm.classList.add('logout-modal--hidden');
    logoutModal.classList.remove('logout-modal--hidden');
    currentLangLogOut();
    usernick.textContent = `${username}`;
    logoutText.innerHTML = `You are logged in as ${username}`;
  } else {
    libBtnheader.style.display = 'none';
    if (libGallery) {
      libGallery.style.display = 'none';
    }
    signupBtnHeader.style.display = 'inline-block';
    loginForm.classList.remove('logout-modal--hidden');
    logoutModal.classList.add('logout-modal--hidden');
    currentLangLogIn();
    usernick.textContent = ``;
  }
}

function resetLogin() {
  loginUsername.value = '';
  loginEmailInput.value = '';
  loginPasswordInput.value = '';
}

function resetSignup() {
  signupPasswordInput.value = '';
  signupEmailInput.value = '';
}

async function currentLangLogIn() {
  const lang = await getLanguageFromLS();
  if (lang === 'en-US') {
    return (loginHeaderBtn.textContent = 'Log In');
  } else {
    return (loginHeaderBtn.textContent = 'Вхід');
  }
}

async function currentLangLogOut() {
  const lang = await getLanguageFromLS();
  if (lang === 'en-US') {
    return (loginHeaderBtn.textContent = 'Log Out');
  } else {
    return (loginHeaderBtn.textContent = 'Вихід');
  }
}
