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
        var ref = firebase.database().ref().child('credentials');

        service.getCredentials = function () {
          return $firebaseObject(ref)
            .$loaded(
              function (snapshot) {
                return snapshot.credentials;
              });
        };


        service.getShit = function () {
          return $http.get('shit.json')
            .then(
              function (response) {
                console.log(response);
                return response.data;
              },
              function (error) {
                throw new Error('Shit fucked up');
              });
        };

      };
      return DatabaseService;
    });
}(define));
