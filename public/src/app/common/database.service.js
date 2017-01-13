/**
 * Created by Maciek on 11.01.2017.
 */

(function (define) {
  'use strict';
  define([],
    function () {
      DatabaseService.$inject = ['$http', '$firebaseObject'];
      function DatabaseService($http, $firebaseObject) {

        var service = this;
        var ref = firebase.database().ref();

        service.getCredentials = function () {
          return $firebaseObject(ref).$loaded(function(response) {
            return response.credentials;
          });
        };

      };
      return DatabaseService;
    });
}(define));
