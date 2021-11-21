const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDSCGAOi-s3MEiN-elegt1YrzPqguzsEpI",
      authDomain: "soccervista-investment.firebaseapp.com",
      projectId: "soccervista-investment",
      storageBucket: "soccervista-investment.appspot.com",
      messagingSenderId: "243385754239",
      appId: "1:243385754239:web:cce26fadafed058f69154a",
      measurementId: "G-EZF97S1RLT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()







// Set up our register function
function onSignUp () {
  //swal("Sorry", "We're not accepting anymore users for now", "info");
  try{
    swal("Sorry", "We're not accepting anymore users for now", "info", {
      button: {
        text: "Try Later!",
      },
    });
  }
  catch {
    alert("Check your internet connection")
  }

  /*
  // Get all our input fields
  email = document.getElementById('signup_email').value
  password = document.getElementById('signup_password').value
  nickname = document.getElementById('nickname').value
  loader_div = document.getElementById('loader_div'),
  second_container = document.getElementById('second_container')


  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    return
  }
  if (validate_field(nickname) == false) {
    return
  }
 
  // Move on with Auth
  loader_div.style.display = "block";
  second_container.style.display = "none";

  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      nickname : nickname,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    sessionStorage.setItem("current_page", "auth");
    window.location="home.html";
    //alert('User Created!!')
  })
  .catch(function(error) {
    loader_div.style.display = "none";
    second_container.style.display = "block";
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    swal("Sorry", error_message, "error");
  })
  */
}


// Set up our login function
function signIn () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  loader_div = document.getElementById('loader_div'),
  second_container = document.getElementById('second_container')

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    return
  }

  loader_div.style.display = "block";
  second_container.style.display = "none";
  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser
    // Add this user to Firebase Database
    var database_ref = database.ref()
    // Create User data
    var user_data = {
      last_login : Date.now()
    }
    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)
    // DOne
    sessionStorage.setItem("current_page", "auth");
    window.location="home.html";
    //alert('User Logged In!!')
  })
  .catch(function(error) {
    loader_div.style.display = "none";
    second_container.style.display = "block";
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    swal("Sorry", error_message, "error");
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    swal("Sorry", "Please enter a valid email", "error");
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    swal("Sorry", "your password must be above six characters", "error");
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null || field.length <= 0) {
    swal("Sorry", "please, enter your nick name", "error");
    return false
  } else {
    return true
  }
}




