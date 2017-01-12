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

        .state('mainPage', {
          url: '/',
          templateUrl: 'src/app/public/homepage/templates/mainpage.template.html',
          controller: 'MainPageCtrl',
          controllerAs: 'mainpage',
          resolve: {
            credentials: ['DatabaseService', function (DatabaseService) {
              return DatabaseService.getCredentials();
            }],
            shit: ['DatabaseService', function (DatabaseService) {
              return DatabaseService.getShit();
            }]
          }
        });

    };
    return RoutesConfig;
  });
}(define));