/**
 * Created by Maciek on 11.01.2017.
 */
(function(define){
  'use strict';
  define([],
  function () {
    RoutesConfig.$inject = ['$stateProvider'];
    function RoutesConfig($stateProvider) {

      $stateProvider

        .state('public',{
          abstract: true,
          templateUrl: 'src/app/public/public.html',
          controller: 'PublicCtrl as public',
          resolve: {
            credentials: ['DatabaseService', function (DatabaseService) {
              return  DatabaseService.getCredentials();
            }]
          }
        })

        .state('public.homepage', {
          url: '/',
          templateUrl: 'src/app/public/homepage/homepage.template.html',
          controller: 'HomePageCtrl as home',
          resolve: {
            elements: ['DatabaseService', function (DatabaseService) {
              return DatabaseService.getComponents('main_page');
            }]
          }
        })

        .state('public.aboutme', {
          url: '/omnie',
          templateUrl: 'src/app/public/aboutme/aboutme.template.html'

        });

    };
    return RoutesConfig;
  });
}(define));


















