/**
 * Created by Maciek on 11.01.2017.
 */

// import angular from 'angular';
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
