import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAeUX-kFewkaE3vJSoLsZgExwfvvOfijFI",
  authDomain: "vue-cart-fire-auth.firebaseapp.com",
  projectId: "vue-cart-fire-auth",
  storageBucket: "vue-cart-fire-auth.appspot.com",
  messagingSenderId: "244243796230",
  appId: "1:244243796230:web:826a2b036b444115258e87"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }