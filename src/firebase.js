import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvkP45-y3YH2IZw5F9TSQupV0PyK1HNBw",
  authDomain: "tinder-clone-b5d28.firebaseapp.com",
  databaseURL: "https://tinder-clone-b5d28.firebaseio.com",
  projectId: "tinder-clone-b5d28",
  storageBucket: "tinder-clone-b5d28.appspot.com",
  messagingSenderId: "1089886954939",
  appId: "1:1089886954939:web:ba5ea139af51dac539509e",
  measurementId: "G-6TKKF2R5C3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
