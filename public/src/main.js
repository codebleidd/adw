// Require Configuration
requirejs.config({
  baseUrl: 'src/lib',
  paths: {
    'app': '../app',
    'helpers': '../helpers',
    'firebase': 'https://www.gstatic.com/firebasejs/3.6.4/firebase',
    'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
    'angular' : 'angularjs/angular',
    'angularFire': 'angularjs/angularfire',
    'uiRouter': 'angularjs/angular-ui',
    'public': '../app/public',
  },
  shim: {
    'angular' : {
      'exports' : 'angular'
    },
    'angularFire': {
      'deps': ['angular', 'firebase'],
      'exports' : 'angularFire'
    },
    'uiRouter': {
      'deps': ['angular'],
      'exports' : 'uiRouter'
    },
    'firebase': {
      'exports': 'firebase'
    },
    'bootstrap' : {
      "deps": ['jquery']
    }
  }
});

requirejs(['jquery', 'bootstrap'], function (jquery, bootstrap) {

});

requirejs(['firebase', 'helpers/firebase_config', ], function (firebase, firebaseConfig) {
  firebase.initializeApp(firebaseConfig.config);
  requirejs(['app/mkApp.module'], function (mkApp) {
    // var appModule = 'appModule';
    // angular.module(appModule, [MKApp]);
    // angular.bootstrap(document.getElementsByTagName("body")[0], [ appModule ]);
  });
});
