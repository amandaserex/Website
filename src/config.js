//dont worry about exposing your API key, it is bad practice and generally not advised, but for now it really doesn't matter, Google ensures only the authorized users can access api keys
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBHJb094WyUWDWhxsVyHKbP4aMqZlEHJ2Y",
    authDomain: "cs185-hw-4.firebaseapp.com",
    databaseURL: "https://cs185-hw-4.firebaseio.com",
  }
firebase.initializeApp(config);
export default firebase;