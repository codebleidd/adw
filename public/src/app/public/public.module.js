/**
 * Created by Maciek on 13.01.2017.
 */
// (function (define) {
//   define([
//       '../common/database.service',
//
//       './public.controller',
//       './homepage/homepage.controller',
//       './aboutme/aboutme.controller',
//
//       './page-footer/page-footer.component',
//       './special-info/special-info.component',
//       './aboutme/aboutme.elem.component',
//
//       './routes',
//       'angularFire',
//       'uiRouter'
//     ],
//     function (DatabaseService,
//               PublicCtrl,
//               HomePageCtrl,
//               AboutmeCtrl,
//               PageFooter,
//               SpecialInfo,
//               AboutmeElem,
//               RoutesConfig) {
//
//       'use strict';
//       var moduleName = 'public';
//
//       angular.module(moduleName, ['ui.router', 'firebase'])
//         .service('DatabaseService', DatabaseService)
//
//         .controller('PublicCtrl', PublicCtrl)
//         .controller('HomePageCtrl', HomePageCtrl)
//         .controller('AboutmeCtrl', AboutmeCtrl)
//
//         .component('pageFooter', PageFooter)
//         .component('specialInfo', SpecialInfo)
//         .component('aboutmeElem', AboutmeElem)
//
//         .config(RoutesConfig);
//
//       return moduleName;
//     });
// }(define));

/** Dependecies */
// import angular from 'angular';
import uirouter from 'angular-ui-router';

/** Services */
import DatabaseService from 'Common/database.service.js';

/** Controllers*/
import PublicCtrl from 'Public/public.controller.js';
import HomePageCtrl from 'Public/homepage/homepage.controller.js';
import AboutmeCtrl from 'Public/aboutme/aboutme.controller.js';

/** Components */
import PageFooter from 'Public/page-footer/page-footer.component.js';
import SpecialInfo from 'Public/special-info/special-info.component.js';
import AboutmeElem from 'Public/public.controller.js';


/** Configs */
import RoutesConfig from 'Public/routes.js';

/** Public module instantiation */
var moduleName = 'public';

/** Default public module of the app*/
export default angular.module(moduleName, [uirouter])
  .service('DatabaseService', DatabaseService)

  .controller('PublicCtrl', PublicCtrl)
  .controller('HomePageCtrl', HomePageCtrl)
  .controller('AboutmeCtrl', AboutmeCtrl)

  .component('pageFooter', PageFooter)
  .component('specialInfo', SpecialInfo)
  .component('aboutmeElem', AboutmeElem)

  .config(RoutesConfig)
  .name;








