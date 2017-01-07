(function(define) {
  define([], function () {
    'use strict';
    MKAppController.$inject = ['$scope'];
    function MKAppController($scope) {
      var $ctrl = this;
      $ctrl.helloMessage = 'Hello World';
    }
    return MKAppController;
  });
}(define));
