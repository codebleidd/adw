/**
 * Created by Maciek on 12.01.2017.
 */
(function(define){
  'use strict';
  define([],
  function () {
    PageFooterCtrl.$inject = ['DatabaseService'];
    function PageFooterCtrl(DatabaseService) {
      var $ctrl = this;
      var credentials = DatabaseService.getCredentials();
      console.log(DatabaseService);
      $ctrl.address = credentials.address;
      $ctrl.contact = credentials.contact;

    };

    return {
      templateUrl: 'src/app/public/page-footer/page-footer.template.html',
      controller: PageFooterCtrl,
      controllerAs: 'footer'
    }
  });



}(define));