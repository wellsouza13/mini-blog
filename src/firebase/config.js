import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8u6x1_sU-XUzXtf7Jg6Dy6I2yZFKluUQ",
  authDomain: "miniblog-97940.firebaseapp.com",
  projectId: "miniblog-97940",
  storageBucket: "miniblog-97940.appspot.com",
  messagingSenderId: "898648351785",
  appId: "1:898648351785:web:d376a4aedcc513c7966838",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
