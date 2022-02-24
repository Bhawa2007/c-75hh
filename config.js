import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDoS5_C50gRi14F_tLObRspdZARiZrzOIs",
  authDomain: "bike-ri.firebaseapp.com",
  databaseURL: "https://bike-ri-default-rtdb.firebaseio.com",
  projectId: "bike-ri",
  storageBucket: "bike-ri.appspot.com",
  messagingSenderId: "525787277472",
  appId: "1:525787277472:web:1bf7f54f3f7315aa7701c5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
