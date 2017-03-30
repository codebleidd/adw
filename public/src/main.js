// Require Configuration
// requirejs.config({
//   baseUrl: 'src/lib',
//   paths: {
//     'app': '../app',
//     'helpers': '../helpers',
//     'firebase': 'https://www.gstatic.com/firebasejs/3.6.4/firebase',
//     'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
//     'angular' : 'angularjs/angular.min',
//     'angularFire': 'angularjs/angularfire',
//     'uiRouter': 'angularjs/angular-ui',
//     'public': '../app/public',
//   },
//   shim: {
//     'angular' : {
//       'exports' : 'angular'
//     },
//     'angularFire': {
//       'deps': ['angular', 'firebase'],
//       'exports' : 'angularFire'
//     },
//     'uiRouter': {
//       'deps': ['angular'],
//       'exports' : 'uiRouter'
//     },
//     'firebase': {
//       'exports': 'firebase'
//     },
//     'bootstrap' : {
//       "deps": ['jquery']
//     }
//   }
// });
//
// requirejs(['jquery', 'bootstrap'], function (jquery, bootstrap) {
//
// });
//
// requirejs(['firebase', 'helpers/firebase_config', ], function (firebase, firebaseConfig) {
//   firebase.initializeApp(firebaseConfig.config);
//   requirejs(['app/mkApp.module'], function (mkApp) {
//     angular.bootstrap(document.getElementsByTagName("body")[0], [mkApp]);
//   });
// });
//
// require('angular');
// require('angular-ui-router');
// require('angularfire');
// var angular = require('angular');
// var MKApp = require('App/MKApp.module.js');
// var firebase = require('firebase');

import firebase from 'firebase';
import angular from 'angular';
import mkApp from 'App/MKApp.module.js';
// require('angularfire');

var FirebaseConfig = {
  apiKey: "AIzaSyAh6tPdOSKC9Hj99o02gNzGpP81o5sJxFY",
  authDomain: "magda-2a047.firebaseapp.com",
  databaseURL: "https://magda-2a047.firebaseio.com",
  storageBucket: "magda-2a047.appspot.com",
  messagingSenderId: "910866743622"
};

firebase.initializeApp(FirebaseConfig);

firebase.database().ref('/credentials/').once('value')
  .then(function (snapshot) {
    window.fbvar = snapshot.val();
  });
angular.bootstrap(document.getElementsByTagName("body")[0], [mkApp]);