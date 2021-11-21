
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
      

    
      if(user != null){
        
       //User's details
        var name_id=user.name;
        var email_id = user.email;
        var password_id=user.password;
        var birthDate_id=user.birthDate;
        var address_id=user.address;
         document.getElementById("user_para").innerHTML = "Welcome : " + name_id; 
        document.getElementById("user_para").innerHTML = "Email : " + email_id;
         document.getElementById("user").innerHTML = "Password : " + password_id;
        document.getElementById("users").innerHTML = "Birth Date : " + birthDate_id;
        document.getElementById("users").innerHTML = "Address : " + address_id; 
       
        const uid = user.uid;

        /* //User update profile
        import { getAuth, updateProfile } from "firebase/auth";
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User", address: "",birthDate:"",email:"",password:""
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        }); */

      }
      

  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }

  //Show password function
function myFunction() {
  var x = document.getElementById("password_field");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


 // Email validate
function ValidateEmail(email_field) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
} 

//Check the password validation
function validatePassword() {
  var p = document.getElementById('password_field').value,
      errors = [];
  if (p.length < 6) {
      errors.push("Your password must be at least 6 characters"); 
  }
  if (p.search(/[a-z]/i) < 0) {
      errors.push("Your password must contain at least one letter.");
  }
  if (p.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit."); 
  }
  if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
  }
  return true;
}