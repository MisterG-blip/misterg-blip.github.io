import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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
const db = getDatabase(app);

function trackClick(gameId) {
  console.log("TRACK FUNCTION RUN:", gameId);
  const gameRef = ref(db, `games/${gameId}/views`);

  get(gameRef).then(snapshot => {
    const current = snapshot.val() || 0;
    set(gameRef, current + 1);
  });
}

export { db, trackClick };
