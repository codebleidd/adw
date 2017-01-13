(function(define){
  'use strict';
  define([],
  function () {
    MainCtrl.$inject = ['DatabaseService'];
    function MainCtrl(DatabaseService) {
      var ctrl = this;
      ctrl.message = DatabaseService.getCredentials();
      ctrl.shit = 'jeb sie pierdolony angularze';

    };

    return MainCtrl;
  });
}(define));