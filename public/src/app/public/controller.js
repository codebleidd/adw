(function(define){
  'use strict';
  define([],
  function () {
    MainCtrl.$inject = ['DatabaseService', '$timeout'];
    function MainCtrl(DatabaseService,$timeout) {
      var ctrl = this;

      ctrl.message =  DatabaseService.getCredentials();
      ctrl.shit = 'jeb sie pierdolony angularze';

    };

    return MainCtrl;
  });
}(define));