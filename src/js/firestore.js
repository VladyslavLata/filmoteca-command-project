import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { firebaseApp } from './authAndLogIn';

const firestore = getFirestore(firebaseApp);

const libraryCollection = doc(firestore, 'watched/watched');

export async function writeTestCollectionFunction() {
  try {
    const watchedEN = JSON.parse(
      localStorage.getItem('themovie-watched-EN-lib')
    );
    const watchedUA = JSON.parse(
      localStorage.getItem('themovie-watched-UA-lib')
    );
    const queueEN = JSON.parse(localStorage.getItem('themovie-queue-EN-lib'));
    const queueUA = JSON.parse(localStorage.getItem('themovie-queue-UA-lib'));
    const docData = {
      watchedEN,
      watchedUA,
      queueEN,
      queueUA,
    };
    setDoc(libraryCollection, docData);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

export async function listenTowatchedEn() {
  onSnapshot(libraryCollection, docSnapshot => {
    if (docSnapshot.exists()) {
      const docWatchedEn = docSnapshot.data().watchedEN;
      //   console.log('watchedEN: ', docWatchedEn);
      return docWatchedEn;
    }
  });
}
export async function listenTowatchedUa() {
  onSnapshot(libraryCollection, docSnapshot => {
    if (docSnapshot.exists()) {
      const docWatchedUa = docSnapshot.data().watchedUA;
      //   console.log('watchedUA: ', docWatchedUa);
      return docWatchedUa;
    }
  });
}
export async function listenToQueueEn() {
  onSnapshot(libraryCollection, docSnapshot => {
    if (docSnapshot.exists()) {
      const docQueueEn = docSnapshot.data().queueEN;
      //   console.log('watchedEN: ', docQueueEn);
      return docQueueEn;
    }
  });
}
export async function listenToQueueUa() {
  onSnapshot(libraryCollection, docSnapshot => {
    if (docSnapshot.exists()) {
      const docQueueUa = docSnapshot.data().queueUA;
      //   console.log('watchedUA: ', docQueueUa);
      return docQueueUa;
    }
  });
}

listenTowatchedEn();
listenTowatchedUa();
listenToQueueEn();
listenToQueueUa();
