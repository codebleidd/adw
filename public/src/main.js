// Require Configuration
requirejs.config({
  baseUrl: 'lib/',
  paths: {
    app: '../app',
    helpers: '../src/helpers',
    firebase: 'https://www.gstatic.com/firebasejs/3.6.4/firebase',
    jquery : 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
    angular : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min',
    angularFire: 'https://cdn.firebase.com/libs/angularfire/2.2.0/angularfire.min'
  },
  shim: {
    angular : {'exports' : 'angular'},
    firebase: {
      exports: 'firebase'
    },
    bootstrap : { "deps" :['jquery'] }
  }
});



requirejs(['firebase', 'helpers/firebase_config', 'jquery', 'bootstrap'], function (firebase, firebaseConfig, $, bootstrap) {
  firebase.initializeApp(firebaseConfig.config);
  // requirejs(['angular'], function (angular) {
  //   requirejs(['angularFire'], function (angularFire) {
  //     // requirejs(['app/MKApp.module'], function (MKApp) {
  //       requirejs(['app/public/MKApp.controller'], function () {
  //         angular.bootstrap(document, ['MKApp'])
  //       });
  //     // });
  //   });
  // });
});
