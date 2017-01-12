/**
 * Created by Maciek on 11.01.2017.
 */

(function(define){
  'use strict';
  define([],
  function () {
    DatabaseService.$inject = ['$http', '$firebaseObject'];
    function DatabaseService($http, $firebaseObject) {

      var service = this;

      service.getCredentials = function () {
        var ref = firebase.database().ref();
        return $firebaseObject(ref).$loaded().then(function (response) {
          return response.credentials;
        });
      };

      service.getShit = function () {
        $http.get('shit.json').then(function (response) {
          console.log(response.data);
          return response.data;
        });
      };

    };
    return DatabaseService;
  });
}(define));
