/**
 * Created by Maciek on 13.01.2017.
 */
(function (define) {
  define([
      '../common/database.service',
      './public.controller',
      './homepage/homepage.controller',
      './page-footer/page-footer.component',
      './special-info/special-info.component',
      './routes',
      'angularFire',
      'uiRouter'
    ],
    function (DatabaseService, PublicCtrl, HomePageCtrl, PageFooter, SpecialInfo, RoutesConfig) {
      'use strict';
      var moduleName = 'public';

      angular.module(moduleName, ['ui.router', 'firebase'])
        .service('DatabaseService', DatabaseService)
        .controller('PublicCtrl', PublicCtrl)
        .controller('HomePageCtrl', HomePageCtrl)
        .component('pageFooter', PageFooter)
        .component('specialInfo', SpecialInfo)
        .config(RoutesConfig);

      return moduleName;
    });
}(define));