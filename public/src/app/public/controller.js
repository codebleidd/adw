(function(define){
  'use strict';
  define([],
  function () {
    MainCtrl.$inject = ['DatabaseService', '$timeout', '$firebaseObject'];
    function MainCtrl(DatabaseService,$timeout, $firebaseObject) {
      var mainCtrl = this;

      var dataPromise = DatabaseService.getCredentials();
      dataPromise
        .then(function (snapshot) {
          mainCtrl.contact = snapshot;
        })
        .catch(function (reject) {
          console.log(reject);
        });

    };

    return MainCtrl;
  });
}(define));