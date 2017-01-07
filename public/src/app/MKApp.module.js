(function(define) {
  define([
    'angularFire',
    'public/MKApp.controller',
    'uiRouter'
  ],
  function(angularFire, MKAppController){
    'use strict';
    var moduleName = 'MKApp';
    // console.log(angular.module('firebase'));
    angular.module(moduleName, ['ui.router', 'firebase'])
      .controller('MKAppController', MKAppController);
    angular.bootstrap(document.getElementsByTagName("body")[0], [ moduleName ]);
    return moduleName;
  });
}(define));
