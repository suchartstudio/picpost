import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove, update, onChildAdded } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMptdLpLEdbeVFKZj82M0gyoV2m_2y5Pk",
  authDomain: "suchartstudio-9a78d.firebaseapp.com",
  databaseURL: "https://suchartstudio-9a78d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suchartstudio-9a78d",
  storageBucket: "suchartstudio-9a78d.firebasestorage.app",
  messagingSenderId: "953369646185",
  appId: "1:953369646185:web:018e66f489aad5356ebef8",
  measurementId: "G-J7M38HNDYD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, onValue, remove, update, onChildAdded };