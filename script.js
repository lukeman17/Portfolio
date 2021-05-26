//Initialize firebase.
var firebaseConfig = {
    apiKey: "AIzaSyB003lNlcxN2osdxsjFPk1jZtHSvN281nk",
    authDomain: "portfolio-form-90948.firebaseapp.com",
    projectId: "portfolio-form-90948",
    storageBucket: "portfolio-form-90948.appspot.com",
    messagingSenderId: "941484243341",
    appId: "1:941484243341:web:6612ba8e3832feaf9e25c4",
    measurementId: "G-STMWK4M89N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // refrence messages collection
  var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //save message
    saveMessage(name, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display = "flex";

    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
 
    }, 3000);

    //reset the form
    document.getElementById('form').reset();
};

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
};