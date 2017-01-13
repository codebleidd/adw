(function (define) {
  define([
      './public/public.module'
    ],
    function (public_module) {
      'use strict';
      var moduleName = 'mkApp';

      angular.module(moduleName, [public_module]);

      return moduleName;
    });
}(define));
