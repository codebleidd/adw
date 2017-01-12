(function(define) {
  define([], function () {
    'use strict';
    mkAppController.$inject = ['$scope', 'DatabaseService'];
    function mkAppController($scope, DatabaseService) {
      var $ctrl = this;
      $ctrl.helloMessage = DatabaseService.getCredentials();
    }
    return mkAppController;
  });
}(define));
