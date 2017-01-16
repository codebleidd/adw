/**
 * Created by Maciek on 12.01.2017.
 */
(function(define){
  'use strict';
  define([],
  function () {
    PageFooterCtrl.$inject = ['DatabaseService', '$timeout'];
    function PageFooterCtrl(DatabaseService, $timeout) {
      var $ctrl = this;

      var dataPromise = DatabaseService.getCredentials();
      dataPromise
        .then(function (snapshot) {
          $ctrl.contact = snapshot.contact;
          $ctrl.address = snapshot.address;
        })
        .catch(function (reject) {
          console.log(reject);
        });

    };

    return {
      templateUrl: 'src/app/public/page-footer/page-footer.template.html',
      controller: PageFooterCtrl
    }
  });



}(define));