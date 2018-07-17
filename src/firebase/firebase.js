import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDIuDxUMsIZJNvG7fyjhp0Lqn6fgbVhwyY",
    authDomain: "hist-96d43.firebaseapp.com",
    databaseURL: "https://hist-96d43.firebaseio.com",
    projectId: "hist-96d43",
    storageBucket: "hist-96d43.appspot.com",
    messagingSenderId: "775416095138"
};

// Initialise iff not already initialised
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
export {
    auth,
};