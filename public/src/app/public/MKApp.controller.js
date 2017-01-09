(function(define) {
  define([], function () {
    'use strict';
    mkAppController.$inject = ['$scope'];
    function mkAppController($scope) {
      var $ctrl = this;
      $ctrl.helloMessage = 'Hello World';
    }
    return mkAppController;
  });
}(define));
