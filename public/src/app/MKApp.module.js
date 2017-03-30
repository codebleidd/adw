// (function (define) {
//   define([
//       './public/public.module'
//     ],
//     function (public_module) {
//       'use strict';
//       var moduleName = 'mkApp';
//
//       angular.module(moduleName, [public_module])
//         .config(config);
//
//       config.$inject = ['$urlRouterProvider'];
//       function config($urlRouterProvider) {
//         $urlRouterProvider.otherwise('/');
//       };
//
//       return moduleName;
//     });
// }(define));

import angular from 'angular';
import publicModule from 'Public/public.module.js';
var appModule = 'mkApp';

config.$inject = ['$urlRouterProvider', '$locationProvider'];
function config($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
};

export default angular.module(appModule, [publicModule])
  .config(config)
  .name;
