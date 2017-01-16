/**
 * Created by Maciek on 11.01.2017.
 */
(function(define){
  'use strict';
  define([],
  function () {
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider

        .state('homepage', {
          url: '/',
          templateUrl: ''
        });

    };
    return RoutesConfig;
  });
}(define));