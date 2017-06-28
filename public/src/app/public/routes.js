/**
 * Created by Maciek on 11.01.2017.
 */

RoutesConfig.$inject = ['$stateProvider'];

export default RoutesConfig;

function RoutesConfig($stateProvider) {

  $stateProvider

    .state('public',{
      abstract: true,
      template: require('Public/public.html'),
      controller: 'PublicCtrl as public',
      resolve: {
        credentials: ['DatabaseService', function (DatabaseService) {
          return  DatabaseService.getCredentials();
        }]
      }
    })

    .state('public.homepage', {
      url: '/',
      template: require('Public/homepage/homepage.template.html'),
      controller: 'HomePageCtrl as home',
      resolve: {
        elements: ['DatabaseService', function (DatabaseService) {
          return DatabaseService.getComponents('main_page');
        }]
      }
    })

    .state('public.aboutme', {
      url: '/omnie',
      template: require('Public/aboutme/aboutme.template.html'),
      controller: 'AboutMeCtrl as aboutme',
      resolve: {
        credentials: ['DatabaseService', function (DatabaseService) {
          return  DatabaseService.getCredentials();
        }],
        aboutmeElems: ['DatabaseService', function (DatabaseService) {
          return DatabaseService.getComponents('aboutme');
        }]
      }
    })

    .state('public.contact', {
      url:'/kontakt',
      template: require('Public/contact/contact.template.html'),
      controller: 'ContactController as contact',
      resolve: {
        contactInfo: ['DatabaseService', function (DatabaseService) {
          return DatabaseService.getComponents('contact');
        }]
      }
    });

};
