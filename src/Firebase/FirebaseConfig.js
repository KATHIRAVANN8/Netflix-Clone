import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBIhBiO3flFpAcL2Fm_Ef22QQo6udFp5b4",
//   authDomain: "react-netflix-eb4f0.firebaseapp.com",
//   projectId: "react-netflix-eb4f0",
//   storageBucket: "react-netflix-eb4f0.appspot.com",
//   messagingSenderId: "29045190704",
//   appId: "1:29045190704:web:a7c74bd778aa5f993c7df5",
//   measurementId: "G-9TB7LL3YPM",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCzaK98Q8pxSY0GhDRqb-ziPj--p8SgGRk",
  authDomain: "netflix-clone-d62d9.firebaseapp.com",
  projectId: "netflix-clone-d62d9",
  storageBucket: "netflix-clone-d62d9.firebasestorage.app",
  messagingSenderId: "108650110329",
  appId: "1:108650110329:web:f964ca342fca31b9bb63a8",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);



