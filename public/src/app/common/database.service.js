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
          return ref.once('value')
            .then(
              function (snapshot) {
                return snapshot.credentials;
              });
          return 'no, it does not'
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
