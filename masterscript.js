//// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyBD2tfr_ZHlNxZ7wBIx0Fj3kMhb9isq7OU",
    authDomain: "thebigproject-4656e.firebaseapp.com",
    databaseURL: "https://thebigproject-4656e.firebaseio.com",
    projectId: "thebigproject-4656e",
    storageBucket: "thebigproject-4656e.appspot.com",
    messagingSenderId: "894749994618",
    appId: "1:894749994618:web:47f8e54ee75f9ab47395c3",
    measurementId: "G-N4WQYB5MFT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   
    document.getElementById("login-container").style.display = "none";
      document.getElementById("register-container").style.display = "none";
     
    var user = firebase.auth().currentUser;
     console.log("User is: "+user);
    if(user != null){

      var email_id = user.email;
      var name=user.email;
      
      // console.log("username:"+user.username);
      console.log("User is: "+name);
       
      var p = document.getElementById("para");
      p.innerHTML="Welcome dear user: "+user.email;
     var b = document.getElementById("logout");
     // var bt = document.createTextNode("Logout");
     // b.appendChild(bt);
     // p.appendChild(b);
     document.getElementById("para").style.display="block";
     document.getElementById("logout").style.display="block";
     document.getElementById("delete").style.display="block";
     document.getElementById("logout").onclick = function(){ console.log("logout successful!!!");
   firebase.auth().signOut(); 
  document.getElementById("register-form").reset();
  document.getElementById("login-form").reset();
    } ;

 document.getElementById("delete").onclick = function(){    user.delete().then(function() {
  // User deleted.
  console.log("User: "+user.email+" deleted!!!!");
       document.getElementById("register-form").reset();
  document.getElementById("login-form").reset();
}).catch(function(error) {
  // An error happened.
}); } ;


    }

  } else {
    // No user is signed in.
    console.log("No user is signed in");
     document.getElementById("para").style.display="none";
        document.getElementById("logout").style.display="none";
        document.getElementById("delete").style.display="none";
    document.getElementById("login-container").style.display = "block";
   document.getElementById("register-container").style.display = "block";
  }
});

function login(){


  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
console.log("entered email: "+userEmail+" entered password: "+userPass);
  firebase.auth().signInWithEmailAndPassword(userEmail,userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
console.log(errorMessage);
    window.alert("Error : " + errorMessage+ " register your account and then try to login :)");

    // ...
  });

}
function signup(){

  var userEmail = document.getElementById("Email").value;
  var userPass = document.getElementById("Password").value;
var username = document.getElementById("UN").value;
       firebase.analytics().setUserProperties({username: `{username}`});
       console.log("username is :"+username);
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

//   window.addEventListener("load", function () {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden"; // class "loader hidden"
// });
setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  }, 2000);
