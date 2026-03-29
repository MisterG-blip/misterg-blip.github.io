import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYt2WNpUzYTwzc8l6rOkLeZyuP8ZfY61M",
  authDomain: "runners-game.firebaseapp.com",
  databaseURL: "https://runners-game-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "runners-game",
  storageBucket: "runners-game.firebasestorage.app",
  messagingSenderId: "917364422556",
  appId: "1:917364422556:web:94ebd6accfc3de06d9fa59",
  measurementId: "G-PM5D8E030C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);