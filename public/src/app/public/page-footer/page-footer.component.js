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


    };

    return {
      templateUrl: 'src/app/public/page-footer/page-footer.template.html',
      controller: PageFooterCtrl
    }
  });



}(define));