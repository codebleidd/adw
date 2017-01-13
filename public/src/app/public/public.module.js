/**
 * Created by Maciek on 13.01.2017.
 */
(function (define) {
  define([
      '../common/database.service',
      './page-footer/page-footer.component',
      './controller',
      './routes',
      'angularFire',
      'uiRouter'
    ],
    function (DatabaseService, PageFooter, MainCtrl) {
      'use strict';
      var moduleName = 'public';

      angular.module(moduleName, ['ui.router', 'firebase'])
        .controller('MainCtrl', MainCtrl)
        .service('DatabaseService', DatabaseService)
        .component('pageFooter', PageFooter);

      return moduleName;
    });
}(define));