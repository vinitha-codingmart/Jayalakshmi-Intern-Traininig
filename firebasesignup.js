
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFO9BThg1FLTmU2kKr-Bi1Ypf2kOx0C3o",
    authDomain: "forms-10813.firebaseapp.com",
    databaseURL: "https://forms-10813.firebaseio.com",
    projectId: "forms-10813",
    storageBucket: "forms-10813.appspot.com",
    messagingSenderId: "931248775019",
    appId: "1:931248775019:web:da350cc116fb957ce6f62e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
function signup(){
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var repass=document.getElementById("rpassword");
    if(password.value==repass.value)
    {
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
    }
    else{
        alert("Password Mismatch!!!");
    }
}
function signIn(){
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("Signed In" + email.value);
    window.location.href ="index.html";
}

