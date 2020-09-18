import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCeitBfp7mmX42K5gKol-qXtsh9-XtJkkU",
  authDomain: "products-da210.firebaseapp.com",
  databaseURL: "https://products-da210.firebaseio.com",
  projectId: "products-da210",
  storageBucket: "products-da210.appspot.com",
  messagingSenderId: "488037656784",
  appId: "1:488037656784:web:ec2f75c9ef7cf6b7e9d6d5",
  measurementId: "G-8YG5LLVFFS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
