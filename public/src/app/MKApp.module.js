(function (define) {
  define([
      './common/database.service',
      './routes',
      './public/homepage/mkApp.controller',
      './public/homepage/mainpage.controller',
      'angularFire',
      'uiRouter'
    ],
    function (DatabaseService, RoutesConfig, mkAppController, MainPageCtrl) {
      'use strict';
      var moduleName = 'mkApp';
      angular.module(moduleName, ['ui.router', 'firebase'])
        .service('DatabaseService', DatabaseService)
        .controller('mkAppController', mkAppController)
        .controller('MainPageCtrl', MainPageCtrl)
        .config(RoutesConfig);

      angular.bootstrap(document.getElementsByTagName("body")[0], [moduleName]);
      return moduleName;
    });
}(define));
