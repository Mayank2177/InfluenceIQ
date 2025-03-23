// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWIlIZAU_qwHkLWjaO-88Xsc9xUtDVCkY",
  authDomain: "influencer-ai-ab8fa.firebaseapp.com",
  projectId: "influencer-ai-ab8fa",
  storageBucket: "influencer-ai-ab8fa.firebasestorage.app",
  messagingSenderId: "868797395342",
  appId: "1:868797395342:web:14aa252730a7265cb834df",
  measurementId: "G-RKVL3VKL2T",
  databaseURL: "https://influencer-ai-ab8fa-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);