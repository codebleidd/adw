(function(define) {
  define([
    'angularFire',
    'public/mkApp.controller',
    'uiRouter'
  ],
  function(angularFire, mkAppController){
    'use strict';
    var moduleName = 'mkApp';
    // console.log(angular.module('firebase'));
    angular.module(moduleName, ['ui.router', 'firebase'])
      .controller('mkAppController', mkAppController);
    angular.bootstrap(document.getElementsByTagName("body")[0], [ moduleName ]);
    return moduleName;
  });
}(define));
