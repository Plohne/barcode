// src/js/services/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Storage disabled - requires Blaze plan
// import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjy-l_Dvni2_lTQfZveje9_CSTKB93yD4",
  authDomain: "barcode-fridge-inventory.firebaseapp.com",
  projectId: "barcode-fridge-inventory",
  storageBucket: "barcode-fridge-inventory.firebasestorage.app",
  messagingSenderId: "131520306288",
  appId: "1:131520306288:web:ef5e27452ef3793de8e8b5",
  measurementId: "G-7FFVDF1ECB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
// Storage disabled - requires Blaze plan
// export const storage = getStorage(app);

// Auto sign-in anonymously
let authInitialized = false;
let authReadyResolve;
const authReadyPromise = new Promise((resolve) => {
  authReadyResolve = resolve;
});

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    // No user, sign in anonymously
    try {
      await signInAnonymously(auth);
      console.log('Signed in anonymously');
    } catch (error) {
      console.error('Anonymous sign-in failed:', error);
    }
  } else {
    console.log('User authenticated:', user.uid);
  }
  authInitialized = true;
  authReadyResolve(user);
});

// Wait for auth to be ready
export const waitForAuth = () => authReadyPromise;

// Initialize function for explicit initialization
export async function initializeFirebase() {
  await waitForAuth();
  return { app, auth, db };
}

export default app;
