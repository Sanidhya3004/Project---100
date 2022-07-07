
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDaLUXcUoi4Rizw76-NAUkwSAmtjGiX17g",
      authDomain: "kwiter-d000c.firebaseapp.com",
      databaseURL: "https://kwiter-d000c-default-rtdb.firebaseio.com",
      projectId: "kwiter-d000c",
      storageBucket: "kwiter-d000c.appspot.com",
      messagingSenderId: "913858860145",
      appId: "1:913858860145:web:f480fd6bf2dd73805db7d0",
      measurementId: "G-B4J3M9P0NJ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
