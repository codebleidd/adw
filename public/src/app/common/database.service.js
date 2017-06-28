/**
 * Created by Maciek on 11.01.2017.
 */
import firebase from 'firebase';

export default DatabaseService;

function DatabaseService() {
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

  service.pushMsgToDatabase = function (name, surname, email, message) {
    let newMsgKey = firebase.database().ref('/messages/').push().key;
    let currentDate = new Date();
    let newMessage = {
      name: name,
      surname: surname,
      email: email,
      message: message,
      date: currentDate
    };
    let updates = {};
    updates['messages/' + newMsgKey] = newMessage;
    firebase.database().ref().update(updates);
  }
};
