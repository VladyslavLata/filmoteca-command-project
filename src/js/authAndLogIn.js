import { initializeApp } from 'firebase/app';
import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

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
// writeTestCollectionFunction();

// ------------------------------------------------------------------------------------------------
// const firestore = getFirestore(firebaseApp);

// const libraryCollection = doc(firestore, 'watched/watched');

// export async function writeTestCollectionFunction() {
//   try {
//     const watchedEN = JSON.parse(
//       localStorage.getItem('themovie-watched-EN-lib')
//     );
//     const watchedUA = JSON.parse(
//       localStorage.getItem('themovie-watched-UA-lib')
//     );
//     const queueEN = JSON.parse(localStorage.getItem('themovie-queue-EN-lib'));
//     const queueUA = JSON.parse(localStorage.getItem('themovie-queue-UA-lib'));
//     const docData = {
//       watchedEN,
//       watchedUA,
//       queueEN,
//       queueUA,
//     };
//     setDoc(libraryCollection, docData);
//   } catch (error) {
//     console.error('Error adding document: ', error);
//   }
// }

// // export async function readThemeDocument() {
// //   const mySnapshot = await getDoc(libraryCollection);
// //   if (mySnapshot.exists()) {
// //     const docData = mySnapshot.data();
// //     console.log('My Data: ', docData.watchedEN);
// //     // return docData.switchMode;
// //   }
// // }

// export async function listenTowatchedEn() {
//   onSnapshot(libraryCollection, docSnapshot => {
//     if (docSnapshot.exists()) {
//       const docWatchedEn = docSnapshot.data().watchedEN;
//       console.log('EN: ', docWatchedEn);
//       return docWatchedEn;
//     }
//   });
// }
// export async function listenTowatchedUa() {
//   onSnapshot(libraryCollection, docSnapshot => {
//     if (docSnapshot.exists()) {
//       const docWatchedUa = docSnapshot.data().watchedUA;
//       console.log('UA: ', docWatchedUa);
//       return docWatchedUa;
//     }
//   });
// }
// export async function listenToQueueEn() {
//   onSnapshot(libraryCollection, docSnapshot => {
//     if (docSnapshot.exists()) {
//       const docQueueEn = docSnapshot.data().queueEN;
//       console.log('EN: ', docQueueEn);
//       return docQueueEn;
//     }
//   });
// }
// export async function listenToQueueUa() {
//   onSnapshot(libraryCollection, docSnapshot => {
//     if (docSnapshot.exists()) {
//       const docQueueUa = docSnapshot.data().queueUA;
//       console.log('UA: ', docQueueUa);
//       return docQueueUa;
//     }
//   });
// }

// listenTowatchedEn();
// listenTowatchedUa();
// listenToQueueEn();
// listenToQueueUa();

// -------------------------------------------------------------------------------------------------

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
      if (refs.checkbox.checked) {
        localStorage.setItem(LS_LOGIN_KEY, `${username}`);
      } else if (!refs.checkbox.checked) {
        sessionStorage.setItem(LS_LOGIN_KEY, `${username}`);
      }
      refs.loginHeaderBtn.textContent = 'Log Out';
      refs.usernick.textContent = `${username}`;
      console.log(username);
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
  });
}

const logout = async () => {
  await signOut(auth);
  if (refs.libGallery) {
    // refs.emptyLibText.style.display = 'flex';
    refs.libGallery.style.display = 'none';
  }
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
