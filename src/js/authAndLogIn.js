import { initializeApp } from 'firebase/app';
import {
  AuthErrorCodes,
  getAuth,
  //   connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const refs = {
  //   signupForm: document.querySelector('.sign-up__form'),
  loginForm: document.querySelector('.login__form'),
  loginUsername: document.querySelector('#login-username'),
  //   name: document.querySelector('#nameInp'),
  loginEmail: document.querySelector('#login-email'),
  signupEmail: document.querySelector('#signup-email'),
  //   username: document.querySelector('#userInp'),
  loginPassword: document.querySelector('#login-password'),
  signupPassword: document.querySelector('#signup-password'),
  loginBtn: document.querySelector('#login__button'),
  signupBtn: document.querySelector('#signup__button'),
  logoutBtn: document.querySelector('#logout__button'),
  logoutText: document.querySelector('.logout-modal__text'),
  logoutModal: document.querySelector('.logout-modal'),
  checkbox: document.querySelector('.form-check-input'),
};

export const LS_LOGIN_KEY = 'keep_logged_as';

// console.log(refs.checkbox.checked);
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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, 'http://localhost:9099');

const loginEmailPassword = async () => {
  const loginEmail = refs.loginEmail.value;
  const loginPassword = refs.loginPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    userCredential.user.displayName = refs.loginUsername.value;
    const username = userCredential.user.displayName;
    // if (refs.checkbox.checked) {
    localStorage.setItem(LS_LOGIN_KEY, `${username}`);
    // } else if (!refs.checkbox.checked) {
    //   localStorage.removeItem(LS_LOGIN_KEY);
    // }
    console.log(username);
    monitorAuthState();
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

const createAccount = async () => {
  const signupEmail = refs.signupEmail.value;
  const signupPassword = refs.signupPassword.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );
    alert('You are signed up now');
  } catch (error) {
    showLoginError(error);
  }
};

refs.signupBtn.addEventListener('click', createAccount);

async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    const username = localStorage.getItem(LS_LOGIN_KEY);
    // if (user) {
    //   refs.logoutText.innerHTML = `You are logged in as ${username}`;
    // }
    // if (!user) {
    //   refs.loginForm.classList.remove('logout-modal--hidden');
    //   refs.logoutModal.classList.add('logout-modal--hidden');
    // }
    if (username) {
      refs.loginForm.classList.add('logout-modal--hidden');
      refs.logoutModal.classList.remove('logout-modal--hidden');
      refs.logoutText.innerHTML = `You are logged in as ${username}`;
    }
    // if (user && !username) {
    //   refs.loginForm.classList.add('logout-modal--hidden');
    //   refs.logoutModal.classList.remove('logout-modal--hidden');
    //   refs.logoutText.innerHTML = `You are logged in as ${user.displayName}`;
    // }
  });
}

// monitorAuthState();

const logout = async () => {
  await signOut(auth);
  localStorage.removeItem(LS_LOGIN_KEY);
  refs.loginForm.classList.remove('logout-modal--hidden');
  refs.logoutModal.classList.add('logout-modal--hidden');
  alert("You're not logged in anymore");
};

refs.logoutBtn.addEventListener('click', logout);

function checkIfLogged() {
  const username = localStorage.getItem(LS_LOGIN_KEY);
  if (username) {
    refs.loginForm.classList.add('logout-modal--hidden');
    refs.logoutModal.classList.remove('logout-modal--hidden');
    refs.logoutText.innerHTML = `You are logged in as ${username}`;
  } else {
    refs.loginForm.classList.remove('logout-modal--hidden');
    refs.logoutModal.classList.add('logout-modal--hidden');
  }
}
