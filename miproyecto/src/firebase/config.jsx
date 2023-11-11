import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4JtKCNYD40KGhxlxyoXeS6kDiFQ8IGfI",
  authDomain: "miproyectoreact-e984d.firebaseapp.com",
  projectId: "miproyectoreact-e984d",
  storageBucket: "miproyectoreact-e984d.appspot.com",
  messagingSenderId: "467404976451",
  appId: "1:467404976451:web:59ba262ec978e7364e7ff6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);