(function() {
  'use strict';
  angular.module('MKApp').controller('MainPageController', MainPageController);

  MainPageController.$inject = ['$scope'];
  function MainPageController($scope) {
    var $ctrl = this;
    $ctrl.helloMessage = 'Hello World';
  }

}());
