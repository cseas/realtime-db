(function() {
  // Initialize Firebase
  const config = {
    apiKey: "",
    authDomain: "<yourapp>.firebaseapp.com",
    databaseURL: "https://<yourapp>.firebaseio.com",
    projectId: "<yourapp>",
    storageBucket: "<yourapp>.appspot.com",
    messagingSenderId: ""
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