(function (define) {
  define([
      './public/public.module'
    ],
    function (public_module) {
      'use strict';
      var moduleName = 'mkApp';

      angular.module(moduleName, [public_module])
        .config(config);

      config.$inject = ['$urlRouterProvider'];
      function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
      };

      return moduleName;
    });
}(define));
