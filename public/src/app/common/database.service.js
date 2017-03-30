/**
 * Created by Maciek on 11.01.2017.
 */
import firebase from 'firebase';

export default function DatabaseService() {
  var service = this;

  service.getCredentials = function () {
    return firebase.database().ref('credentials').once('value')
      .then(function (snapshot) {
        return snapshot.val();
      })
      .catch(function (error) {
        console.error('Error occured: ', error);
      });
  };

  service.getComponents = function (path) {
    return firebase.database().ref('/components/' + path).once('value')
      .then(function (snapshot) {
        return snapshot.val();
      })
      .catch(function (error) {
        console.error('Error occured: ', error);
      });
  };
};