(function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCU4teCV7bcq7Ok9WrPfEY9QU5KyGQIuVI",
    authDomain: "hello-5d780.firebaseapp.com",
    databaseURL: "https://hello-5d780.firebaseio.com",
    projectId: "hello-5d780",
    storageBucket: "hello-5d780.appspot.com",
    messagingSenderId: "703637547804"
  };
  firebase.initializeApp(config);

  // Get elements
  const preObject = document.getElementById('google');

  // Create reference
  const dbRefObject = firebase.database().ref().child('google');

  // Sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = snap.val();
  });

}());