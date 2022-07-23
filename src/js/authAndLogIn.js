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
import { keyLS } from './languageSwitch';

const refs = {
  emptyLibText: document.querySelector('.not-logged-gallery'),
  libContainer: document.querySelector('.container-library'),
  libGallery: document.querySelector('.gallery-library'),
  loginForm: document.querySelector('.login__form'),
  loginUsername: document.querySelector('#login-username'),
  loginEmail: document.querySelector('#login-email'),
  loginPassword: document.querySelector('#login-password'),
  signupEmail: document.querySelector('#signup-email'),
  signupPassword: document.querySelector('#signup-password'),
  loginBtn: document.querySelector('#login__button'),
  loginHeaderBtn: document.querySelector('.login__button'),
  signupBtn: document.querySelector('#signup__button'),
  logoutBtn: document.querySelector('#logout__button'),
  logoutText: document.querySelector('.logout-modal__text'),
  logoutModal: document.querySelector('.logout-modal'),
  checkbox: document.querySelector('.form-check-input'),
  usernick: document.querySelector('.user-nick'),
};

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
      // console.log(snapshot.exists());
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
  const watchedEN = JSON.parse(localStorage.getItem('themovie-watched-EN-lib'));
  const watchedUA = JSON.parse(localStorage.getItem('themovie-watched-UA-lib'));
  const queueEN = JSON.parse(localStorage.getItem('themovie-queue-EN-lib'));
  const queueUA = JSON.parse(localStorage.getItem('themovie-queue-UA-lib'));
  const updates = {};
  updates['/users/' + userUID + '/' + 'watchedEN'] = watchedEN;
  updates['/users/' + userUID + '/' + 'watchedUA'] = watchedUA;
  updates['/users/' + userUID + '/' + 'queueEN'] = queueEN;
  updates['/users/' + userUID + '/' + 'queueUA'] = queueUA;
  return update(ref(database), updates);
}
// ----------------------------------------------------------------------------------
const loginEmailPassword = async () => {
  const loginEmail = refs.loginEmail.value;
  const loginPassword = refs.loginPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    if (refs.loginUsername.value.length > 9) {
      alert('Your nickname is too long. Make it 9 characters maximum.');
    } else {
      userCredential.user.displayName = refs.loginUsername.value;
      const username = userCredential.user.displayName;
      const userUID = userCredential.user.uid;
      if (refs.checkbox.checked) {
        localStorage.setItem(LS_LOGIN_KEY, `${username}`);
      } else if (!refs.checkbox.checked) {
        sessionStorage.setItem(LS_LOGIN_KEY, `${username}`);
      }
      localStorage.setItem(LS_UID_VALUE, `${userUID}`);
      refs.loginHeaderBtn.textContent = 'Log Out';
      refs.usernick.textContent = `${username}`;
      console.log(username);
      getDataFromDatabase(userUID);
      monitorAuthState();
      resetLogin();
    }
  } catch (error) {
    showLoginError(error);
  }
};

function showLoginError(error) {
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    alert('Wrong password. Try again.');
  } else {
    alert(`Error: ${error.message}`);
  }
}

refs.loginBtn.addEventListener('click', loginEmailPassword);

const createAccount = async e => {
  const signupEmail = refs.signupEmail.value;
  const signupPassword = refs.signupPassword.value;
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
    alert('You are signed up now');
    resetSignup();
  } catch (error) {
    showLoginError(error);
  }
};

refs.signupBtn.addEventListener('click', createAccount);

async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    const username = localStorage.getItem(LS_LOGIN_KEY);
    const usernameSS = sessionStorage.getItem(LS_LOGIN_KEY);
    if (refs.libGallery) {
      // refs.emptyLibText.style.display = 'none';
      refs.libGallery.style.display = 'flex';
    }
    if (username) {
      refs.loginForm.classList.add('logout-modal--hidden');
      refs.logoutModal.classList.remove('logout-modal--hidden');
      refs.logoutText.innerHTML = `You are logged in as ${username}`;
    }
    if (usernameSS) {
      refs.loginForm.classList.add('logout-modal--hidden');
      refs.logoutModal.classList.remove('logout-modal--hidden');
      refs.logoutText.innerHTML = `You are logged in as ${usernameSS}`;
    }
    // return user.uid;
  });
}

const logout = async () => {
  await signOut(auth);
  if (refs.libGallery) {
    // refs.emptyLibText.style.display = 'flex';
    refs.libGallery.style.display = 'none';
  }
  localStorage.removeItem(keyLS.LS_WATHED_UA_DATA_KEY);
  localStorage.removeItem(keyLS.LS_WATHED_EN_DATA_KEY);
  localStorage.removeItem(keyLS.LS_QUEUE_UA_DATA_KEY);
  localStorage.removeItem(keyLS.LS_QUEUE_EN_DATA_KEY);
  localStorage.removeItem(LS_LOGIN_KEY);
  refs.loginHeaderBtn.textContent = 'Log In';
  refs.usernick.textContent = ``;
  refs.loginForm.classList.remove('logout-modal--hidden');
  refs.logoutModal.classList.add('logout-modal--hidden');
  alert("You're not logged in anymore");
};

refs.logoutBtn.addEventListener('click', logout);

function checkIfLogged() {
  const username = localStorage.getItem(LS_LOGIN_KEY);
  const usernameSS = sessionStorage.getItem(LS_LOGIN_KEY);
  if (username || usernameSS) {
    if (refs.libGallery) {
      // refs.emptyLibText.style.display = 'none';
      refs.libGallery.style.display = 'flex';
    }
    refs.loginForm.classList.add('logout-modal--hidden');
    refs.logoutModal.classList.remove('logout-modal--hidden');
    refs.loginHeaderBtn.textContent = 'Log Out';
    refs.usernick.textContent = `${username}`;
    refs.logoutText.innerHTML = `You are logged in as ${username}`;
  } else {
    if (refs.libGallery) {
      // refs.emptyLibText.style.display = 'flex';
      refs.libGallery.style.display = 'none';
    }
    refs.loginForm.classList.remove('logout-modal--hidden');
    refs.logoutModal.classList.add('logout-modal--hidden');
    refs.loginHeaderBtn.textContent = 'Log In';
    refs.usernick.textContent = ``;
  }
}

function resetLogin() {
  refs.loginUsername.value = '';
  refs.loginEmail.value = '';
  refs.loginPassword.value = '';
  refs.checkbox.checked = false;
}

function resetSignup() {
  refs.signupPassword.value = '';
  refs.signupEmail.value = '';
}
