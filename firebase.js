// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYN_eYuJ6mPQE1V1ab8x_qFvBAvqPYLCw",
  authDomain: "digital-comics-d2a2c.firebaseapp.com",
  projectId: "digital-comics-d2a2c",
  storageBucket: "digital-comics-d2a2c.appspot.com", // you had .app (small typo!)
  messagingSenderId: "40606952022",
  appId: "1:40606952022:web:8237cefa9b7bcfde3629f7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
