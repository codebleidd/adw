/**
 * Created by Maciek on 13.01.2017.
 */
/** Dependecies */
// import angular from 'angular';
import uirouter from 'angular-ui-router';
// require('angularfire');

/** Services */
import DatabaseService from 'Common/database.service.js';

/** Controllers*/
import PublicCtrl from 'Public/public.controller.js';
import HomePageCtrl from 'Public/homepage/homepage.controller.js';
import AboutMeCtrl from 'Public/aboutme/aboutme.controller.js';
import ContactController from 'Public/contact/contact.controller.js';

/** Components */
import PageFooter from 'Public/page-footer/page-footer.component.js';
import SpecialInfo from 'Public/special-info/special-info.component.js';
import AboutmeElem from 'Public/aboutme/aboutme.elem.component.js';

/** Configs */
import RoutesConfig from 'Public/routes.js';

/** Public module instantiation */
var moduleName = 'publicModule';

/** Default public module of the app*/
export default angular.module(moduleName, [uirouter])
  .service('DatabaseService', DatabaseService)

  .controller('PublicCtrl', PublicCtrl)
  .controller('HomePageCtrl', HomePageCtrl)
  .controller('AboutMeCtrl', AboutMeCtrl)
  .controller('ContactController', ContactController)

  .component('pageFooter', PageFooter)
  .component('aboutmeElem', AboutmeElem)
  .component('specialInfo', SpecialInfo)

  .config(RoutesConfig)
  .name;
