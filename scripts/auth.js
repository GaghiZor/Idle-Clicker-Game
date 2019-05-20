const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

// Add login event
btnLogin.addEventListener("click", e => {
  // Get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;

  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass).then(function(value){
    document.location.href = "game.html";
  });
  promise.catch(e => {
    console.log(e.message);
    document.getElementById("reg").innerHTML = e.message;
    document.getElementById("reg").style.display = "block";
  });
});

// Add signup event
btnSignUp.addEventListener("click", e => {
  // Get email and password
  const email = emailsignup.value;
  const pass = passwordsignup.value;
  const pass2 = passwordsignup_confirm.value;

    // Sign in
	if(pass == pass2)
    {
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise
		  .then(function(value){
			document.getElementById("reg").innerHTML = "You have been successfully registered. You can log in now.";
			document.getElementById("userEmail").innerHTML = "Your email is: " + email;
			document.getElementById("userPassword").innerHTML = "Your password is the one you chose.";

			document.getElementById("userEmail").style.display = "block";
			document.getElementById("userPassword").style.display = "block";
			document.getElementById("reg").style.display = "block";
			
			emailsignup.value = "";
			passwordsignup.value = "";
			passwordsignup_confirm.value = "";
		  })
		  .catch(e => {
			console.log(e.message)
			document.getElementById("reg").innerHTML = e.message;
			document.getElementById("reg").style.display = "block";
		  });
	}
	else {
		alert("Passwords do not match.");
		passwordsignup.value = "";
		passwordsignup_confirm.value = "";
	}
});

// Add Logout event
btnLogout.addEventListener("click", e => {
  firebase.auth().signOut();
  document.location.href = "index.html";
});

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    btnLogout.classList.remove("hide");
  }
  else {
    console.log("Not logged in");
    btnLogout.classList.add("hide");
  }
});

