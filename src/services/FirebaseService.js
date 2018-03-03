import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBN41dm48PtngyEUPGURNZegn507z2MtKg",
  authDomain: "react-todo-d3f43.firebaseapp.com",
  databaseURL: "https://react-todo-d3f43.firebaseio.com",
  projectId: "react-todo-d3f43",
  storageBucket: "react-todo-d3f43.appspot.com",
  messagingSenderId: "440067337568"
};
firebase.initializeApp(config);

export default firebase.database();