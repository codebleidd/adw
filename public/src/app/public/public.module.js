/**
 * Created by Maciek on 13.01.2017.
 */
(function (define) {
  define([
      '../common/database.service',

      './public.controller',
      './homepage/homepage.controller',
      './aboutme/aboutme.controller',

      './page-footer/page-footer.component',
      './special-info/special-info.component',
      './aboutme/aboutme.elem.component',

      './routes',
      'angularFire',
      'uiRouter'
    ],
    function (DatabaseService,
              PublicCtrl,
              HomePageCtrl,
              AboutmeCtrl,
              PageFooter,
              SpecialInfo,
              AboutmeElem,
              RoutesConfig) {

      'use strict';
      var moduleName = 'public';

      angular.module(moduleName, ['ui.router', 'firebase'])
        .service('DatabaseService', DatabaseService)

        .controller('PublicCtrl', PublicCtrl)
        .controller('HomePageCtrl', HomePageCtrl)
        .controller('AboutmeCtrl', AboutmeCtrl)

        .component('pageFooter', PageFooter)
        .component('specialInfo', SpecialInfo)
        .component('aboutmeElem', AboutmeElem)

        .config(RoutesConfig);

      return moduleName;
    });
}(define));