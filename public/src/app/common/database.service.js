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
        var database = firebase.database();

        service.getCredentials = function () {
          var ref = database.ref('credentials');
          return $firebaseObject(ref).$loaded()
            .then(function (snapshot) {
              return snapshot;
            })
            .catch(function (error) {
              console.error('Error occured: ', error);
            });
        };

        service.getComponents = function (path) {
          var ref = database.ref('components/' + path);
          return $firebaseObject(ref).$loaded()
            .then(function (snapshot) {
              return snapshot;
            })
            .catch(function (error) {
              console.error('Error occured: ', error);
            });
        };

      };

      return DatabaseService;
    });
}(define));
