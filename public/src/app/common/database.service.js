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
        var ref = firebase.database().ref('credentials');

        service.getCredentials = function () {
          return $firebaseObject(ref).$loaded()
            .then(function (snapshot) {
              return snapshot;
            })
            .catch(function (error) {
              console.error('Error occured: ', error);
            });
        };

        service.getShit = function () {
          return $http.get('shit.json');
        }

      };

      return DatabaseService;
    });
}(define));
