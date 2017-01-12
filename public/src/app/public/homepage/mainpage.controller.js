/**
 * Created by Maciek on 11.01.2017.
 */

(function(define){
  'use strict';
  define([],
  function () {
    MainPageCtrl.$inject = ['credentials', 'shit'];
    function MainPageCtrl(credentials, shit) {
      var $ctrl = this;
      console.log(shit);
      $ctrl.shit = shit;
      $ctrl.credentials = credentials;

    };

    return MainPageCtrl;

  });
}(define));
