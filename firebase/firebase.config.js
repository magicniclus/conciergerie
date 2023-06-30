import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXZRlN4EMVqlz51LSiNODkHlrcJVkjNwc",
  authDomain: "conciergerie-3adc8.firebaseapp.com",
  databaseURL:
    "https://conciergerie-3adc8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "conciergerie-3adc8",
  storageBucket: "conciergerie-3adc8.appspot.com",
  messagingSenderId: "335932845266",
  appId: "1:335932845266:web:352fccb316b182df5bd10b",
};

// Initialize Firebase
let app;

// Vérifie si une application Firebase existe déjà
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Utilise l'application Firebase existante
}

const database = getDatabase(app);

export { database };
