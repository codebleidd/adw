import firebase from 'firebase';
import angular from 'angular';
import mkApp from 'App/MKApp.module.js';
import 'bootstrap/dist/js/bootstrap';

var FirebaseConfig = {
  apiKey: "AIzaSyAh6tPdOSKC9Hj99o02gNzGpP81o5sJxFY",
  authDomain: "magda-2a047.firebaseapp.com",
  databaseURL: "https://magda-2a047.firebaseio.com",
  storageBucket: "magda-2a047.appspot.com",
  messagingSenderId: "910866743622"

};

firebase.initializeApp(FirebaseConfig);
angular.bootstrap(document.getElementsByTagName("body")[0], [mkApp]);
