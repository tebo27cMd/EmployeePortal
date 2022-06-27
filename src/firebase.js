import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOE51cHJ75ghNvMCTVG-BqY-jsYxgw3BM",
  authDomain: "employee-portal-d423d.firebaseapp.com",
  databaseURL: "https://employee-portal-d423d-default-rtdb.firebaseio.com",
  projectId: "employee-portal-d423d",
  storageBucket: "employee-portal-d423d.appspot.com",
  messagingSenderId: "85074183499",
  appId: "1:85074183499:web:938bb51a544e6f1396d4ce"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
